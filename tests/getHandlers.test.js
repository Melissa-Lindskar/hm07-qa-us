// eslint-disable-next-line no-undef
const config = require('../config');


//Test 1 = positive test for status code
test('', async () => {
   try {
       const response = await fetch(`${config.API_URL}/warehouses`);
       expect(response.status).toBe(200); //check the status code is 200
   } catch (error) {
       console.error('Error fetching warehouses:', error);
   }
});


//Test 2 = Negative test for status code
test('should return a 404 status code for a non-existent warehouse', async () => {
   try {
       const response = await fetch(`${config.API_URL}/warehouses/nonexistent`);
       expect(response.status).toBe(404); // Check the status code is 404 for not found
   } catch (error) {
       console.error('Error fetching non-existent warehouse:', error);
   }
});


// Test för att kontrollera att svaret innehåller en lista av lager
// Test 3 = Controll that the response contain a
test('should return a list of warehouses', async () => {
   try {
       const response = await fetch(`${config.API_URL}/warehouses`);
       const data = await response.json();
       expect(Array.isArray(data)).toBeTruthy();  // Check the response is an array
       expect(data.length).toBeGreaterThan(0);  // Check the array isnt empty
   } catch (error) {
       console.error('Error fetching data:', error);
   }
});


//Test 4 = Check for  warehouse data structure name, working hours start and end
test('should verify warehouse data structure', async () => {
   try {
       const response = await fetch(`${config.API_URL}/warehouses`);
       const data = await response.json();
       expect(data.length).toBeGreaterThan(0);  // Kontrollerar att vi får data
       data.forEach(item => {
           expect(item).toHaveProperty('name');
           expect(item).toHaveProperty('workingHours');
           expect(item.workingHours).toHaveProperty('start');
           expect(item.workingHours).toHaveProperty('end');
       });
   } catch (error) {
       console.error('Error verifying data structure:', error);
   }
});


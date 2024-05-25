// eslint-disable-next-line no-undef
const config = require('../config');


// Test 1 = check return 200 OK för "/warehouses/check"
test('POST /warehouses/check should return 200 OK', async () => {
   try {
       const requestBody = {
           products: [
               { id: 5, quantity: 1 },
               { id: 4, quantity: 5 }
           ]
       };


       const response = await fetch(`${config.API_URL}/warehouses/check`, {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(requestBody)
       });
       expect(response.status).toBe(200);
   } catch (error) {
       console.error('Error checking availability:', error);
   }
});


// Test 2 = check return 200 OK för "/warehouses/amount"
test('POST /warehouses/amount should return 200 OK', async () => {
   try {
       const requestBody = {
           ids: [1, 4, 44],
           dataType: 'json' // Detta fält är valfritt, default är 'json'
       };


       const response = await fetch(`${config.API_URL}/warehouses/amount`, {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(requestBody)
       });
       expect(response.status).toBe(200);
   } catch (error) {
       console.error('Error checking quantities:', error);
   }
});
// Test 2 = parse response for "/warehouses/check"
test('POST /warehouses/check should parse response correctly', async () => {
   try {
       const requestBody = {
           products: [
               { id: 5, quantity: 1 },
               { id: 4, quantity: 5 }
           ]
       };


       const response = await fetch(`${config.API_URL}/warehouses/check`, {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(requestBody)
       });
       const data = await response.json();
       // Kontrollerar att svaret innehåller korrekta nycklar för lager
       expect(data.hasOwnProperty('Everything You Need')).toBeTruthy();
       expect(data.hasOwnProperty('Food City')).toBeTruthy();
   } catch (error) {
       console.error('Error parsing check availability response:', error);
   }
});


// Test 4 = parse response for "/warehouses/amount"
test('POST /warehouses/amount should parse response correctly', async () => {
   try {
       const requestBody = {
           ids: [1, 4, 44],
           dataType: 'json'
       };


       const response = await fetch(`${config.API_URL}/warehouses/amount`, {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(requestBody)
       });
       const data = await response.json();
       // Kontrollerar att svaret innehåller korrekta nycklar för lager
       expect(data.hasOwnProperty('Everything You Need')).toBeTruthy();
       expect(data.hasOwnProperty('Big World')).toBeTruthy();
   } catch (error) {
       console.error('Error parsing quantity check response:', error);
   }
});

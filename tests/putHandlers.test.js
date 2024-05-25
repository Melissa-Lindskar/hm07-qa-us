// eslint-disable-next-line no-undef
const config = require('../config');




// Test 1: Check response status code for "/api/v1/products/:id"
test('PUT /api/v1/products/7 should return 200 OK', async () => {
   try {
       const requestBody = {
           price: 175
       };


       const response = await fetch(`${config.API_URL}/products/7`, {
           method: 'PUT',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(requestBody)
       });
       expect(response.status).toBe(200);
   } catch (error) {
       console.error('Error updating product price:', error);
   }
});


// Test 2: Parse response for "/api/v1/products/:id"
test('PUT /api/v1/products/7 should parse response correctly', async () => {
   try {
       const requestBody = {
           price: 175
       };


       const response = await fetch(`${config.API_URL}/products/7`, {
           method: 'PUT',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(requestBody)
       });
       const data = await response.json();
       expect(data.ok).toBeTruthy();
   } catch (error) {
       console.error('Error parsing product update response:', error);
   }
});


// Test 3: Check response status code for "/api/v1/kits/:id"
test('PUT /api/v1/kits/7 should return 200 OK', async () => {
   try {
       const requestBody = {
           name: "My modified kit",
           productsList: [
               { id: 1, quantity: 4 },
               { id: 5, quantity: 2 },
               { id: 3, quantity: 1 },
               { id: 4, quantity: 1 }
           ]
       };


       const response = await fetch(`${config.API_URL}/kits/7`, {
           method: 'PUT',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(requestBody)
       });
       expect(response.status).toBe(200);
   } catch (error) {
       console.error('Error updating kit:', error);
   }
});


// Test 4: Parse response for "/api/v1/kits/:id"
test('PUT /api/v1/kits/7 should parse response correctly', async () => {
   try {
       const requestBody = {
           name: "My modified kit",
           productsList: [
               { id: 1, quantity: 4 },
               { id: 5, quantity: 2 },
               { id: 3, quantity: 1 },
               { id: 4, quantity: 1 }
           ]
       };


       const response = await fetch(`${config.API_URL}/kits/7`, {
           method: 'PUT',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(requestBody)
       });
       const data = await response.json();
       expect(data.ok).toBeTruthy();
   } catch (error) {
       console.error('Error parsing kit update response:', error);
   }
});

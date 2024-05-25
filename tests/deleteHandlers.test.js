// eslint-disable-next-line no-undef
const config = require('../config');


// Test 1: Check response status code for "/api/v1/kits/:id" DELETE
test('DELETE /api/v1/kits/7 should return 200 OK', async () => {
   try {
       const response = await fetch(`${config.API_URL}/kits/7`, {
           method: 'DELETE'
       });
       expect(response.status).toBe(200);
   } catch (error) {
       console.error('Error deleting kit:', error);
   }
});


// Test 2: Parse response for "/api/v1/kits/:id" DELETE
test('DELETE /api/v1/kits/7 should parse response correctly', async () => {
   try {
       const response = await fetch(`${config.API_URL}/kits/7`, {
           method: 'DELETE'
       });
       const data = await response.json();
       expect(data.ok).toBeTruthy();
   } catch (error) {
       console.error('Error parsing delete kit response:', error);
   }
});


// Test 3: Check response status code for "/api/v1/orders/:id" DELETE
test('DELETE /api/v1/orders/7 should return 200 OK', async () => {
   try {
       const response = await fetch(`${config.API_URL}/orders/7`, {
           method: 'DELETE'
       });
       expect(response.status).toBe(200);
   } catch (error) {
       console.error('Error deleting order:', error);
   }
});


// Test 4: Parse response for "/api/v1/orders/:id" DELETE
test('DELETE /api/v1/orders/7 should parse response correctly', async () => {
   try {
       const response = await fetch(`${config.API_URL}/orders/7`, {
           method: 'DELETE'
       });
       const data = await response.json();
       expect(data.ok).toBeTruthy();
   } catch (error) {
       console.error('Error parsing delete order response:', error);
   }
});

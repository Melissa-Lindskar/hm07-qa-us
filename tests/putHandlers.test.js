const config = require('../config');

// Test for checking the response status code when updating a product's price
test('Should return 200 OK when updating price for product with id 7', async () => {
    let response;
    try {
        const requestBody = { price: 175 };
        response = await fetch(`${config.API_URL}/products/7`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(requestBody)
        });
        expect(response.status).toBe(200);
    } catch (error) {
        console.error('Error updating product price:', error);
    }
});

// Test for parsing the response correctly when updating a product's price
test('Should correctly parse the response when updating price for product with id 7', async () => {
    let response;
    try {
        const requestBody = { price: 175 };
        response = await fetch(`${config.API_URL}/products/7`, {
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



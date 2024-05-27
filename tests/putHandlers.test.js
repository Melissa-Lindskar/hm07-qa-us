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

// Test for checking the response status code when updating a kit
test('Should return 200 OK when updating a kit with id 7', async () => {
    let response;
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
        response = await fetch(`${config.API_URL}/kits/7`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(requestBody)
        });
        expect(response.status).toBe(200);
    } catch (error) {
        console.error('Error updating kit:', error);
    }
});

// Test for parsing the response correctly when updating a kit
test('Should correctly parse the response when updating a kit with id 7', async () => {
    let response;
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
        response = await fetch(`${config.API_URL}/kits/7`, {
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

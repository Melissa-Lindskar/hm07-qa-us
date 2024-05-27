const config = require('../config');

// Test for checking the response status code for "/warehouses/check"
test('Should return 200 OK when posting to /warehouses/check', async () => {
    let response;
    try {
        const requestBody = {
            products: [
                { id: 5, quantity: 1 },
                { id: 4, quantity: 5 }
            ]
        };
        response = await fetch(`${config.API_URL}/warehouses/check`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(requestBody)
        });
        expect(response.status).toBe(200); // Assert status code is 200
    } catch (error) {
        console.error('Error checking availability:', error);
    }
});

// Test for parsing the response correctly for "/warehouses/check"
test('Should correctly parse the response for /warehouses/check', async () => {
    let response;
    try {
        const requestBody = {
            products: [
                { id: 5, quantity: 1 },
                { id: 4, quantity: 5 }
            ]
        };
        response = await fetch(`${config.API_URL}/warehouses/check`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(requestBody)
        });
        const data = await response.json();
        expect(data.hasOwnProperty('Everything You Need')).toBeTruthy(); // Check key presence in response
        expect(data.hasOwnProperty('Food City')).toBeTruthy(); // Check key presence in response
    } catch (error) {
        console.error('Error parsing check availability response:', error);
    }
});

// Test for checking the response status code for "/warehouses/amount"
test('Should return 200 OK when posting to /warehouses/amount', async () => {
    let response;
    try {
        const requestBody = {
            ids: [1, 4, 44],
            dataType: 'json'
        };
        response = await fetch(`${config.API_URL}/warehouses/amount`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(requestBody)
        });
        expect(response.status).toBe(200); // Assert status code is 200
    } catch (error) {
        console.error('Error checking quantities:', error);
    }
});

// Test for parsing the response correctly for "/warehouses/amount"
test('Should correctly parse the response for /warehouses/amount', async () => {
    let response;
    try {
        const requestBody = {
            ids: [1, 4, 44],
            dataType: 'json'
        };
        response = await fetch(`${config.API_URL}/warehouses/amount`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(requestBody)
        });
        const data = await response.json();
        expect(data.hasOwnProperty('Everything You Need')).toBeTruthy(); // Check key presence in response
        expect(data.hasOwnProperty('Big World')).toBeTruthy(); // Check key presence in response
    } catch (error) {
        console.error('Error parsing quantity check response:', error);
    }
});

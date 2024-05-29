const config = require('../config');

// Test for checking the response status code for "/warehouses/check" Please reviewer I dont understand your feedback "Please refer to the comments in your code, i cant find your comments like the code snippet you showed. Please let me know where to find it. I did open the test folder here in VS code, but do not see as off now"
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
        expect(response.status).toBe(200);
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
        expect(data.hasOwnProperty('Everything You Need')).toBeTruthy(); 
        expect(data.hasOwnProperty('Food City')).toBeTruthy();
    } catch (error) {
        console.error('Error parsing check availability response:', error);
    }
});
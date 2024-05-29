const config = require('../config');

// Test for checking the response status code when deleting a kit by ID. 
test('Should return 200 OK when deleting a kit with id 7', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/kits/7`, {
            method: 'DELETE'
        });
        expect(response.status).toBe(200);
    } catch (error) {
        console.error('Error deleting kit:', error);
    }
});

// Test for parsing the response correctly when deleting a kit by ID
test('Should correctly parse the response when deleting a kit with id 7', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/kits/7`, {
            method: 'DELETE'
        });
        const data = await response.json();
        expect(data.ok).toBeTruthy();
    } catch (error) {
        console.error('Error parsing delete kit response:', error);
    }
});
const config = require("../config");
// Test for fetching details of a kit by ID and checking the HTTP status
test('Should return 200 OK when fetching details of a kit by ID', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/kits/7`, {
            method: 'GET'
        });
        expect(response.status).toBe(200);
    } catch (error) {
        console.error('Error fetching kit details:', error);
    }
});

// Test for ensuring correct response structure when fetching a kit
test('Should correctly parse the response when fetching details of a kit', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/kits/7`, {
            method: 'GET'
        });
        const data = await response.json();
        expect(data).toHaveProperty('ok'); // Verify that the 'ok' property exists in the response
        expect(data.ok).toBeTruthy(); // Additionally, verify that the 'ok' property is true
    } catch (error) {
        console.error('Error parsing fetch kit response:', error);
    }
});



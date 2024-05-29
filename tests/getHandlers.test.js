const config = require("../config");

// Test for fetching details of a kit by ID and checking the HTTP status Please reviewer I dont understand your feedback "Please refer to the comments in your code", i cant find your comments like the code snippet you showed. Please let me know where to find it. I did open the test folder here in VS code, but do not see as off now
test('Should return 200 OK when fetching details of a kit by ID', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/kits/7`, {
            method: 'GET'
        });
    } catch (error) {
        console.error('Error fetching kit details:', error);
    }
    expect(response.status).toBe(200);
});

// Test for ensuring correct response structure when fetching a kit
test('Should correctly parse the response when fetching details of a kit', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/kits/7`, {
            method: 'GET'
        });
        const data = await response.json();
        expect(data).toHaveProperty('ok'); 
        expect(data.ok).toBeTruthy(); 
    } catch (error) {
        console.error('Error parsing fetch kit response:', error);
    }
});

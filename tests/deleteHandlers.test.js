const config = require("../config");

test('Should create a kit and return the correct status code', async () => {
    const requestBody = {
        name: "Test Kit", quantity: 10
    };

    let response;
    try {
        response = await fetch(`${config.API_URL}/kits`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(requestBody)
        });
        const responseData = await response.json(); 
        expect(response.status).toBe(201);
        expect(responseData.ok).toBe(true);  
    } catch (error) {
        console.error('Error creating kit:', error);
    }
});

test('Should delete a kit and return the correct status code', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/kits/7`, {  
            method: 'DELETE'
        });
        expect(response.status).toBe(200);
        const responseData = await response.json();  
        expect(responseData.ok).toBe(true);
    } catch (error) {
        console.error('Error deleting kit:', error);
    }
});

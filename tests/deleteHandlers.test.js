const config = require("../config");

test('Should create a kit and return the correct status code', async () => {
    const requestBody = {
        cardId: 1,
        name: "Going into space"
    };

    let response;
    let responseData;
    try {
        response = await fetch(`${config.API_URL}/api/v1/kits`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(requestBody)
        });
        responseData = response.status; 
        
    } catch (error) {
        console.error('Error creating kit:', error);
    }
    expect(responseData).toBe(201); 
});

// Test to check the response status code and content after deleting a kit
test('Should delete a kit and return the correct status code', async () => {
    let response;
    let responseData;
    try {
        // Assuming the kit to delete has id 7
        response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE'
        });
        responseData = await response.json(); // Parse response data
    } catch (error) {
        console.error('Error deleting kit:', error);
    }
    // Expectations are checked outside the try-catch to ensure they are always evaluated
    expect(response.status).toBe(200); // Check if the status code is 200
    expect(responseData.ok).toBe(true); // Check if the response body contains the expected data
});


/*
test('Should delete a kit and return the correct status code', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/kits/7`, {  
            method: 'DELETE'
        });
        expect(response.status).toBe(200);
        const responseData = await response.status();  
       
    } catch (error) {
        console.error('Error deleting kit:', error);
    }
    expect(responseData).toBe(true);
});
*/
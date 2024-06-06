const config = require('../config');

test('Should return 200 OK when updating price for product with id 7', async () => {
    let response; 
    try {
        const requestBody = { 
            "name": "string",
            "price": 175,
            "weight": 0,
            "units": "Units.kg",
            "category": {}
        };
        response = await fetch(`${config.API_URL}/api/v1/products/7`, { 
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(requestBody)
        });
    } catch (error) {
        console.error(error);
    }
    expect(response.status).toBe(200); 
});


test('Should correctly parse the response when updating price for product with id 7', async () => {
    let response;
    let data;
    try {
        const requestBody = {
            "name": "string",
            "price": 175,
            "weight": 0,
            "units": "Units.kg",
            "category": {}
        };
        response = await fetch(`${config.API_URL}/api/v1/products/7`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(requestBody)
        });
        data = await response.json();
    } catch (error) {
        console.error('Error parsing product update response:', error);
    }
    expect(data.ok).toBeTruthy();  
});





const config = require("../config");

test('Status code should be 200', async () => {
    let actualStatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
        actualStatusCode = response.status;  
        
    } catch (error) {
        console.error(error);
    }
    expect(actualStatusCode).toBe(200);  
});


test('Should correctly parse the response when fetching details of a kit', async () => {
  let actualResponseBody; 
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
    actualResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualResponseBody.name).toBe("For picnic");
});


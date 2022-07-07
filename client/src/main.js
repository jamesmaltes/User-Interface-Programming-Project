export async function fetchData(route='', data={}, methodType) {
    //sending over our data to specified route in server
    const response = await fetch(`${route}`, {
      method: methodType, // GET, POST, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    //dealing with our response from server
    if(response.ok) {
      return await response.json(); // parses JSON response into native Javascript objects
    } else {
      throw await response.json();
    }
  }


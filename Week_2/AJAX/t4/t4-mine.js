const fetchData = async(url, options) => {
  let returnResponse;
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      let errorMessage = `HTTP error ${response.status}`;

      try {
        const errorData = await response.json();
        if (errorData.error) {
          errorMessage = errorData.error;
        }
      } catch {
        //
      }
      throw new Error(errorMessage);
    }
    return await response.json();
    
  } catch (error) {
    returnResponse = error;
  }

  return returnResponse;
}

async function Main() {
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer',
    };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

Main();
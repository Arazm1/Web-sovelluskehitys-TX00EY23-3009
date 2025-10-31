async function StepOne() {
  const requestURL = 'https://reqres.in/api/users/1';
  try {
    const response = await fetch(requestURL, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log('Error: ', errorData.error);
      return;
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log('Error while fetching data', error);
  }
}





StepOne();

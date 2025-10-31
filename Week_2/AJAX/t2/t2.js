async function StepTwo() {
  try {
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log('Error: ', errorData.error);
      return;
    }
    console.log(response);
  } catch (error) {
    console.log('Error: ', error);
  }
}

StepTwo();
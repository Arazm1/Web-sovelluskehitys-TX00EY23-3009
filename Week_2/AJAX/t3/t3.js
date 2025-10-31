async function StepThree() {
  const requestURLInvalid = 'https://reqres.in/api/unknown/23';
  try {
    const response = await fetch(requestURLInvalid, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });

    if (!response.ok) {
        let errorStatus = response.status;
        try{
            const errorData = await response.json();
            if(errorData.error){
                errorStatus = errorData.error;
                console.log("Error status: ", errorStatus);
            }
        }catch{
            console.log("Error status: ", errorStatus);
            //
        }
        console.log("Error in response:", errorStatus)
        return;
    }
    
    const data = await response.json();
    console.log(data);


  } catch (error) {
    console.log('Error while fetching data', error);
  }
}


StepThree();
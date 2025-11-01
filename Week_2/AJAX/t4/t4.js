// task 4 - generic fetch function

const baseURL = 'https://reqres.in/api/';

const fetchData = async (endPointUrl, options = {}) => {
  try {
    const response = await fetch(baseURL + endPointUrl, options);
    if (!response.ok) {
      throw new Error('Response not ok');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('get failed', error);
    throw new Error(error);
  }
};

// käytetään fetchData-funktiota myös pääohjelmassa virheenkäsittely hyödyntäen
const user = {
  name: 'John Doe',
  job: 'Developer',
};
const options = {
  method: 'POST',
  headers: {
    'x-api-key': 'reqres-free-v1',
    'content-type': 'application/json',
  },
  body: JSON.stringify(user),
};
try {
  const responseData = await fetchData('users', options);
  console.log('response', responseData);
} catch (error) {
  // oikeassa elämässä tässä kerrotaan käyttäjälle, mitä tapahtui
  // esim. käyttöliittymän domia päivittämällä
  console.error('Virhe napattu kii:', error);
}

// pyyntö ilman virheenkäsittelyä
//console.log(await fetchData('users/2'));



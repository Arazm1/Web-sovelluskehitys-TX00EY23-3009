// TODO: add necessary imports
import { useState, useEffect } from 'react';


const fetchData = async ( url, options = {}) => {
  // console.log('fetching data from url: ', url);
  const response = await fetch(url, options);
  const json = await response.json();
  if (!response.ok) {
    // console.log('json', json);
    if (json.message) {
      throw new Error(json.message);
    }
    throw new Error(`Error ${response.status} occured`);
  }
  return json;
};



const useMedia = () => {


const [mediaArray, setMediaArray] = useState([]);


const getMedia = async () => {
  const url = import.meta.env.VITE_MEDIA_API + '/media';
  try{
    const mediaData = await fetchData(url);

    const newArray = await Promise.all(
      mediaData.map(async (item) => {
        const userUrl = import.meta.env.VITE_AUTH_API + '/users/' + item.user_id;
        const user = await fetchData(userUrl);

        return{
          ...item,
          username: user.username,
        };
      })
    );



    setMediaArray(newArray);
    console.log(newArray);
  }
  catch (error){
    console.log('Error fetching data: ', error);
  }
};


 useEffect(() => {
  getMedia();
 }, []);

 
return {mediaArray};
};





const useAuthentication = () => {

   const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(import.meta.env.VITE_AUTH_API + '/auth/login', fetchOptions);
    return loginResult;
  };



  return { postLogin }


}


const useUser = () => {

  const getUserByToken = async (token) =>{
    try{
      const fetchOptions = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      };

      const useUserResult = await fetchData(import.meta.env.VITE_AUTH_API + '/users/token', fetchOptions);
      return useUserResult;
    }
    catch(error){
      console.log('Error in useUser', error);
    }
  };


  const postUser = async (inputs) =>{
    try{
      const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const registerResult = await fetchData(import.meta.env.VITE_AUTH_API + '/users', fetchOptions);
    return registerResult;



    }catch(error){
      console.log('Error in postUser', error);
    }
    
    }


  return { getUserByToken, postUser }
}



   
export {useMedia, useAuthentication, useUser};
// TODO: add necessary imports
import { useState, useEffect } from 'react';
const useMedia = () => {


const [mediaArray, setMediaArray] = useState([]);

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
   
export {useMedia};
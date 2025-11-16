import { useState, useEffect } from 'react';
import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';

//import {useState} from 'react';

const Home = () => {
  {/*const [selectedItem, setSelectedItem] = useState(null);*/}


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


  return (



    
    <>
      <h2>My Media</h2>
      {/*<SingleView item={selectedItem} setSelectedItem={setSelectedItem} />*/}

      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};


export default Home;
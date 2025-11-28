import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useUser } from '../hooks/apiHooks';

const Profile = () => {
    const { getUserByToken } = useUser();
    const [user, setUser] = useState(null);



    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if(!token){
            console.log('no token found');
            return;
        }


        const getUserData = async () => {
            const userData = await getUserByToken(token);
            setUser(userData.user);
        };

        getUserData();
        
    }, []);


    return(
        <div className="max-w-xl mx-auto mt-10 p-8 bg-[#333333] text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Profile</h1>
      <p className="text-center mb-6 text-gray-200">Some info about your profile</p>

      {user ? (
        <div className="space-y-4 text-lg">
          <p>
            <span className="font-semibold">Username:</span> {user.username}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        </div>
      ) : (
        <p className="text-center text-gray-300">
          You must be logged in to see information on your profile.
        </p>
      )}
    </div>




    );
};

export default Profile;
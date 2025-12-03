// src/components/MediaRow.jsx
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useUserContext } from '../hooks/contextHooks';
import { useMedia } from '../hooks/apiHooks';


const MediaRow = ({ item, deleteMedia, modifyMedia }) => {

  
  const token = localStorage.getItem('token');

  const [showEdit, setShowEdit] = useState(false);

  const {user: contextUser} = useUserContext();
  const currentUser = contextUser?.user;
  const navigate = useNavigate();

  //console.log("User from context:", currentUser);
  //console.log("Item:", item);


  const isLoggedIn = !! currentUser;
  const isOwner = isLoggedIn && Number(currentUser.user_id) === Number(item.user_id);
  const isAdmin = isLoggedIn && currentUser.level_name == 'Admin';
  const canEdit = isOwner || isAdmin;


  const handleDelete = async () => {
    try{
      console.log('Deleting item!');
      
      await deleteMedia(item.media_id, token);
      
      //navigate(location.pathname);
    }
    catch(error){
      console.log('handleDelete failed: ', error);
    }
  }

  const handleModify = async () => {
    try{
      console.log('Opening Modify modal');
      setShowEdit(true);
      /*
      const updatedMediaData = {
        title: 'Updated title 1',
        description: 'Updated description 1',
      };

      await modifyMedia(token, item.media_id, updatedMediaData);
      navigate(location.pathname);
      */
    }
    catch(error){
      console.log('handleModify failed', error);
    }
  }

  //const {item} = props;
  return (
    // TODO: move <tr> element in foreach from Home.jsx here
    <tr>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.username}</td>

      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>

      <td>
        <Link to='/single' state={{ item }}>Open</Link>
      </td>
      <td>
        {canEdit && (
          <div>
            <div
              className="bg-amber-500 text-amber-50 rounded-2xl hover:bg-amber-950 px-2 py-1"
              onClick={handleModify}
            >
              Modify
            </div>
            <button onClick={handleDelete}>Delete</button>
            {showEdit && (
              <EditDialog
                item={item}
                modifyMedia={modifyMedia}
                onClose={() => setShowEdit(false)}
              />
            )}
            </div>
        )}
      </td>
    </tr>
  );
};

export default MediaRow;

// src/components/MediaRow.jsx
import PropTypes from 'prop-types';

const MediaRow = ({ item, setSelectedItem }) => {
  //const {item} = props;
  return (
    // TODO: move <tr> element in foreach from Home.jsx here
    <tr>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>

      <td>
        <button onClick={() => setSelectedItem(item)}>Click to View</button>
      </td>

    </tr>
  );
};

export default MediaRow;

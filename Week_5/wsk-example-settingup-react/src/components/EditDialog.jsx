const EditDialog = ({item, modifyMedia, onClose}) => {
  return (
    <>
      <dialog open>
        <h1>Edit media formit</h1>
        {/* TODOO: tee formi valmiiksi jossa voit editoida title ja description kenttiä*/}
        <button onClick={onClose}>CLOSE</button>
      </dialog>
    </>
  );
};

export default EditDialog;
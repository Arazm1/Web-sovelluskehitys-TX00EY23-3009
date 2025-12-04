import { useState } from "react";
import useForm from "../hooks/formHooks";

const EditDialog = ({item, modifyMedia, onClose}) => {

    //const [title, setTitle] = useState(item.title);
    //const [description, setDescription] = useState(item.description);

    //const token = localStorage.getItem('token');

    const submit = async () => {
        try{
            const token = localStorage.getItem('token');
            await modifyMedia(item.media_id, {
                title: inputs.title,
                description: inputs.description,
        }, token);
        onClose();
        }
        catch(error){
            console.log('Error updating media: ', error);
        }
    };

    const { inputs, handleInputChange, handleSubmit } = useForm(submit, {
        title: item.title,
        description: item.description,
    });

    


  return (
    <>
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <dialog open className="p-4 rounded-xl shadow-xl border max-w-sm w-full">
            <h1 className="text-lg font-bold mb-3">Edit media formit</h1>
        {/* TODOO: tee formi valmiiksi jossa voit editoida title ja description kenttiä*/}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label className="flex flex-col">
          Title:
          <input
            className="border p-1 rounded"
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleInputChange}
          />
        </label>

        <label className="flex flex-col">
          Description:
          <textarea
            className="border p-1 rounded"
            rows="3"
            name="description"
            value={inputs.description}
            onChange={handleInputChange}
          />
        </label>

        <div className="flex gap-2 mt-2">
          <button
            type="submit"
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-800"
          >
            Save
          </button>

          <button
            type="button"
            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>  
    </dialog>
    </div>
    </>
  );
};

export default EditDialog;
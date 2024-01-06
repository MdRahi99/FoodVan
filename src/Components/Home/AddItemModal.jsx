/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';

const AddItemModal = ({ showModal, closeModal, register, handleSubmit, onSubmit }) => {

    const defaultId = uuidv4();

    return (
      <>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white w-5/6 lg:w-1/3 h-fit px-8 py-4 rounded-xl">
              <h2 className="text-2xl font-bold text-center border-b-2 border-black p-2 mb-6">Add More Items</h2>
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
              <input
                type="hidden"
                name="Id"
                value={defaultId}
                {...register("Id")}
              />
                <div>
                  <h1 className="font-semibold text-lg mb-1">Item Name</h1>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Enter item name here"
                    className="input input-bordered w-full mx-auto rounded-lg focus:outline-none"
                    {...register("Name", { required: true, maxLength: 120 })}
                  />
                </div>
  
                <div>
                  <h1 className="font-semibold text-lg mb-1">Item Price</h1>
                  <input
                    type="number"
                    name="Price"
                    placeholder="Enter item price here"
                    className="input input-bordered w-full mx-auto rounded-lg focus:outline-none"
                    {...register("Price", { required: true, setValueAs: (value) => parseFloat(value) })}
                  />
                </div>
  
                <div>
                  <h1 className="font-semibold text-lg mb-1">Item Image Url</h1>
                  <input
                    type="text"
                    name="ImageUrl"
                    placeholder="Enter item image url here"
                    className="input input-bordered w-full mx-auto rounded-lg focus:outline-none"
                    {...register("ImageUrl", { required: true })}
                  />
                </div>
  
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <h1 className="font-semibold text-lg mb-1">Is Popular</h1>
                      <input
                        type="checkbox"
                        name="IsPopular"
                        className="toggle toggle-sm toggle-info"
                        {...register("IsPopular")}
                      />
                  </div>
  
                  <div className="flex items-center gap-4">
                    <h1 className="font-semibold text-lg mb-1">Is Recommended</h1>
                      <input
                        type="checkbox"
                        name="IsRecommended"
                        className="toggle toggle-sm toggle-info"
                        {...register("IsRecommended")}
                      />
                  </div>
                </div>
  
                <div className="flex items-center justify-between gap-4 lg:gap-8 mt-6">
                  <button className="w-full lg:w-1/2 mx-auto rounded-xl p-2 shadow-md font-bold uppercase hover:bg-orange-600 hover:text-white shadow-orange-300">
                    Add
                  </button>
                  <button
                    onClick={closeModal}
                    className="w-full lg:w-1/2 mx-auto rounded-xl p-2 shadow-md font-bold uppercase hover:bg-orange-600 hover:text-white shadow-orange-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default AddItemModal;
  
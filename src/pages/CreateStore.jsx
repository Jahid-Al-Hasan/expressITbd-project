import CreateStoreFields from "../components/CreateStoreFields";

import Button from "../components/Button";

function CreateStore() {
  const handleSubmit = () => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  container
     shadow-sm p-6 bg-white rounded-lg  lg:max-w-[60%] w-full lg:mx-auto"
    >
      <h3 className="text-xl font-extrabold">Create a store</h3>
      <p className="mt-8 mb-2 opacity-70">
        Add your basic store information and complete the setup
      </p>
      <hr className="opacity-10 bg-black h-0.5 border-0 my-4" />

      <div>
        <CreateStoreFields />
      </div>
      <div className="self-end">
        <Button btnType="submit" />
      </div>
    </form>
  );
}

export default CreateStore;

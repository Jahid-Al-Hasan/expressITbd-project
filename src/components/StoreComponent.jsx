function StoreComponent({
  Icon,
  heading,
  paragraph,
  inputType,
  inputName,
  placeholder,
  inputTag,
  option_1,
  option_2,
  option_3,
}) {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 items-center my-8">
      <div className="flex gap-4 ">
        <div className="h-6 w-6 mt-1.5 ">
          <Icon />
        </div>
        <div>
          <h4 className="text-sm font-bold mt-0 opacity-70">{heading}</h4>
          <p className="text-sm opacity-50">{paragraph}</p>
        </div>
      </div>
      <div className="ml-6 lg:ml-0">
        {inputTag ? (
          <input
            className="border-2 border-gray-300  rounded-lg h-12 w-full px-3 text-sm text-gray-500 "
            type={inputType}
            name={inputName}
            placeholder={placeholder}
          />
        ) : (
          <select
            className="border-2 border-gray-300  rounded-lg h-12 w-full px-3 text-sm  "
            name=""
          >
            <option>{option_1}</option>
            <option>{option_2}</option>
            <option>{option_3}</option>
          </select>
        )}
      </div>
    </div>
  );
}

export default StoreComponent;

import desktopIcon from "../assets/icons8-desktop-64.png";
import worldIcon from "../assets/icons8-world-26.png";
import locationIcon from "../assets/icons8-location-32.png";
import categoryIcon from "../assets/icons8-category-24.png";
import currencyIcon from "../assets/icons8-currency-32.png";
import emailIcon from "../assets/icons8-email-50.png";

function CreateStoreFields() {
  return (
    <div>
      {/* field-1 */}
      <label className=" grid grid-cols-1 lg:grid-cols-2 gap-2 items-center my-4">
        <div className="flex gap-4 ">
          <div className="h-6 w-6 mt-1.5 ">
            <img src={desktopIcon} alt="desktop icon" />
          </div>
          <div>
            <h4 className="text-sm font-bold mt-0 opacity-70">
              Give your online store a name
            </h4>
            <p className="text-sm opacity-50">
              A great store name is a big part of your success. Make sure it
              aligns with your brand and products.
            </p>
          </div>
        </div>
        <div className="ml-6 lg:ml-0">
          <input
            className="border-2 border-gray-300  rounded-lg h-10 w-full px-3 text-sm text-gray-500 "
            type="text"
            name="name"
            placeholder="How'd you like to call your store?"
          />
        </div>
      </label>

      {/* field-2 */}
      <label className=" grid grid-cols-1 lg:grid-cols-2 gap-2 items-center my-4">
        <div className="flex gap-4 ">
          <div className="h-6 w-6 mt-1.5 ">
            <img src={worldIcon} alt="desktop icon" />
          </div>
          <div>
            <h4 className="text-sm font-bold mt-0 opacity-70">
              Your online store subdomain
            </h4>
            <p className="text-sm opacity-50">
              A SEO-friendly store name is a crucial part of your success. Make
              sure it aligns with your brand and products.
            </p>
          </div>
        </div>
        <div className="ml-6 lg:ml-0">
          <input
            className="border-2 border-gray-300  rounded-lg h-10 w-full px-3 text-sm text-gray-500 "
            type="text"
            name="name"
            placeholder="enter your domain name"
          />
          {/* <select
          className="border-2 border-gray-300  rounded-lg h-12 w-full px-3 text-sm  "
          name=""
        >
          <option>{option_1}</option>
          <option>{option_2}</option>
          <option>{option_3}</option>
        </select> */}
        </div>
      </label>

      {/* field-3 */}
      <label className=" grid grid-cols-1 lg:grid-cols-2 gap-2 items-center my-4">
        <div className="flex gap-4 ">
          <div className="h-6 w-6 mt-1.5 ">
            <img src={locationIcon} alt="desktop icon" />
          </div>
          <div>
            <h4 className="text-sm font-bold mt-0 opacity-70">
              Where's your store located?
            </h4>
            <p className="text-sm opacity-50">
              Set your store's default location so we can optimize store access
              and speed for your customers.
            </p>
          </div>
        </div>
        <div className="ml-6 lg:ml-0">
          <select
            className="border-2 border-gray-300  rounded-lg h-10 w-full px-3 text-sm  "
            name=""
          >
            <option>Bangladesh</option>
            <option>Bangladesh</option>
            <option>Bangladesh</option>
          </select>
        </div>
      </label>

      {/* field-4 */}
      <label className=" grid grid-cols-1 lg:grid-cols-2 gap-2 items-center my-4">
        <div className="flex gap-4 ">
          <div className="h-6 w-6 mt-1.5 ">
            <img src={categoryIcon} alt="desktop icon" />
          </div>
          <div>
            <h4 className="text-sm font-bold mt-0 opacity-70">
              What's your Category?
            </h4>
            <p className="text-sm opacity-50">
              Set your store's default category so that we can optimize store
              access and speed for your customers.
            </p>
          </div>
        </div>
        <div className="ml-6 lg:ml-0">
          <select
            className="border-2 border-gray-300  rounded-lg h-10 w-full px-3 text-sm  "
            name=""
          >
            <option>Fashion</option>
            <option>Fashion</option>
            <option>Fashion</option>
          </select>
        </div>
      </label>

      {/* field-5 */}
      <label className=" grid grid-cols-1 lg:grid-cols-2 gap-2 items-center my-4">
        <div className="flex gap-4 ">
          <div className="h-6 w-6 mt-1.5 ">
            <img src={currencyIcon} alt="desktop icon" />
          </div>
          <div>
            <h4 className="text-sm font-bold mt-0 opacity-70">
              Choose store currency
            </h4>
            <p className="text-sm opacity-50">
              This is the main currency you wish to sell in.
            </p>
          </div>
        </div>
        <div className="ml-6 lg:ml-0">
          <select
            className="border-2 border-gray-300  rounded-lg h-10 w-full px-3 text-sm  "
            name=""
          >
            <option>BDT (Taka)</option>
            <option>BDT (Taka)</option>
            <option>BDT (Taka)</option>
          </select>
        </div>
      </label>

      {/* field-6 */}
      <label className=" grid grid-cols-1 lg:grid-cols-2 gap-2 items-center mt-6">
        <div className="flex gap-4 ">
          <div className="h-6 w-6 mt-1.5 ">
            <img src={emailIcon} alt="email icon" />
          </div>
          <div>
            <h4 className="text-sm font-bold mt-0 opacity-70">
              Store contact email
            </h4>
            <p className="text-sm opacity-50">
              This is the email you'll use to send notifications to and receive
              orders from customers.
            </p>
          </div>
        </div>
        <div className="ml-6 lg:ml-0 mb-4">
          <input
            className="border-2 border-gray-300  rounded-lg h-10 w-full px-3 text-sm text-gray-500 "
            type="email"
            name="email"
            placeholder="you@example.com"
          />
        </div>
      </label>
    </div>
  );
}

export default CreateStoreFields;

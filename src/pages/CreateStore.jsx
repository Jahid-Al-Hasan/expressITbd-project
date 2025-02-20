import Button from "../components/Button";
import desktopIcon from "../assets/icons8-desktop-64.png";
import worldIcon from "../assets/icons8-world-26.png";
import locationIcon from "../assets/icons8-location-32.png";
import categoryIcon from "../assets/icons8-category-24.png";
import currencyIcon from "../assets/icons8-currency-32.png";
import emailIcon from "../assets/icons8-email-50.png";
import { useState } from "react";
import axios from "axios";

function CreateStore() {
  const [storeName, setStoreName] = useState("");
  const isValidStoreName = storeName.trim().length >= 3;

  const [domainName, setDomainName] = useState("");
  const [domainValidity, setDomainValidity] = useState(true);
  const suffix = ".expressitbd.com";

  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [currency, setCurrency] = useState("");

  const [email, setEmail] = useState("");
  const [emailValidity, setEmailValidity] = useState(true);

  // storeName Handler
  const handleStoreName = (event) => {
    setStoreName(event.target.value);
  };

  // DomainName Handler
  const handleDomainName = async (event) => {
    const newDomainName = event.target.value;
    setDomainName(newDomainName);

    try {
      const response = await fetch(
        `https://interview-task-green.vercel.app/task/domains/check/${newDomainName}${suffix}`
      );
      if (!response.ok) {
        console.log("response error:", response.status);
      } else {
        const data = await response.json();
        const istaken = data.data.taken;
        setDomainValidity(!istaken);
      }
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  // Location Handler
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  // Category Handler
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  // Currency Handler
  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };

  // Email Handler
  const handleEmail = (event) => {
    setEmail(event.target.value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailValidity(emailRegex.test(event.target.value));
  };

  // Form Submit Handler
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form Data
    const formData = {
      storeName,
      domainName: `${domainName.trim()}${suffix}`,
      location,
      category,
      currency,
      email,
    };
    // console.log(formData);
    // console.log(isFormValid);

    try {
      await axios
        .post(
          "https://interview-task-green.vercel.app/task/stores/create",
          formData
        )
        .then((response) => console.log("Response Data:", response.data))
        .catch((error) => console.log("error form post:", error.message));
    } catch (error) {
      console.log("Error creating store:", error.message);
    }
  };

  // Form Validity Check
  const isFormValid =
    isValidStoreName &&
    domainName.trim().length > 0 &&
    domainValidity &&
    emailValidity &&
    email.trim().length > 0 &&
    location.length > 0 &&
    category.length > 0 &&
    currency.length > 0;

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
              onChange={handleStoreName}
              className={`
                    border-2 rounded-lg h-10 w-full px-3 text-sm transition-all duration-300
                    ${
                      storeName.length === 0
                        ? "border-gray-300"
                        : isValidStoreName
                        ? "border-green-500"
                        : "border-red-500"
                    }`}
              type="text"
              name="name"
              value={storeName}
              placeholder="How'd you like to call your store?"
            />
            {!isValidStoreName && storeName.length > 0 && (
              <p className="text-xs text-red-500 mt-2">
                Store name must be at least 3 characters long
              </p>
            )}
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
                A SEO-friendly store name is a crucial part of your success.
                Make sure it aligns with your brand and products.
              </p>
            </div>
          </div>
          <div className="ml-6 lg:ml-0 relative">
            <input
              onChange={handleDomainName}
              className={`
                    border-2 rounded-lg h-10 w-full px-3 text-sm transition-all duration-300
                    ${
                      domainName.length === 0
                        ? "border-gray-300"
                        : domainValidity
                        ? "border-green-500"
                        : "border-red-500"
                    }`}
              type="text"
              name="name"
              value={domainName}
              placeholder="enter your domain name"
            />
            <span className="absolute right-3 top-2 text-gray-500">
              {suffix}
            </span>
            {!domainValidity && domainName.length > 0 && (
              <p className="text-xs text-red-500 mt-2">
                Not Available Domain, Re-enter!
              </p>
            )}
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
                Set your store's default location so we can optimize store
                access and speed for your customers.
              </p>
            </div>
          </div>
          <div className="ml-6 lg:ml-0">
            <select
              onChange={handleLocation}
              className="border-2 border-gray-300  rounded-lg h-10 w-full px-3 text-sm  "
              name=""
            >
              <option value={"Bangladesh"}>Bangladesh</option>
              <option value={"Bangladesh"}>Bangladesh</option>
              <option value={"Bangladesh"}>Bangladesh</option>
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
              onChange={handleCategory}
              className="border-2 border-gray-300  rounded-lg h-10 w-full px-3 text-sm  "
              name=""
            >
              <option value={"Fashion"}>Fashion</option>
              <option value={"Fashion"}>Fashion</option>
              <option value={"Fashion"}>Fashion</option>
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
              onChange={handleCurrency}
              className="border-2 border-gray-300  rounded-lg h-10 w-full px-3 text-sm  "
              name=""
            >
              <option value={"BDT (Taka)"}>BDT (Taka)</option>
              <option value={"BDT (Taka)"}>BDT (Taka)</option>
              <option value={"BDT (Taka)"}>BDT (Taka)</option>
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
                This is the email you'll use to send notifications to and
                receive orders from customers.
              </p>
            </div>
          </div>
          <div className="ml-6 lg:ml-0 mb-4">
            <input
              onChange={handleEmail}
              className={`
                    border-2 rounded-lg h-10 w-full px-3 text-sm transition-all duration-300
                    ${
                      email.length === 0
                        ? "border-gray-300"
                        : emailValidity
                        ? "border-green-500"
                        : "border-red-500"
                    }
                  `}
              type="email"
              name="email"
              value={email}
              placeholder="you@example.com"
            />
            {!emailValidity && email.length > 0 && (
              <p className="text-xs text-red-500 mt-2">Invalid email format!</p>
            )}
          </div>
        </label>
      </div>
      <div className="self-end">
        <Button btnType="submit" btnDisable={!isFormValid} />
      </div>
    </form>
  );
}

export default CreateStore;

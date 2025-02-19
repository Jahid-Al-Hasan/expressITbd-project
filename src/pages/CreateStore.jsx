import StoreComponent from "../components/StoreComponent";
import desktopIcon from "../assets/icons8-desktop-64.png";
import worldIcon from "../assets/icons8-world-26.png";
import locationIcon from "../assets/icons8-location-32.png";
import categoryIcon from "../assets/icons8-category-24.png";
import currencyIcon from "../assets/icons8-currency-32.png";
import emailIcon from "../assets/icons8-email-50.png";

function CreateStore() {
  const storeComponent_1 = {
    Icon: () => <img src={desktopIcon} alt="desktop icon" />,
    heading: "Give your online store a name",
    paragraph:
      "A great store name is a big part of your success. Make sure it aligns with your brand and products.",
    inputType: "text",
    inputName: "name",
    placeholder: "How'd you like to call your store?",
    inputTag: true,
  };
  const storeComponent_2 = {
    Icon: () => <img src={worldIcon} alt="desktop icon" />,
    heading: "Your online store subdomain",
    paragraph:
      "A SEO-friendly store name is a crucial part of your success. Make sure it aligns with your brand and products.",
    inputType: "text",
    inputName: "name",
    placeholder: "enter your domain name",
    inputTag: true,
  };
  const storeComponent_3 = {
    Icon: () => <img src={locationIcon} alt="desktop icon" />,
    heading: "Where's your store located?",
    paragraph:
      "Set your store's default location so we can optimize store access and speed for your customers.",
    inputType: "select",
    inputName: "name",
    placeholder: "name",
    inputTag: false,
    option_1: "Bangladesh",
    option_2: "Bangladesh",
    option_3: "Bangladesh",
  };
  const storeComponent_4 = {
    Icon: () => <img src={categoryIcon} alt="desktop icon" />,
    heading: "What's your Category?",
    paragraph:
      "Set your store's default category so that we can optimize store access and speed for your customers.",
    inputType: "text",
    inputName: "name",
    placeholder: "name",
    inputTag: false,
    option_1: "Fashion",
    option_2: "Fashion",
    option_3: "Fashion",
  };
  const storeComponent_5 = {
    Icon: () => <img src={currencyIcon} alt="desktop icon" />,
    heading: "Choose store currency",
    paragraph: "This is the main currency you wish to sell in.",
    inputType: "text",
    inputName: "name",
    placeholder: "name",
    inputTag: false,
    option_1: "BDT (Taka)",
    option_2: "BDT (Taka)",
    option_3: "BDT (Taka)",
  };
  const storeComponent_6 = {
    Icon: () => <img src={emailIcon} alt="desktop icon" />,
    heading: "Store contact email",
    paragraph:
      "This is the email you'll use to send notifications to and receive orders from customers.",
    inputType: "email",
    inputName: "email",
    placeholder: "you@example.com",
    inputTag: true,
  };

  return (
    <div
      className="container
    m-2 shadow-sm p-6 bg-white rounded-lg"
    >
      <h3 className="text-xl font-extrabold">Create a store</h3>
      <p className="mt-8 mb-2 opacity-70">
        Add your basic store information and complete the setup
      </p>
      <hr className="opacity-10 bg-black h-0.5 border-0 my-4" />

      <div>
        <StoreComponent {...storeComponent_1} />
        <StoreComponent {...storeComponent_2} />
        <StoreComponent {...storeComponent_3} />
        <StoreComponent {...storeComponent_4} />
        <StoreComponent {...storeComponent_5} />
        <StoreComponent {...storeComponent_6} />
      </div>
    </div>
  );
}

export default CreateStore;

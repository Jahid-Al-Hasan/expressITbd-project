function Button({ btnType, btnDisable }) {
  return (
    <button
      type={btnType}
      className={`
      ${btnDisable ? "bg-[#c1c2f9]" : "bg-[#6467f8]"}
      "btn text-sm font-bold px-5 py-2 rounded-md border-0  text-white"
      `}
      disabled={btnDisable}
    >
      Create store
    </button>
  );
}

export default Button;

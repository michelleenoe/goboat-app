const DefaultButton = ({ onClick, text }) => {
  return (
    <button
      className="bg-goboatYellow hover:bg-yellow-500 px-7 py-3 w-40 rounded-full mb-6"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default DefaultButton;

const TechSolutions = ({ solution, errordata }) => {
  return (
    <div
      className=" px-4 flex flex-col justify-center items-center
"
    >
      <div className="p-6 bg-grey1 rounded-3xl shadow-md w-400px">
        {solution && (
          <div className="text-center">
            <p className="text-typoPrimary font-semibold mb-6">{solution}</p>
          </div>
        )}
        <div className="flex justify-center items-center">
          <button
            className="px-6 py-3 bg-goboatBlue hover:bg-lightBlue text-grey2 hover:text-darkBlue rounded-full "
            onClick={() => console.log("Contact Support")}
          >
            {errordata.labels.contactSupport}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechSolutions;

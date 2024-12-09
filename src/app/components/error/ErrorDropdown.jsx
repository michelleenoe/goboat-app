export default function ErrorDropdown({ data, language, onSelect }) {
  const handleSelectChange = (e) => {
    const selectedError = data.find((item) => item.e_codes === e.target.value);
    onSelect(selectedError);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="error-select" className="text-xl font-bold mb-4">
        Find Your Error Code
      </label>
      <select
        id="error-select"
        tabIndex={0}
        className="p-4 border rounded-full hover:bg-grey2  focus:outline-none focus-visible:ring-2 focus-visible:ring-focusOrange"
        onChange={handleSelectChange}
      >
        {data.map((item) => (
          <option key={item.id} value={item.e_codes}>
            {item.e_codes} -{" "}
            {language === "da" ? item.da_title : item.eng_title}
          </option>
        ))}
      </select>
    </div>
  );
}

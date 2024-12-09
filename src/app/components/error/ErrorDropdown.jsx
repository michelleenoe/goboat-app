export default function ErrorDropdown({ data, language, onSelect }) {
  const handleSelectChange = (e) => {
    const selectedError = data.find((item) => item.e_codes === e.target.value);
    onSelect(selectedError);
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor="error-select"
        className="mb-2 text-sm font-medium text-gray-700"
      >
        Find fejlkode:
      </label>
      <select
        id="error-select"
        className="p-2 border rounded-md focus:ring focus:ring-blue-300"
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

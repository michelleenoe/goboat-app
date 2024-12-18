export function RadioButton({ name, value, label, checked, onChange }) {
  return (
    <label className="cursor-pointer flex flex-col items-center">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="peer absolute opacity-0"
      />

      <div className="w-11 h-11 rounded-full bg-settingsBg peer-checked:bg-goboatYellow border border-typoSecondary transition flex items-center justify-center peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-focusOrange peer-focus-visible:outline-offset-2">
        {checked && (
          <div className="w-5 h-5 rounded-full bg-typoSecondary"></div>
        )}
      </div>

      <span className="text-sm mt-1 text-typoPrimary">{label}</span>
    </label>
  );
}

export default function RadioInput({
  value,
  id,
  onChange,
}: {
  value: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="flex items-center gap-x-3">
      <input
        type="radio"
        value={value}
        id={id}
        name="colour"
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {value}
      </label>
    </div>
  );
}

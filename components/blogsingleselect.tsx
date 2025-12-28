type Option = {
  label: string;
  value: string;
};

type BlogSingleSelectProps = {
  label: string;
  name: string;
  options: Option[];
  defaultValue?: string;
  required?: boolean;
};

export function BlogSingleSelect({
  label,
  name,
  options,
  defaultValue,
  required,
}: BlogSingleSelectProps) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-bold uppercase tracking-wider text-slate-500">
        {label}
      </label>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-300 transition"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              defaultChecked={option.value === defaultValue}
              required={required}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-slate-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

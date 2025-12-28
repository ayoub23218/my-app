type Option = {
  label: string;
  value: string;
};

type BlogMultiSelectProps = {
  label: string;
  name: string;
  options: Option[];
  defaultValues?: string[];
};

export function BlogMultiSelect({
  label,
  name,
  options,
  defaultValues = [],
}: BlogMultiSelectProps) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-bold uppercase tracking-wider text-slate-500">
        {label} (Choix multiples)
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-300 transition"
          >
            <input
              type="checkbox"
              name={name}
              value={option.value}
              defaultChecked={defaultValues.includes(option.value)}
              className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-slate-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

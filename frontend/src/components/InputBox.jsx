export function InputBox({label,placeholder,onChange}) {
    return <div>
        <div className="text-sm text-left font-medium py-0.5">
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" />
    </div>
}
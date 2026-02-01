"use client"

function InputField({ label, type, value, onChange }) {
    return (
        <div className="mb-4">
            <label className="block text-white">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
            />
        </div>
    );
}

export default InputField;

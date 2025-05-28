export default function FormField({
  label,
  id,
  type = "text",
  value,
  onChange,
  required = false,
  className = "",
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={className}
      ></input>
    </>
  );
}


export function FormFild({title, identifier, handleChange, isRequired = false}) {
    return(
    <div>
        <label htmlFor={identifier}>{title}</label>
        <input onChange={(e) => handleChange(e.target.value)}  id={identifier} required={isRequired} />
    </div>
    )
}
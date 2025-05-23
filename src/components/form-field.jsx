export function FormFild({title, identifier, isRequired = false}) {
    return(
    <div>
        <label htmlFor={identifier}>{title}</label>
        <input id={identifier} required={isRequired} />
    </div>
    )
}
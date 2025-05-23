import { FormFild } from "../../components/form-field";
import { useState } from "react"

export default function ContactInformation() {
    const [formData, setFormData] = useState({})
    console.log(formData)
    function updateEmail(value) {
        setFormData({
            "email": value,
            ...formData
        });
    }

    function updateName(value) {
        setFormData({
            "name": value,
            ...formData
        });
    }

    function updateMessage(value) {
        setFormData({
            "message": value,
            ...formData
        });
    }

    return (
        <form className="flex-column">
            <FormFild handleChange={(newValue) => updateName(newValue)} identifier="name" title="Name" isRequired />
            <FormFild handleChange={(newValue) => updateEmail(newValue)} identifier="email" title="Email" isRequired />
            <FormFild handleChange={(newValue) => updateMessage(newValue)} identifier="message" title="Message" isRequired />
            
            {formData["email"]}

            <button type="submit">Send Message</button>
        </form>
    )
}
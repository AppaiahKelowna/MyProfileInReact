import {FormFild} from "../../components/form-field";

export default function ContactInformation() {
    return (
        <form className="flex-column">
            <FormFild identifier="name" title="Name" isRequired/> 
            <FormFild identifier="email" title="Email" isRequired/> 
            <FormFild identifier="message" title="Message" isRequired/> 
            <button type="submit">Send Message</button>
        </form>
    )
}
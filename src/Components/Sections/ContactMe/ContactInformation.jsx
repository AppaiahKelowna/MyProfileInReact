export default function ContactInformation() {
    return (
        <form className="flex-column">
                   <label for="name">Name</label>
                   <input id="name" required/>
                   <label for="email">Email</label>
                   <input id="email" type="email" required/>
                   <label for="message">Message</label>
                   <input id="message"className="input-message" required/>
                   <button type="submit">Send Message</button>
                   <button >Other Button</button>
        </form>
    )
}
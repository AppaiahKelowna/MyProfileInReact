import { use } from "react";
import { useState } from "react";
import FormField from "./FormField";

export default function ContactInformation() {
  const [name, setName] = useState("first name");
  const [email, setEmail] = useState("email");
  const [message, setMessage] = useState("type the message here..");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { name, email, message };

    // form validation
    if (!name || !email || !message) {
      alert("please fill in all the field");
      return;
    }

    fetch("http://localhost:5173/?", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response);
        } else {
          console.log("New blog added");
        }
      })
      .catch((e) => {
        console.error("Failed to Add Blog", e);
      });
  };

  return (
    <form className="flex-column" onSubmit={handleSubmit}>
      <FormField
        label="Name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <FormField
        label="Email"
        id="email"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FormField
        label="Message"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">Send Message</button>
      <button>Other Button</button>
    </form>
  );
}

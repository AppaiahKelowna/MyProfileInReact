import { use } from "react";
import { useState } from "react";

export default function ContactInformation() {
  const [name, setName] = useState("first name");
  const [email, setEmail] = useState("email");
  const [message, setMessage] = useState("type the message here..");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { name, email, message };
    console.log(blog);

    fetch("http://localhost:5173/?", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog added");
    });
  };

  return (
    <form className="flex-column" onSubmit={handleSubmit}>
      <label for="name">Name</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label for="message">Message</label>
      <input
        id="message"
        className="input-message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">Send Message</button>
      <button>Other Button</button>
    </form>
  );
}

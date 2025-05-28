import SocialMedia from "./SocialMedia";

export default function ConnectMe() {
  const mediaClassList = [
    "fab fa-github",
    "fab fa-linkedin",
    "fab fa-twitter",
    "fab fa-instagram",
    "fab fa-youtube",
  ];
  return (
    <section className="connect-with-me-container flex-column">
      <h2>Connect With Me</h2>
      <hr />
      <div>
        <SocialMedia list={mediaClassList} />
      </div>
    </section>
  );
}

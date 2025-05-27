export default function ProfileContainer({ side, children }) {
  return (
    <section className={`profile-container ${side} flex-column`}>
      {children}
    </section>
  );
}

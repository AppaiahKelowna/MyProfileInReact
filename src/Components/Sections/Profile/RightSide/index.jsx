import ProfileContainer from "../ProfileContainer";
export default function RightSide() {
  return (
    <ProfileContainer side="right">
      <h2>My Links</h2>
      <hr />
      <div className="inputSection flex-column">
        <input placeholder="enter details"></input>
        <button id="btn_add_link">Add link</button>
      </div>
    </ProfileContainer>
  );
}

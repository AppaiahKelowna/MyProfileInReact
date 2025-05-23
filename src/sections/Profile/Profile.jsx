import {ProfileContainer} from "../../components/profile-container"

export default function Profile() {
  return (
    <div className="profile">
      <ProfileContainer style={{ alignItems: "center"}}>
        <img src="https://avatars.githubusercontent.com/u/126493771?v=4&size=150" alt="Profile Image" />
        <h1>John Doe</h1>
        <p>Web developer and designer passionate about creating beautiful and accessible websites. Currently studying at Northeastern University.</p>
      </ProfileContainer>

      <ProfileContainer isRight>
        <h2>My Links</h2>
        <hr />
        <div className="inputSection">
          <input placeholder="enter details"></input>
          <button id="btn_add_link">Add link</button>
        </div>
      </ProfileContainer>
    </div>
  )
}
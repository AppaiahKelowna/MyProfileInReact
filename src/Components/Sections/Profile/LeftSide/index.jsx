import ProfileContainer from "../ProfileContainer";

export default function LeftProfile() {
  return (
    <ProfileContainer side="left">
      <img
        src="https://avatars.githubusercontent.com/u/126493771?v=4&size=150"
        alt="Profile Image"
      />
      <h1>John Doe</h1>
      <p>
        Web developer and designer passionate about creating beautiful and
        accessible websites. Currently studying at Northeastern University.
      </p>
    </ProfileContainer>
  );
}

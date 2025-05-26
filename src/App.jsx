import Profile from "./Components/Sections/Profile/Profile";
import ConnectMe from "./Components/Sections/ConnnectMe";
import ContactMe from "./Components/Sections/ContactMe";
import LeftProfile from "./Components/Sections/Profile/LeftSide";
import RightSide from "./Components/Sections/Profile/RightSide";

export default function App() {
  return (
    <>
      <Profile>
        <LeftProfile/>
        <RightSide/>
      </Profile>
      <ConnectMe/>
      <ContactMe/>
    </>
    
  )
}
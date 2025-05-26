import LeftProfile from "./LeftSide";
import RightSide from "./RightSide";

export default function Profile(props) {
  return (
    <div className="profile">
        {props.children}
    </div>
  )
}
import "./UserProfileBody.css"
import dummyIcon from "../../../assets/logos/rabbit-icon.png"


function UserProfileBody() {
  return (
    <div className="user-profile-body">
      <div className="profile-body-up">
        <div className="profile-left">
          <img src={dummyIcon} alt="user-icon" className="user-icon" />
          <p>Edit profile picture</p>
        </div>
        <div className="profile-right">
          <div className="profile-info">
            <h2>Christopher Jiménez</h2>
            <p>Email: christ.test@gmail.com</p>
            <p>Phone number: +34618129617</p>
          </div>
        </div>
      </div>
      <div className="profile-links">
          <a href="#" id="link1">Settings</a>
          <a href="#" id="link2">Payment method</a>
          <a href="#" id="link3">Data protection</a>
        </div>
    </div>
  );
}

export default UserProfileBody
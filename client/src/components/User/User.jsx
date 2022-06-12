// import {
//     LocationSearching,
//     MailOutline,
//     PermIdentity,
//     PhoneAndroid,
//   } from "@material-ui/icons";
import "./user.css";
import Sidebar from "../SideBar/Sidebar.jsx";

export default function User() {
  return (
    <div className="beauty-container">
      <div className="wrapper">
        <Sidebar></Sidebar>
      </div>
      <div className="userTitleContainer"></div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop"></div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              {/* <PermIdentity className="userShowIcon" /> */}
              <span className="userShowInfoTitle">UserName</span>
            </div>
            <div className="userShowInfo"></div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              {/* <PhoneAndroid className="userShowIcon" /> */}
              <span className="userShowInfoTitle">22222222</span>
            </div>
            <div className="userShowInfo">
              {/* <MailOutline className="userShowIcon" /> */}
              <span className="userShowInfoTitle">mehdiEnnebli@gmail.com</span>
            </div>
            <div className="userShowInfo">
              {/* <LocationSearching className="userShowIcon" /> */}
              <span className="userShowInfoTitle">Tunis | hammem lif</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="userUpdateInput"
                />
                <br></br>
                <br></br>
                <button className="btn" style={{marginLeft:"40px"}}>Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

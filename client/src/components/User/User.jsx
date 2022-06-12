import "./user.css";
import React, { useEffect, useState } from "react";
import { getUser, updateUser } from "../../api/index.js";
export default function User({ conectedUser }) {
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState({});
  const [up, setUp] = useState(false);
  useEffect(() => {
    getUser(conectedUser.id).then((res) => {
      setUser(res.data);
      setEdit({
        userName: res.data.userName,
        phoneNumber: res.data.phoneNumber,
        adress: res.data.adress,
      });
    });
  }, [up]);
  const handleSubmit = () => {
    updateUser(user._id, edit).then((res) => {
      setUp(!up);
    });
  };
  return (
    <div className="user">
      {console.log(edit)}
      <div className="userTitleContainer">
        <h1 className="userUpdateTitle">Edit User</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop"></div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{user.userName}</span>
            </div>
            <div className="userShowInfo"></div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{user.phoneNumber}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{user.adress}</span>
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
                  value={edit.userName}
                  onChange={(e) =>
                    setEdit({ ...edit, userName: e.target.value })
                  }
                  type="text"
                  placeholder="Username"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  value={edit.phoneNumber}
                  onChange={(e) =>
                    setEdit({ ...edit, phoneNumber: e.target.value })
                  }
                  type="text"
                  placeholder="Phone Number"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  value={edit.adress}
                  onChange={(e) => setEdit({ ...edit, adress: e.target.value })}
                  type="text"
                  placeholder="Address"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload"></div>
              <button
                onClick={() => {
                  handleSubmit();
                }}
                className="userUpdateButton"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

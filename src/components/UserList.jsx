import React, { useEffect, useState } from "react";
import profile from "../assets/profile.png";
import Button from "@mui/material/Button";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";
const UserList = () => {
  const db = getDatabase();
  const auth = getAuth();

  let userData = useSelector((state) => state.loggedUser.loginUser);

  let [userList, setUserList] = useState([]);
  let [friendRequest, setFriendRequest] = useState([]);
  let [friends, setFriends] = useState([]);
  let [block, setBlock] = useState([]);

  useEffect(() => {
    const usersRef = ref(db, "friendrequest/");
    onValue(usersRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val().whoreceiveid + item.val().whosendid);
      });
      setFriendRequest(arr);
    });
  }, []);

  useEffect(() => {
    const usersRef = ref(db, "friends/");
    onValue(usersRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val().whoreceiveid + item.val().whosendid);
      });
      setFriends(arr);
    });
  }, []);

  useEffect(() => {
    const usersRef = ref(db, "block/");
    onValue(usersRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val().blockedid + item.val().blockbyid);
      });
      setBlock(arr);
    });
  }, []);

  useEffect(() => {
    const usersRef = ref(db, "users/");
    onValue(usersRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (userData.uid != item.key) {
          arr.push({ ...item.val(), id: item.key });
        }
      });

      setUserList(arr);
    });
  }, []);

  let handlefriendRequest = (item) => {
    set(ref(db, "friendrequest/" + item.id), {
      whosendid: auth.currentUser.uid,
      whosendname: auth.currentUser.displayName,
      whoreceiveid: item.id,
      whoreceivename: item.username,
    });
  };

  let handleCancel = (item) => {
    console.log(item.id);

    remove(ref(db, "friendrequest/" + item.id));
  };

  return (
    <div className="box">
      <h3>User List</h3>

      {userList.map((item) => (
        <>
        <div className="list">
          <div className="img">
            <img src={profile} />
          </div>
          <div className="details">
            <h4>{item.username}</h4>
            <p>{item.email}</p>
          </div>
          <div className="button">
            {friendRequest.includes(item.id + auth.currentUser.uid) ? (
              <Button
                onClick={() => handleCancel(item)}
                size="small"
                variant="contained"
              >
                cancel
              </Button>
            ) : friendRequest.includes(auth.currentUser.uid + item.id) ? (
              <Button size="small" variant="contained">
                Pending
              </Button>
            ) : friends.includes(auth.currentUser.uid + item.id) ||
              friends.includes(item.id + auth.currentUser.uid) ? (
              <Button size="small" variant="contained" color="success">
                Friends
              </Button>
            ) : block.includes(auth.currentUser.uid + item.id) ||
              block.includes(item.id + auth.currentUser.uid) ? (
              <Button size="small" variant="contained" color="error">
                Block
              </Button>
            ) : (
              <Button
                onClick={() => handlefriendRequest(item)}
                size="small"
                variant="contained"
              >
                +
              </Button>
            )}
          </div>
        </div>
        </>
      ))}
    </div>
  
  );
};

export default UserList;
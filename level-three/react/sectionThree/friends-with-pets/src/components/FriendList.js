import React from "react";
import Friend from './Friend';
import FriendsData from "../FriendsData";

export default function FriendList() {
    const friends = FriendsData.map(fdata => {
        return (
            <Friend 
            key={fdata.id}
            {...fdata}
            />
        )
    })
    return (
      <div className="friend-list-div">
        {friends}
      </div>
    );
  }
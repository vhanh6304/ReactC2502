import React from "react";

function UserInfo({ name, age }) {
  return (
    <div>
      <h2>Thông tin người dùng</h2>
      <p>Tên: {name}</p>
      <p>Tuổi: {age}</p>
    </div>
  );
}

export default UserInfo;

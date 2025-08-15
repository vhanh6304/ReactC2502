import React from "react";
import UserInfo from "./components/UserInfo";

export default function App() {
  const userName = "Nguyễn Văn A";
  const userAge = 20;

  return (
    <div>
      <h1>Bài 1 – Props</h1>
      <UserInfo name={userName} age={userAge} />
    </div>
  );
}

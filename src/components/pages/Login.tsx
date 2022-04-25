import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

import { useCurrentUser } from "../../hooks/useCurrentUser";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userState, setUserState } = useCurrentUser();

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const login = async (): Promise<void> => {
    let token = "";
    const response = await axios.post("http://localhost:3001/auth/login", {
      username: username,
      email: email,
      password: password,
    });
    token = response.data.access_token;
    const res = await axios.get("http://localhost:3001/users/" + username, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUserState({
      type: "SET_CURRENT_USER",
      payload: {
        currentUser: {
          username: res.data.username,
          avatar: res.data.avatar,
          remarks: res.data.remarks,
          beginnerStatus: res.data.beginnerStatus,
          htmlStatus: res.data.htmlStatus,
          tsStatus: res.data.tsStatus,
        },
      },
    });
  };

  const testBtn = () => {
    setUsername("Tom");
    setEmail("ex01@gmail.com");
    setPassword("password");
  };

  return (
    <>
      <div className="myPageArea">
        <h5>Login Page</h5>
        <p>User Name:</p>
        <input type="text" onChange={onChangeName} value={username} />
        <p>E-mail:</p>
        <input type="text" onChange={onChangeEmail} value={email} />
        <p>PassWord:</p>
        <input type="text" onChange={onChangePassword} value={password} />
        <button className="btn" onClick={login}>
          sign in
        </button>
        <br />
        <button className="btn pink" onClick={testBtn}>
          test
        </button>
      </div>
      <p>user:</p>
      <h3>{userState !== undefined ? userState.currentUser.username : ""}</h3>
    </>
  );
};

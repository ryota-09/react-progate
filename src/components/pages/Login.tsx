import axios from "axios";
import { ChangeEvent, useState } from "react";

import { useCurrentUser } from "../../hooks/useCurrentUser";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserState } = useCurrentUser();

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
    const response = await axios.post("http://localhost:3000/auth/login", {
      username: username,
      email: email,
      password: password,
    });
    token = response.data.access_token;
    const res = await axios.get("http://localhost:3000/users/" + username, {
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
        <div className="row">
          <div className="col s12 center">
            <h3>Sign In Page</h3>
          </div>
          <div className="col s2" />
          <div className="col s8">
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
          <div className="col s2" />
        </div>
      </div>
    </>
  );
};

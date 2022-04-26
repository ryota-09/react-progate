import axios from "axios";
import { ChangeEvent, FC, useState } from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";

export const RegisterUser: FC = () => {
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

  const registerUser = async () => {
    const response = await axios.post("http://localhost:3000/users", {
      username: username,
      email: email,
      password: password,
    });
    console.log(response.data);
    setUserState({
      type: "SET_CURRENT_USER",
      payload: {
        currentUser: {
          username: response.data.username,
          avatar: response.data.avatar,
          remarks: response.data.remarks,
          beginnerStatus: response.data.beginnerStatus,
          htmlStatus: response.data.htmlStatus,
          tsStatus: response.data.tsStatus,
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
        <div className="col s12 center">
          <h3>Sign Up Page</h3>
        </div>
        <div className="row">
          <div className="col s2" />
          <div className="col s8">
            <p>User Name:</p>
            <input type="text" onChange={onChangeName} value={username} />
            <p>E-mail:</p>
            <input type="text" onChange={onChangeEmail} value={email} />
            <p>PassWord:</p>
            <input type="text" onChange={onChangePassword} value={password} />
            <button className="btn" onClick={registerUser}>
              sign up
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

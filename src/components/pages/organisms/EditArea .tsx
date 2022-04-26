import axios from "axios";
import { ChangeEvent, FC, useState } from "react";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { User } from "../../../types/user";

type Props = {
  currentUser: User;
};

export const EditArea: FC<Props> = (props) => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [remarks, setRemarks] = useState("");

  const { currentUser } = props;
  const { setUserState } = useCurrentUser();

  const onChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    setAvatarUrl(event.target.value);
  };

  const onChangeRemarks = (event: ChangeEvent<HTMLInputElement>) => {
    setRemarks(event.target.value);
  };

  const updateProfile = async () => {
    const response = await axios.patch(
      "http://localhost:3000/users/" + currentUser.username,
      {
        avatar: avatarUrl,
        remarks: remarks,
      }
    );
    console.log(response.data);
    setUserState({
      type: "SET_CURRENT_USER",
      payload: {
        currentUser: {
          username: currentUser.username,
          avatar: response.data.avatar,
          remarks: response.data.remarks,
          beginnerStatus: currentUser.beginnerStatus,
          htmlStatus: currentUser.htmlStatus,
          tsStatus: currentUser.tsStatus,
        },
      },
    });
    setAvatarUrl("");
    setRemarks("");
  };

  return (
    <>
      <div className="edit-area">
        <div className="row">
          <div className="col s12 center">
            <h2>Edit Page</h2>
          </div>
          <div className="col s2" />
          <div className="col s8">
            <p>icon URL: </p>
            <input type="text" value={avatarUrl} onChange={onChangeAvatar} />
            <br />
            <p>ひとこと: </p>
            <input type="text" value={remarks} onChange={onChangeRemarks} />
          </div>
          <div className="col s2" />
          <div className="col s12 center">
            <button className="btn" onClick={updateProfile}>
              更新
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

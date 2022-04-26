import { useState } from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { EditArea } from "./organisms/EditArea ";

export const MyPage = () => {
  const [canShowEdit, setCanShowEdit] = useState(false);
  const { userState } = useCurrentUser();

  const showEditPage = () => {
    setCanShowEdit(!canShowEdit);
  };

  return (
    <>
      <div className="myPageArea">
        &nbsp;
        <button className="btn" onClick={showEditPage}>
          {canShowEdit ? "編集画面を閉じる" : " プロフィールを編集する"}
        </button>
        {canShowEdit ? (
          <EditArea currentUser={userState.currentUser} />
        ) : (
          <div className="row">
            <div className="col s12 center">
              <h2>My Page</h2>
            </div>
            <div className="col s3 offset-s1 center">
              <img
                className="responsive-img img"
                src={userState.currentUser.avatar}
                alt=""
              />
            </div>
            <div className="col s8">
              <p>username: </p>
              <h3>{userState.currentUser.username}</h3>
              <br />
              <p>ひとこと: </p>
              <p>{userState.currentUser.remarks}</p>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col s12 center">
            <h3>Your Score</h3>
          </div>
          <div className="col s4 center">
            <h4>Beginner</h4>
            { userState.currentUser.beginnerStatus ?  <img
              className="responsive-img img"
              src="/img/beginner.jpg"
              alt=""
            />  : <img
            className="responsive-img img"
            src="/img/yet.jpg"
            alt=""
          />  }
          </div>
          <div className="col s4 center">
            <h4>HTML</h4>
            { userState.currentUser.htmlStatus ?  <img
              className="responsive-img img"
              src="/img/html.jpg"
              alt=""
            />  : <img
            className="responsive-img img"
            src="/img/yet.jpg"
            alt=""
          />  }
          </div>
          <div className="col s4 center">
            <h4>TypeScript</h4>
            { userState.currentUser.tsStatus ?  <img
              className="responsive-img img"
              src="/img/ts.jpg"
              alt=""
            />  : <img
            className="responsive-img img"
            src="/img/yet.jpg"
            alt=""
          />  }
          </div>
        </div>
      </div>
    </>
  );
};

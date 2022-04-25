import { useCurrentUser } from "../../hooks/useCurrentUser";

export const MyPage = () => {
  const { userState, setUserState } = useCurrentUser();

  return (
    <>
      <div className="myPageArea">
        <div className="row">
          <div className="col s12 center">
            <h2>My Page</h2>
          </div>
          <div className="col s3 offset-s1 center">
            <img
              className="responsive-img img"
              src="https://joeschmoe.io/api/v1/random"
              alt=""
            />
          </div>
          <div className="col s8">
            <p>username: </p>
            <p>ここにユーザーネーム</p>
            <br />
            <p>ひとこと: </p>
            <p>ここにテキスト</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 center">
            <h3>Your Score</h3>
          </div>
          <div className="col s4 center">
            <h4>Biggener</h4>
            <img
              className="responsive-img img"
              src="/img/beginner.jpg"
              alt=""
            />
          </div>
          <div className="col s4 center">
            <h4>HTML</h4>
            <img className="responsive-img img" src="/img/html.jpg" alt="" />
          </div>
          <div className="col s4 center">
            <h4>TypeScript</h4>
            <img className="responsive-img img" src="/img/ts.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

import { useHistory } from "react-router"

export const LangList = () => {
  const history = useHistory();

  const beginnerButton = () => {
    history.push("/")
  }

  const htmlButton = () => {
    history.push("/multiplePage")
  }

  const typescriptButton = () => {
    history.push("/typescriptPage")
  }

  return (
    <>
    <div className="container">
    <div className="row">
      <div className="col s3 offset-s1 ">
        <button className="btn-large teal accent-4" onClick={beginnerButton}>Beginner</button>
      </div>
      <div className="col s3 offset-s1">
        <button className="btn-large orange darken-1" onClick={htmlButton}>HTML</button>
      </div>
      <div className="col s3 offset-s1">
        <button className="btn-large blue darken-1" onClick={typescriptButton}>TypeScript</button>
      </div>
    </div>
    </div>
    </>
  )
}

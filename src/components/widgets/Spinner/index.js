import "./spinner.css"
function Spinner() {
  return (
    <>
      <div className="container">
        <div align="center" className="cssload-fond">
          <div className="cssload-container-general">
            <div className="cssload-internal">
              <div className="cssload-ballcolor cssload-ball_1"> </div>
            </div>
            <div className="cssload-internal">
              <div className="cssload-ballcolor cssload-ball_2"> </div>
            </div>
            <div className="cssload-internal">
              <div className="cssload-ballcolor cssload-ball_3"> </div>
            </div>
            <div className="cssload-internal">
              <div className="cssload-ballcolor cssload-ball_4"> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Spinner

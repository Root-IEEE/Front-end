import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../app/auth/loginSlice";

const LoginPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onFinish = (e) => {
    e.preventDefault()
    dispatch(loginThunk({ "email": e.target.email.value, "password": e.target.password.value })).then(() => navigate("/overview"))
  }

  return (
    <div>
      <div className="log">
        <div className="container">
          <div className="row">
            {/* <!-- Start log page --> */}
            <div className="col-md-6">
              {/* <!-- Start left side --> */}
              <div className="lf-side">
                {/* <!-- navbar --> */}
                <div className="nav">
                  <h2>logoipsum</h2>
                  <h4>Language:</h4>
                  <div className="btn">
                    <Link to="/#" className="btn-ar">
                      AR
                    </Link>
                    <Link to="/#" className="btn-en">
                      EN
                    </Link>
                  </div>
                </div>
                {/* <!-- text --> */}
                <div className="text">
                  <h2>An investment in knowledge pays the best interest.</h2>
                  <p>
                    Sign in now to join <span>UR PROF</span>.
                  </p>
                </div>
                {/* <!-- form --> */}
                <div className="format">
                  <Form onSubmit={onFinish}>
                    <label className="d-block" for="email">Email</label>

                    <input
                      className="d-block input mb-3"
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      id="email"
                    />

                    <label for="Password">Password</label>

                    <input
                      className="d-block input mb-3"
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      id="password"
                    />
                    {/* <!-- button --> */}
                    <div className="button">
                      <button type="submit">Log in</button>
                    </div>
                  </Form>
                </div>
                {/* <!-- forget password --> */}
                <div className="f-pass">
                  <Link to="/forgot-password">Forget Password?</Link>
                </div>


                {/* <!-- sign up --> */}
                <div className="sign">
                  <h5>Don’t have an account?</h5>
                  <div className="btn-sign">
                    <Link to="/signup">Sign up</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End left side --> */}
            {/* <!-- Start right side --> */}
            <div className="col-md-6">
              <div className="image">
                {/* <!-- Start left side --> */}
                <img src="img/Rectangle 119.png" alt="" />
              </div>
            </div>
            {/* <!-- End right side --> */}
            {/* <!-- end log page --> */}
          </div>
        </div>
      </div>
    </div>
  );
}


export default LoginPage;

import React, { Component } from "react";
import { Link } from "react-router-dom";

export class LoginPage extends Component {
  render() {
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
                    <form action="#">
                      <label for="email">Email</label>
                      <br />
                      <input
                        className="input"
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        id="email"
                      />
                      <br />
                      <br />
                      <label for="Password">Password</label>
                      <br />
                      <input
                        className="input"
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        id="password"
                      />
                    </form>
                  </div>
                  {/* <!-- forget password --> */}
                  <div className="f-pass">
                    <Link to="/forgot-password">Forget Password?</Link>
                  </div>
                  {/* <!-- button --> */}
                  <div className="button">
                    <Link to="/overview">Log in</Link>
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
}

export default LoginPage;

import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SignupPage extends Component {
	render() {
		return (
			<div>
				<div className="sign-page">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								{/* <!-- Start left side --> */}
								<div className="lf-side">
									<div className="nav">
										<h2>logoipsum</h2>
										<h4>Language:</h4>
										<div className="btn">
											<button className="btn-ar">AR</button>
											<button className="btn-en">EN</button>
										</div>
									</div>
									<h3 className="mt-5 mb-3">Welcome to UR PROF!</h3>
									{/* form */}
									<div className="format">
										<form action="#">
											<label for="name">Name</label>
											<br />
											<input
												className="input"
												type="text"
												placeholder="Enter your Name"
												name="name"
												id="name"
											/>
											<br />
											<br />
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
											<label for="password">Password</label>
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
									{/* gender */}
									<div className="gender">
										<form className="form">
											<label className="main">Gender</label>
											<input
												type="radio"
												value="male"
												name="male"
												className="input"
												id="male"
											/>
											<label for="male" className=" label mr-5">
												Male
											</label>
											<input
												type="radio"
												value="female"
												name="female"
												id="female"
											/>
											<label for="female label ">Female</label>
										</form>
									</div>
									{/* button */}
									<div className="button">
										<Link to="/register">Sign Up</Link>
									</div>
									{/* <!-- log in --> */}
									<div className="sign">
										<h5>Already have an account?</h5>
										<div className="btn-sign">
											<Link to="/login">Log in</Link>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- End left side --> */}
							{/* <!-- Start right side --> */}
							<div className="col-md-6">
								<div className="image">
									<img src="img/Rectangle 119.png" alt="" />
								</div>
							</div>
							{/* <!-- End right side --> */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SignupPage;

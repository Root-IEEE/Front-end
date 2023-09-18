import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const  ResetPage =()=> {
		return (
			<div>
				<div className="forget3">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								{/* <!-- start card --> */}
								<div className="card text-center">
									<div className="icon">
										<img src="img/security-safe.png" alt="" />
									</div>
									{/* <!-- start content --> */}
									<div className="content">
										<h2>Reset Password</h2>
										<p>Please enter your new password to continue.</p>
										<h4>Password</h4>
										<input type="password" placeholder="Enter your password" />
										<h5>Confirm Password</h5>
										<input type="password" placeholder="Confirm password" />
										<NavLink to="/overView" className="btn-send">
											Send Reset Code
										</NavLink>
									</div>
									{/* <!-- end content --> */}
								</div>
								{/* <!-- end card --> */}
								<div className="text">
									<h6>
										Back to{" "}
										<NavLink to="/login">
											<span>Log in</span>
										</NavLink>
									</h6>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- image --> */}
					<div className="image">
						<img src="img/Vector.png" alt="" />
					</div>
				</div>
			</div>
		);
	}


export default ResetPage;

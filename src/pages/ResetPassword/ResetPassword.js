import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ResetPage extends Component {
	render() {
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
										<Link to="/overView" className="btn-send">
											Send Reset Code
										</Link>
									</div>
									{/* <!-- end content --> */}
								</div>
								{/* <!-- end card --> */}
								<div className="text">
									<h6>
										Back to{" "}
										<Link to="/login">
											<span>Log in</span>
										</Link>
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
}

export default ResetPage;

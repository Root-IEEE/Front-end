import React, { Component } from "react";
import { Link } from "react-router-dom";

export class VerifyPage extends Component {
	render() {
		return (
			<div>
				<div className="forget">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="card text-center">
									{/* <!-- start card --> */}
									<img src="img/info-circle.png" alt="" />
									{/* <!-- start content --> */}
									<div className="content">
										<h2>Verification</h2>
										<p>We have send you a code to verify your email address.</p>
										<div className="box">
											<input
												type="number"
												name=""
												placeholder="0"
												min="0"
												max="9"
												required
											/>
											<input
												type="number"
												name=""
												placeholder="0"
												min="0"
												max="9"
												required
											/>
											<input
												type="number"
												name=""
												placeholder="0"
												min="0"
												max="9"
												required
											/>
											<input
												type="number"
												name=""
												placeholder="0"
												min="0"
												max="9"
												required
											/>
											<input
												type="number"
												name=""
												placeholder="0"
												min="0"
												max="9"
												required
											/>
										</div>
										<Link className="btn-send" to="/reset-password">
											Continue
										</Link>
									</div>
									{/* <!-- end content --> */}
								</div>
								{/* <!-- end card --> */}
								<div className="text">
									<h6>
										Back to{" "}
										<Link to="login">
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

export default VerifyPage;

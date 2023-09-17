import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ForgetPage extends Component {
	render() {
		return (
			<div>
				<div class="forget">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								{/* <!-- card --> */}
								<div class="card text-center">
									<img src="img/sms-tracking.png" alt="" />
									{/* <!-- content --> */}
									<div class="content">
										<h2>Forget Password?</h2>
										<p>
											Please enter your email so we can send you a verification
											code.
										</p>
										<h5>Email</h5>
										<input type="Email" placeholder="Enter your email" />
										<Link class="btn-send" to="/verification-code">
											Send Reset code
										</Link>
									</div>
									{/* <!-- end content --> */}
								</div>
								{/* <!-- end card --> */}
								<div class="text">
									<h6>
										Back to{" "}
										<a href="/login">
											<span>Sign in</span>
										</a>
									</h6>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- image --> */}
					<div class="image">
						<img src="img/Vector.png" alt="" />
					</div>
				</div>
			</div>
		);
	}
}

export default ForgetPage;

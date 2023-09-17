import React, { Component } from "react";
import { Link } from "react-router-dom";

export class RegisterPage extends Component {
	render() {
		return (
			<div>
				<div class="register">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								{/* <!-- start card --> */}
								<div class="card text-center">
									<div class="icon">
										<img src="img/security-safe.png" alt="" />
									</div>
									{/* <!-- start content --> */}
									<div class="content">
										<h2>complete registration </h2>
										<p>
											Add your parents phone number and school year so you can
											complete your account information{" "}
										</p>
										<h4>mother phone number</h4>
										<input type="text" value="010 0909 9768" />
										<h5>Father phone number</h5>
										<input type="text" placeholder="Enter phone number" />
										<h3>school year</h3>
										<input type="text" placeholder="choose school year" />
										<Link to="/accept" class="btn-send">
											Submit
										</Link>
									</div>
									{/* <!-- end content --> */}
								</div>
								{/* <!-- end card --> */}
								<div class="text">
									<h6>
										Back to{" "}
										<Link to="/login">
											<span>Sign in</span>
										</Link>
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

export default RegisterPage;

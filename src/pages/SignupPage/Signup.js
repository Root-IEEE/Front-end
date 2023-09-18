import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerThunk } from "../../app/auth/registerSlice";

const SignupPage = () => {

	const dispatch = useDispatch()
	const navigate = useNavigate();

	const onFinish = (e) => {
		e.preventDefault()
		dispatch(registerThunk({ "name": e.target.name.value, "email": e.target.email.value, "password": e.target.password.value, "password_confirmation": e.target.password_confirmation.value })).then(() => navigate("/overview"))

	}
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
                    <Link to="/#" className="btn-ar">
                      AR
                    </Link>
                    <Link to="/#" className="btn-en">
                      EN
                    </Link>
                  </div>
								</div>
								<h3 className="mt-5 mb-3">Welcome to UR PROF!</h3>
								{/* form */}
								<div className="format">
									<Form onSubmit={onFinish}>
										<label className="d-block" for="name">Name</label>

										<input
											className="d-block input mb-3"
											type="text"
											placeholder="Enter your Name"
											name="name"
											id="name"
										/>

										<label className="d-block" for="email">Email</label>

										<input
											className="d-block input mb-3"
											type="email"
											placeholder="Enter your email"
											name="email"
											id="email"
										/>

										<label className="d-block" for="password">Password</label>

										<input
											className="d-block input mb-3"
											type="password"
											placeholder="Enter your password"
											name="password"
											id="password"
										/>

										<label className="d-block" for="password">Confirm Password</label>

										<input
											className="d-block input mb-3"
											type="password"
											placeholder="Enter your password"
											name="password_confirmation"
											id="confirm"
										/>

										{/* button */}
										<div className="button">
											<button type="submit">Sign Up</button>
										</div>


									</Form>
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

export default SignupPage;


import { NavLink } from "react-router-dom";

const  ForgetPage =()=> {
		return (

<div>
	<div className="forget">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					{/* <!-- card --> */}
					<div className="card text-center">
						<img src="img/sms-tracking.png" alt="" />
						{/* <!-- content --> */}
						<div className="content">
							<h2>Forget Password?</h2>
							<p>
								Please enter your email so we can send you a verification
								code.
							</p>
							<h5>Email</h5>
							<input type="Email" placeholder="Enter your email" />
							<NavLink className="btn-send" to="/verification-code">
								Reset code
							</NavLink>
						</div>
						{/* <!-- end content --> */}
					</div>
					{/* <!-- end card --> */}
					<div className="text">
						<h6>
							Back to{" "}
							<a href="/login">
								<span>Log in</span>
							</a>
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

export default ForgetPage;

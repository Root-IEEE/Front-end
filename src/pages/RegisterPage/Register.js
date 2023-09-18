
import { NavLink } from "react-router-dom";

const  RegisterPage =()=> {
		return (
			<div>
	<div className="register">
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
							<NavLink to="/accept" className="btn-send">
								Submit
							</NavLink>
						</div>
						{/* <!-- end content --> */}
					</div>
					{/* <!-- end card --> */}
					<div className="text">
						<h6>
							Back to{" "}
							<NavLink to="/login">
								<span>Sign in</span>
							</NavLink>
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

export default RegisterPage;

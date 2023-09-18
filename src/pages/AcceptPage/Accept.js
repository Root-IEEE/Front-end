
import { NavLink } from "react-router-dom";

const  AcceptPage =()=> {

return (
	<div>
		<div className="accept">
			<div className="container">
				<div className="row">
					{/* <!-- left side --> */}
					<div className="col-md-6 lt-side">
						<h2>
							Your <span>request</span> for registration has been submitted{" "}
							<span>successfully</span>
						</h2>
						<p>
							Please wait for your activation so you can login successfully,
							it won't take long, we will send you a confirmation email to{" "}
							<NavLink to="/overview">mariam.osama.eisa@gmail.com.</NavLink>
						</p>
						<NavLink className="back" to="/login">Back to Log in</NavLink>
					</div>
					{/* <!-- right side --> */}
					<div className="col-md-6 rt-side">
						<div className="image">
							<img src="img/Frame 43.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
}

export default AcceptPage;

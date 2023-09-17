import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Overviewpage extends Component {
render() {
return (
<div>
<div class="page">
	<div class="sidebar">
		<h3>Logo</h3>
		<ul>
			<li>
				<Link to="/overview" class="active">
					<i class="fa-solid fa-shapes"></i>
					<span>Overview</span>
				</Link>
			</li>
			<li>
				<Link to="/lesson">
					<i class="fa-regular fa-circle-play"></i>
					<span>lessons</span>
				</Link>
			</li>
			<li>
				<Link to="/quiz">
					<i class="fa-regular fa-file-lines"></i>
					<span>Quizzes</span>
				</Link>
			</li>
			<li>
				<Link to="/Message">
					<i class="fa-regular fa-comments"></i>
					<span>messages</span>
				</Link>
			</li>
			<li>
				<Link to="/Setting">
					<i class="fa-solid fa-gear"></i>
					<span>settings</span>
				</Link>
			</li>
		</ul>
		<Link to="/login">
			<i class="fa-solid fa-arrow-right-from-bracket"></i>
			<span>Log Out</span>
		</Link>
	</div>
	<div class="content">
		<div class="head ">
			<div class="info">
				<h3>Welcome,User</h3>
				<p>Tue, 12 Sep 2023</p>
			</div>
			<div class="icons">
				<div class="search p-re">
					<span class="notification p-re">
						<i class="fa-regular fa-bell fa-lg"></i>
					</span>
				</div>
			</div>
		</div>
		<div class="header">
			<h4>Continue learning</h4>
		</div>
		{/* <!-- start overview page  --> */}
		<div class="overview-page">
			<div class="container-fluid  ">
				<div class="row">
					<div class="col-md-6">
						<div class="overview">
							<div class="box">
								<video
									muted
									src="img/pexels_videos_1422633 (1080p).mp4"
									class="cover"
								></video>
								<div class="info">
									<h6>First Unit Second lesson</h6>
									<div class="progress">
										<span class="prog"></span>
									</div>
								</div>
							</div>kljl
							<button>Resume</button>
						</div>
						<div class="tabel">
							<div class="see">
								<h2>Recent Quizzes</h2>
								<Link to="#">See All</Link>
							</div>
							<div class="responsive-tabel">
								<table>
									<thead>
										<tr>
											<td>
												<i class="fa-solid fa-file-lines"></i>
											</td>
											<td>Quiz Name</td>
											<td>Lesson</td>
											<td>Date</td>
											<td>Score</td>
											<td>Status</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<i class="fa-regular fa-file-lines"></i>
											</td>
											<td>Practice test 1</td>
											<td>Unit 1</td>
											<td>45/50</td>
											<td>21/10/2023</td>
											<td>
												<span class="label bg-orange c-white btn-shape">
													Success
												</span>
											</td>
										</tr>
										<tr>
											<td>
												<i class="fa-regular fa-file-lines"></i>
											</td>
											<td>Practice test 1</td>
											<td>Unit 1</td>
											<td>10/50</td>
											<td>21/10/2023</td>
											<td>
												<span class="labell bg-orange c-white btn-shape">
													Success
												</span>
											</td>
										</tr>
										<tr>
											<td>
												<i class="fa-regular fa-file-lines"></i>
											</td>
											<td>Practice test 1</td>
											<td>Unit 1</td>
											<td>45/50</td>
											<td>21/10/2023</td>
											<td>
												<span class="label bg-orange c-white btn-shape">
													Success
												</span>
											</td>
										</tr>
										<tr>
											<td>
												<i class="fa-regular fa-file-lines"></i>
											</td>
											<td>Practice test 1</td>
											<td>Unit 1</td>
											<td>10/50</td>
											<td>21/10/2023</td>
											<td>
												<span class="labell bg-orange c-white btn-shape">
													Success
												</span>
											</td>
										</tr>
										<tr>
											<td>
												<i class="fa-regular fa-file-lines"></i>
											</td>
											<td>Practice test 1</td>
											<td>Unit 1</td>
											<td>10/50</td>
											<td>21/10/2023</td>
											<td>
												<span class="label bg-orange c-white btn-shape">
													Success
												</span>
											</td>
										</tr>
										<tr>
											<td>
												<i class="fa-regular fa-file-lines"></i>
											</td>
											<td>Practice test 1</td>
											<td>Unit 1</td>
											<td>10/50</td>
											<td>21/10/2023</td>
											<td>
												<span class="labell bg-orange c-white btn-shape">
													Success
												</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div class="col-md-5">
						<div class="recent">
							<h2>Recent Lessons</h2>
							<Link to="#">See All</Link>
						</div>
						<div class="lessons">
							<div class="box">
								<video
									muted
									src="img/pexels_videos_1422633 (1080p).mp4"
									class="cover"
								></video>
								<div class="info">
									<h3>First Unit Second lesson</h3>
									<p>
										Mollis aliquam nec amet habitant sagittis bibendum
										nisl felis viverra.....
									</p>
									<div class="view">
										<span>
											<i class="fa-solid fa-file-lines"></i>1 Quiz
										</span>
										<span class="span">
											<i class="fa-solid fa-eye"></i>3 views
										</span>
									</div>
								</div>
							</div>
							<div class="box">
								<video
									muted
									src="img/pexels_videos_1422633 (1080p).mp4"
									class="cover"
								></video>
								<div class="info">
									<h3>First Unit Second lesson</h3>
									<p>
										Mollis aliquam nec amet habitant sagittis bibendum
										nisl felis viverra.....
									</p>
									<div class="view">
										<span>
											<i class="fa-solid fa-file-lines"></i>1 Quiz
										</span>
										<span class="span">
											<i class="fa-solid fa-eye"></i>3 views
										</span>
									</div>
								</div>
							</div>
							<div class="box">
								<video
									muted
									src="img/pexels_videos_1422633 (1080p).mp4"
									class="cover"
								></video>
								<div class="info">
									<h3>First Unit Second lesson</h3>
									<p>
										Mollis aliquam nec amet habitant sagittis bibendum
										nisl felis viverra.....
									</p>
									<div class="view">
										<span>
											<i class="fa-solid fa-file-lines"></i>1 Quiz
										</span>
										<span class="span">
											<i class="fa-solid fa-eye"></i>3 views
										</span>
									</div>
								</div>
							</div>
							<div class="box">
								<video
									muted
									src="img/pexels_videos_1422633 (1080p).mp4"
									class="cover"
								></video>
								<div class="info">
									<h3>First Unit Second lesson</h3>
									<p>
										Mollis aliquam nec amet habitant sagittis bibendum
										nisl felis viverra.....
									</p>
									<div class="view">
										<span>
											<i class="fa-solid fa-file-lines"></i>1 Quiz
										</span>
										<span class="span">
											<i class="fa-solid fa-eye"></i>3 views
										</span>
									</div>
								</div>
							</div>
							<div class="box">
								<video
									muted
									src="img/pexels_videos_1422633 (1080p).mp4"
									class="cover"
								></video>
								<div class="info">
									<h3>First Unit Second lesson</h3>
									<p>
										Mollis aliquam nec amet habitant sagittis bibendum
										nisl felis viverra.....
									</p>
									<div class="view">
										<span>
											<i class="fa-solid fa-file-lines"></i>1 Quiz
										</span>
										<span class="span">
											<i class="fa-solid fa-eye"></i>3 views
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- end overview page  --> */}
	</div>
</div>
</div>
);
}
}

export default Overviewpage;

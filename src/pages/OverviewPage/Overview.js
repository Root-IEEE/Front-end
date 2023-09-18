
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getLessonsThunk } from '../../app/lessons/lessonsSlice';
import { getExamsThunk } from "../../app/exams/examsSlice";

const Overviewpage = () => {

	const dispatch = useDispatch()
	const { lessons } = useSelector(({ lessons }) => lessons)
	const { exams } = useSelector(({ exams }) => exams)


	useEffect(() => {
		dispatch(getLessonsThunk()) && dispatch(getExamsThunk())
	}, [dispatch])
	return (
		<div>
			<div className="page">
				<div className="sidebar">
					<h3>Logo</h3>
					<ul>
						<li>
							<NavLink to="/overview" className="active">
								<i className="fa-solid fa-shapes"></i>
								<span>Overview</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/lesson">
								<i className="fa-regular fa-circle-play"></i>
								<span>lessons</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/quiz">
								<i className="fa-regular fa-file-lines"></i>
								<span>Quizzes</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/message">
								<i className="fa-regular fa-comments"></i>
								<span>messages</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/setting">
								<i className="fa-solid fa-gear"></i>
								<span>settings</span>
							</NavLink>
						</li>
					</ul>
					<NavLink to="/login">
						<i className="fa-solid fa-arrow-right-from-bracket"></i>
						<span>Log Out</span>
					</NavLink>
				</div>
				<div className="content">
					<div className="head ">
						<div className="info">
							<h3>Welcome,User</h3>
							<p>Tue, 12 Sep 2023</p>
						</div>
						<div className="icons">
							<div className="search p-re">
								<span className="notification p-re">
									<i className="fa-regular fa-bell fa-lg"></i>
								</span>
							</div>
						</div>
					</div>
					<div className="header">
						<h4>Continue learning</h4>
					</div>
					{/* <!-- start overview page  --> */}
					<div className="overview-page">
						<div className="container-fluid  ">
							<div className="row">
								<div className="col-md-6">
									<div className="overview">
										<div className="box">
											<video
												muted
												src="img/pexels_videos_1422633 (1080p).mp4"
												className="cover"></video>
											<div className="info">
												<h6>First Unit Second lesson</h6>
												<div className="progress">
													<span className="prog"></span>
												</div>
											</div>
										</div>
										<button>Resume</button>
									</div>
									<div className="tabel">
										<div className="see">
											<h2>Recent Quizzes</h2>
											<NavLink to="#">See All</NavLink>
										</div>
										<div className="responsive-tabel">
											<table>
												<thead>
													<tr>
														<td>
															<i className="fa-solid fa-file-lines"></i>
														</td>
														<td>Quiz Name</td>
														<td>Lesson</td>
														<td>Date</td>
														<td>Score</td>
														<td>Status</td>
													</tr>
												</thead>
												<tbody>
													{exams.map(exam => <tr>
														<td>
															<i className="fa-regular fa-file-lines"></i>
														</td>
														<td>{exam.title}</td>
														<td>{exam.description}</td>
														<td>45/50</td>
														<td>21/10/2023</td>
														<td>
															<span className="label bg-orange c-white btn-shape">
																Success
															</span>
														</td>
													</tr>)}
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<div className="col-md-5">
									<div className="recent">
										<h2>Recent Lessons</h2>
										<NavLink to="#">See All</NavLink>
									</div>
									<div className="lessons">
										{lessons.map(lesson => <div className="box">
											<video
												muted
												src="img/pexels_videos_1422633 (1080p).mp4"
												className="cover"
											></video>
											<div className="info">
												<h3>{lesson.title}</h3>
												<p>
													{lesson.description}
												</p>
												<div className="view">
													<span>
														<i className="fa-solid fa-file-lines"></i>1 Quiz
													</span>
													<span className="span">
														<i className="fa-solid fa-eye"></i>3 views
													</span>
												</div>
											</div>
										</div>)}
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


export default Overviewpage;

import { createBrowserRouter, Navigate } from "react-router-dom";

// import App from "./App";
import ForgotPasswordPage from "./pages/ForgotPassword/ForgotPassword";
import VerificationCodePage from "./pages/VerificationCode/VerificationCode";
import ResetPasswordPage from "./pages/ResetPassword/ResetPassword";
import AcceptPage from "./pages/AcceptPage/Accept";
import LoginPage from "./pages/LoginPage/Login";
import SignupPage from "./pages/SignupPage/Signup";
import RegisterPage from "./pages/RegisterPage/Register";
import Overviewpage from "./pages/OverviewPage/Overview";
import LessonPage from "./pages/LessonPage/Lesson";
import QuizPage from "./pages/QuizPage/Quiz";
import SettingPage from "./pages/SettingPage/Setting";
import QuizdetailPage from "./pages/QuizdetailPage/Quizdetail";
import MessagePage from "./pages/MessagePage/Message";
import LessondetailPage from "./pages/LessondetailPage/Lessondetail";




const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/signup" />,
	},
	{
		path: "/signup",
		element: <SignupPage />,
	},
	{
		path: "/forgot-password",
		element: <ForgotPasswordPage />,
	},
	{
		path: "/verification-code",
		element: <VerificationCodePage />,
	},
	{
		path: "/reset-password",
		element: <ResetPasswordPage />,
	},
	{
		path: "/accept",
		element: <AcceptPage />,
	},

	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
	{
		path: "/overView",
		element: <Overviewpage />,
	},
	{
		path: "/lesson",
		element: <LessonPage />,
	},
	{
		path: "/lessondetail",
		element: <LessondetailPage />,
	},
	{
		path: "/quiz",
		element: <QuizPage />,
	},
	{
		path: "/quizdetail",
		element: <QuizdetailPage />,
	},
	{
		path: "/message",
		element: <MessagePage />,
	},
	{
		path: "/setting",
		element: <SettingPage />,
	},

	
	// ... add other route configurations ...
]);

export default router;

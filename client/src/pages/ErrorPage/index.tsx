import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";
import { Row, Col } from "antd";
import "./index.css";
import { Link } from "react-router-dom";

interface P{}

export default (props: P) => {
	const params = useParams();
	const navigate = useNavigate();
	const mylocation = useLocation();

	// let currentId: string = params.id as string;

	useEffect(() => {
		// document.title = '';
	}, []);

	return (
			<div className="container404">
				<img src="http://175.24.95.94/" />
				<p>404 - 页面不存在喵</p>
				<Link to='/'>点这里回到首页</Link>
			</div>
	);
};

import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";
import { Row, Col } from "antd";
import "./index.css";
import TodofukenSelector from "../../components/TodofukenSelector";

interface P {}

export default (props: P) => {
	const params = useParams();
	const navigate = useNavigate();
	const mylocation = useLocation();

	// let currentId: string = params.id as string;

	useEffect(() => {
		// document.title = '';
	}, []);

	return (
		<>
			<TodofukenSelector
				onChange={(e) => {
					console.log(e);
				}}
			/>
		</>
	);
};

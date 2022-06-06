import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";
import { Row, Col, Input, Button } from "antd";
import "./index.css";

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
			<Row>
				<Col>
					<div className="listContainer">
						<div className="search">
							<Input.Search />
							<Button>筛选</Button>
						</div>
						<div className="list"></div>
					</div>
				</Col>
			</Row>
		</>
	);
};

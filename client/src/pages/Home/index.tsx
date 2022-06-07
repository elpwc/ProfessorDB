import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";
import { Row, Col, Input, Button } from "antd";
import "./index.css";
import { findAllProfessor } from "../../services/api/Professor";
import { Link } from "react-router-dom";

interface P {}

export default (props: P) => {
	const params = useParams();
	const navigate = useNavigate();
	const mylocation = useLocation();

	const [professors, setprofessors]: [API.Professor[], any] = useState([]);

	// let currentId: string = params.id as string;

	const refreshProfessors = () => {
		findAllProfessor()
			.then((res) => {
				console.log(res);
				if (res) {
					setprofessors(res);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		// document.title = '';
		refreshProfessors();
	}, []);

	return (
		<>
			<Row>
				<Col>
					<div className="listContainer">
						{/*add button*/}
						<Link to="/add">
							<div className="addbtn">+</div>
						</Link>

						<div className="search">
							<Input.Search />
							<Button>筛选</Button>
						</div>

						<div className="list">
							{professors.map((professor: API.Professor) => {
								return (
									<div>
										{professor.id}
										{professor.namejp}
									</div>
								);
							})}
						</div>
					</div>
				</Col>
			</Row>
		</>
	);
};

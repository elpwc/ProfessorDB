import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";
import { Row, Col, Input, Button, Rate } from "antd";
import "./index.css";
import { findAllProfessor } from "../../services/api/Professor";
import { Link } from "react-router-dom";
import ListItem from "./components/ListItem";

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
			<div className="listContainer">
				{/*add button*/}
				<Link to="/add">
					<div className="addbtn">
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
							<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
						</svg>
					</div>
				</Link>

				<div className="search">
					<Input.Search placeholder="搜索教授/学校/专攻" />
					<Button>筛选</Button>
				</div>

				<div className="list">
					{professors.map((professor: API.Professor) => {
						return (
							<Link to={"/professor/" + professor.id}>
								<ListItem professor={professor} />
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
};

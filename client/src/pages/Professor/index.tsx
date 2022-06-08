import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";
import { Row, Col, Rate } from "antd";
import "./index.css";
import { findOneProfessor } from "../../services/api/Professor";

interface P {}

export default (props: P) => {
	const params = useParams();
	const navigate = useNavigate();
	const mylocation = useLocation();

	const [professor, setprofessor]: [API.Professor | undefined, any] = useState();

	let currentId: string = params.id as string;

	useEffect(() => {
		// document.title = '';
		findOneProfessor({ id: currentId })
			.then((res) => {
				setprofessor(res.data);
			})
			.catch((error) => {
				console.log(error);
				navigate("/404");
			});
	}, []);

	return (
		<div className="listitem">
			<div className="itemproperties">
				<div>
					<span>{professor?.namejp}</span>
				</div>
				<p>{professor?.university + " " + professor?.subject}</p>
				<p>{professor?.direction}</p>
				<div>
					推荐度: <Rate disabled defaultValue={2} />
				</div>
			</div>

			{professor?.photo ? (
				<div>
					<img src={professor?.photo} height="80px" />
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

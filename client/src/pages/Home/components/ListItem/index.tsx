import { Rate } from "antd";
import "./index.css";

export default ({ professor }: { professor: API.Professor }) => {
	return (
		<div className="listitem">
			<div className="itemproperties">
				<div>
					<span>{professor.namejp}</span>
				</div>
				<p>{professor.university + " " + professor.subject}</p>
				<p>{professor.direction}</p>
				<div>
					推荐度: <Rate disabled defaultValue={2} />
				</div>
			</div>

			{professor.photo ? (
				<div>
					<img src={professor.photo} height="80px" />
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

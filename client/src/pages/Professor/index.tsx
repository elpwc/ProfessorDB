import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";
import { Row, Col, Rate, Form, Button } from "antd";
import "./index.css";
import { findOneProfessor, updateProfessor } from "../../services/api/Professor";
import { HaiwangIndex, ReplyRate } from "../../utils/strings";
import TextArea from "antd/lib/input/TextArea";

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
		<div>
			<div className="infobox">
				<div className="maininfo">
					<div className="itemproperties">
						<div>
							<span>{professor?.namejp}</span>
						</div>
						<p>{professor?.university + " " + professor?.subject}</p>
						<p>{professor?.direction}</p>
						<p>{professor?.country !== '其他' ? professor?.country : ''}</p>
						<div>
							推荐度: <Rate disabled value={professor?.recommendation} />
						</div>
						<div>
							海王指数: <Rate disabled value={professor?.haiwang} />
							{HaiwangIndex[professor?.haiwang ?? 0]}
						</div>
						<div>回复率: {ReplyRate[professor?.replyrate ?? 0]}</div>
						<div className="professorInfoText">
							<p>学生情况：</p>
							<p>{professor?.students || '(等人补充)'}</p>
						</div>
						<div className="professorInfoText">
							<p>介绍和说明：</p>
							<p>{professor?.description || '(等人补充)'}</p>
						</div>
						<div className="professorInfoText">
							<p>避雷建议：</p>
							<p>{professor?.mine || '(等人补充)'}</p>
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
			</div>
			<div className="commentsContainer">
				<div className="writeComment">
					<Form
						layout="inline"
						onFinish={(data) => {
							updateProfessor({ id: professor?.id.toString() ?? "" }, {})
								.then((res) => {
									console.log(res);
								})
								.catch((error) => {
									console.log("error", error);
								});
						}}
					>
						<Form.Item>
							<TextArea />
						</Form.Item>
						<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
							<Button type="primary" htmlType="submit">
								补充 / 评论
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	);
};

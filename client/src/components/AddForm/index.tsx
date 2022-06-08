import { Button, Form, Input, Radio, Rate } from "antd";
import { useState } from "react";
import { createProfessor } from "../../services/api/Professor";
import { HaiwangIndex, ReplyRate } from "../../utils/strings";

const { TextArea } = Input;

export default () => {
	const [photourl, setphotourl]: [string, any] = useState("");

	return (
		<Form
			layout="horizontal"
			labelCol={{ span: 4 }}
			wrapperCol={{ span: 14 }}
			onFinish={(data) => {
				createProfessor(data)
					.then((res) => {
						console.log(res);
					})
					.catch((error) => {
						console.log("error", error);
					});
			}}
		>
			<Form.Item label="教授名字" name="namejp" rules={[{ required: true, message: "名字是必需的" }]}>
				<Input />
			</Form.Item>
			<Form.Item label="所在大学" name="university" rules={[{ required: true, message: "所在大学是必需的" }]}>
				<Input />
			</Form.Item>
			<Form.Item label="专攻" name="subject" rules={[{ required: true, message: "专攻是必需的" }]}>
				<Input />
			</Form.Item>
			<Form.Item label="方向" name="direction">
				<Input />
			</Form.Item>
			<Form.Item label="邮箱" name="email">
				<Input />
			</Form.Item>
			<Form.Item label="网站" name="website">
				<Input />
			</Form.Item>
			<Form.Item label="图片" name="photo">
				<Input
					placeholder="请在此粘贴图标链接"
					onChange={(e) => {
						setphotourl(e.target.value);
					}}
				/>
				<img src={photourl} style={{ maxWidth: "100%", maxHeight: "100px" }} />
			</Form.Item>
			<Form.Item label="回复率" name="replyrate">
				<Radio.Group defaultValue={0} buttonStyle="solid">
					{ReplyRate.map((item, i) => {
						return (
							<Radio.Button value={i} key={item}>
								{item}
							</Radio.Button>
						);
					})}
				</Radio.Group>
			</Form.Item>
			<Form.Item label="海王指数" name="haiwang" tooltip="同时嘴上答应很多人的指数(?)">
				<Radio.Group defaultValue={0} buttonStyle="solid">
					{HaiwangIndex.map((item, i) => {
						return (
							<Radio.Button value={i} key={item}>
								{item}
							</Radio.Button>
						);
					})}
				</Radio.Group>
			</Form.Item>
			<Form.Item label="详细说明" name="description">
				<TextArea />
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					录入
				</Button>
			</Form.Item>
		</Form>
	);
};

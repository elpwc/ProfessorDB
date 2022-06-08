import { Button, Form, Input } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { createProfessor } from "../../services/api/Professor";

export default () => {
	return (
		<Form
			layout="vertical"
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
			<FormItem label="教授名字" name="namejp">
				<Input />
			</FormItem>
			<FormItem label="所在大学" name="university">
				<Input />
			</FormItem>
			<FormItem label="专攻" name="subject">
				<Input />
			</FormItem>
			<FormItem label="方向" name="direction">
				<Input />
			</FormItem>
			<FormItem label="邮箱" name="email">
				<Input />
			</FormItem>
			<FormItem label="网站" name="website">
				<Input />
			</FormItem>
			<FormItem label="推荐度" name="recommendation">
				<Input />
			</FormItem>
			<FormItem label="描述" name="description">
				<Input />
			</FormItem>
			<FormItem label="图片" name="photo">
				<Input />
			</FormItem>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					添加
				</Button>
			</Form.Item>
		</Form>
	);
};

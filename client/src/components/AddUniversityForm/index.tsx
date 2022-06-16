import { Button, Form, Input } from 'antd';
import { createUniversity } from '../../services/api/University';
import TodofukenSelector from '../TodofukenSelector';

export default () => {
  return (
    <Form
      layout="horizontal"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      onFinish={data => {
        createUniversity(data)
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log('error', error);
          });
      }}
    >
      <Form.Item label="大学名" name="name" rules={[{ required: true, message: '名字是必需的' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="地域" name="university" rules={[{ required: true, message: '所在大学是必需的' }]}>
        <TodofukenSelector />
      </Form.Item>
      <Form.Item label="网站" name="website">
        <Input />
      </Form.Item>
      <Form.Item label="描述" name="description">
        <Input />
      </Form.Item>
      <Form.Item label="校徽" name="logo">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          添加
        </Button>
      </Form.Item>
    </Form>
  );
};

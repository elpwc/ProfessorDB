import { Button, Checkbox, Form, Input, Radio, Rate, Select } from 'antd';
import { useState } from 'react';
import { createProfessor } from '../../services/api/Professor';
import { findAllUniversity } from '../../services/api/University';
import { Countries, HaiwangIndex, ReplyRate } from '../../utils/strings';
import AddUniversityModal from '../AddUniversityModal';

const { TextArea } = Input;
const { Option } = Select;

export default () => {
  const [form] = Form.useForm();
  const photoValue = Form.useWatch('photo', form);

  const [universities, setuniversities] = useState([]);

  const [addUniModalVis, setaddUniModalVis] = useState(false);

  return (
    <>
      <AddUniversityModal visible={addUniModalVis} onCancel={()=>{setaddUniModalVis(false)}}/>
      <Form
        form={form}
        layout="horizontal"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        initialValues={{
          country: '日本',
          replyrate: 0,
          haiwang: 0,
        }}
        onFinish={data => {
          createProfessor(data)
            .then(res => {
              console.log(res);
            })
            .catch(error => {
              console.log('error', error);
            });
        }}
      >
        <Form.Item label="教授名字" name="namejp" rules={[{ required: true, message: '名字是必需的' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="所在大学" name="university" rules={[{ required: true, message: '所在大学是必需的' }]}>
          <Select
            showSearch
            defaultActiveFirstOption={false}
            showArrow={true}
            filterOption={false}
            placeholder="输入大学名称选择，没有的话请添加一下谢谢茄子"
            onSearch={e => {
              findAllUniversity({ search: e }).then(res => {
                if (res.data) {
                  setuniversities(res.data);
                }
              });
            }}
            notFoundContent={<button onClick={() => {setaddUniModalVis(true)}}>添加</button>}
          >
            {universities.map((university: API.University) => {
              return (
                <Option key={university.id} value={university.id}>
                  {university.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item label="专攻" name="subject" rules={[{ required: true, message: '专攻是必需的' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="方向" name="direction">
          <Input />
        </Form.Item>
        <Form.Item label="哪里人" name="country">
          <Radio.Group buttonStyle="solid">
            {Countries.map((item, i) => {
              return (
                <Radio.Button value={item} key={item}>
                  {item}
                </Radio.Button>
              );
            })}
          </Radio.Group>
        </Form.Item>
        <Form.Item label="是否会汉语" name="canSpeakChinese">
          <Checkbox />
        </Form.Item>
        <Form.Item label="邮箱" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="网站" name="website">
          <Input />
        </Form.Item>
        <Form.Item label="图片" name="photo">
          <Input placeholder="请在此粘贴图标链接" />
        </Form.Item>
        <img src={photoValue} style={{ maxWidth: '100%', maxHeight: '100px' }} />
        <Form.Item label="回复率" name="replyrate">
          <Radio.Group buttonStyle="solid">
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
          <Radio.Group buttonStyle="solid">
            {HaiwangIndex.map((item, i) => {
              return (
                <Radio.Button value={i} key={item}>
                  {item}
                </Radio.Button>
              );
            })}
          </Radio.Group>
        </Form.Item>
        <Form.Item label="推荐度" name="recommendation">
          <Rate />
        </Form.Item>
        <Form.Item label="学生情况（m, d）" name="students">
          <TextArea />
        </Form.Item>
        <Form.Item label="介绍 / 详细说明" name="description">
          <TextArea />
        </Form.Item>
        <Form.Item label="避雷 / 毕业难度" name="mine">
          <TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 4 }}>
          <Button type="primary" htmlType="submit">
            录入
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

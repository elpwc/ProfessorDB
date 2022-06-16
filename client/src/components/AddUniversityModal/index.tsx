import { Modal } from 'antd';
import AddUniversityForm from '../AddUniversityForm';

interface Props {
  visible: boolean;
  onCancel: () => void;
}

export default (props: Props) => {

  return (
    <Modal visible={props.visible} width="50%" onCancel={props.onCancel} title="添加大学">
      <AddUniversityForm />
    </Modal>
  );
};

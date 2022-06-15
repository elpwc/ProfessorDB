import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import TodofukenMapSelector from '../../components/TodofukenMapSelector';
import TodofukenSelector from '../../components/TodofukenSelector';
import './index.css';

interface P {}

export default (props: P) => {
  const params = useParams();
  const navigate = useNavigate();
  const mylocation = useLocation();

  // let currentId: string = params.id as string;

  useEffect(() => {
    // document.title = '';
  }, []);

  return (
    <>
      <TodofukenSelector
        onChange={e => {
          console.log(e);
        }}
      />

      <TodofukenMapSelector />
    </>
  );
};

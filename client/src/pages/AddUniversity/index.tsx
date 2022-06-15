import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import AddUniversityForm from '../../components/AddUniversityForm';
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
    <div className="addformContainer">
      <AddUniversityForm />
    </div>
  );
};

import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { findAllUniversity } from '../../services/api/University';
import './index.css';

interface P {}

export default (props: P) => {
  const params = useParams();
  const navigate = useNavigate();
  const mylocation = useLocation();

  const [universities, setuniversities] = useState([]);
  // let currentId: string = params.id as string;

  const freshUniversities = () => {
    findAllUniversity({ search: '' }).then(res => {
      setuniversities(res.data);
    });
  };

  useEffect(() => {
    // document.title = '';

    freshUniversities();
  }, []);

  return (
    <div>
      <Link to="/adduni"><button>add</button></Link>
      <div>
        {universities.map((university: API.University) => {
          return <div key={university.id}>{university.name}</div>;
        })}
      </div>
    </div>
  );
};

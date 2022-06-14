import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import LeftMenu from '../../components/LeftMenu';
import './index.css';

interface P {}

export default (props: P) => {
  const params = useParams();
  const navigate = useNavigate();
  const mylocation = useLocation();

  const [showLeft, setshowLeft]: [boolean, any] = useState(true);

  // let currentId: string = params.id as string;

  useEffect(() => {
    // document.title = '';
  }, []);

  return (
    <>
      <header>
        <button
          onClick={() => {
            setshowLeft(!showLeft);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>

        <Link to="/">
          <p>Professor DB</p>
        </Link>

        <Link to="">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </button>
        </Link>
      </header>

      <Row style={{ height: '100%' }}>
        {showLeft ? (
          <Col span={4}>
            <LeftMenu />
          </Col>
        ) : (
          <></>
        )}

        <Col span={showLeft ? 20 : 24}>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

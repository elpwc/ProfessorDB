import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { OuterLinkSVG } from '../../utils/svg';
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
    <div className="aboutContainer">
      <div className="titleContainer">
        <p style={{ fontSize: '1.2rem' }}>
          <ruby>
            日本大学院<rp>(</rp>
            <rt>润日</rt>
            <rp>)</rp>
          </ruby>
          导师数据库
        </p>
        <hr />
        <p>准备开润但实在不知道该怎么选学校选教授然后发现群里大家也一样所以抽空建立了这个数据库</p>
        <p>总之欢迎大家补充喵~</p>
        <p>祝大家都有一个成功的润喵</p>
        <p>
          灵感来自于
          <a href="https://zhuanlan.zhihu.com/p/451410022" target="_blank">
            《日本大学院计算机SGU英文项目冲浪指南》
            <sup>
              <OuterLinkSVG w={8} h={8} />
            </sup>
          </a>
          中的表格
        </p>
      </div>

      <div className="identity">
        <p className="author">
          author:{' '}
          <a href="https://github.com/elpwc" target="_blank">
            @elpwc
            <sup>
              <OuterLinkSVG w={8} h={8} />
            </sup>
          </a>
        </p>
        <p>elpwc@hotmail.com</p>

        <p style={{ color: 'gray' }}>2022</p>
      </div>

      <div className="github">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </div>
        <div>
          <p>ProfessorDB是在GitHub维护的开源项目。</p>
          <div>
            欢迎前来贡献、提issue→
            <a href="https://github.com/elpwc/ProfessorDB" target="_blank">
              こ↑こ↓
              <sup>
                <OuterLinkSVG w={8} h={8} />
              </sup>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

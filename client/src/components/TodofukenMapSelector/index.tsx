import './index.css';

export default () => {
  const chihous = [
    {
      name: '北海道',
      left: 7.5,
      top: 0,
      height: 2,
      width: 2,
      todofukens: [],
    },
    {
      name: '東北地方',
      left: 7,
      top: 3,
      height: 2.5,
      width: 2,
      todofukens: [],
    },
    {
      name: '関東地方',
      left: 8,
      top: 5.5,
      height: 1.5,
      width: 1,
      todofukens: [],
    },
    {
      name: '中部地方',
      left: 6,
      top: 5.5,
      height: 2,
      width: 2,
      todofukens: [],
    },
    {
      name: '近畿地方',
      left: 4,
      top: 6.5,
      height: 2,
      width: 2,
      todofukens: [],
    },
    {
      name: '中国地方',
      left: 2,
      top: 6.5,
      height: 1,
      width: 2,
      todofukens: [],
    },
    {
      name: '四国地方',
      left: 2,
      top: 8,
      height: 1,
      width: 1.5,
      todofukens: [],
    },
    {
      name: '九州地方',
      left: 0,
      top: 7.5,
      height: 2.5,
      width: 1.5,
      todofukens: [],
    },
  ];

  return (
    <div className="todofukenMapContainer">
      <div className="chihouContainer">
        {chihous.map(chihou => {
          return (
            <div key={chihou.name} className="chihou" style={{ left: `${chihou.left * 10}%`, top: `${chihou.top * 10}%`, width: `${chihou.width * 10}%`, height: `${chihou.height * 10}%` }}>
              {chihou.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

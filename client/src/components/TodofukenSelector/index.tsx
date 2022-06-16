import { Select } from 'antd';

const { Option, OptGroup } = Select;

interface Props {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export default (props: Props) => {
  const todofukens = [
    {
      chihou: '関東地方',
      todofukens: ['東京都', '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '神奈川県'],
    },
    {
      chihou: '近畿地方',
      todofukens: ['京都府', '大阪府', '三重県', '滋賀県', '兵庫県', '奈良県', '和歌山県'],
    },
    {
      chihou: '中国地方',
      todofukens: ['広島県', '岡山県', '鳥取県', '島根県', '山口県'],
    },
    {
      chihou: '九州地方',
      todofukens: ['福岡県', '佐賀県', '大分県', '長崎県', '熊本県', '宮崎県', '鹿児島県'],
    },
    {
      chihou: '東北地方',
      todofukens: ['青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県'],
    },
    {
      chihou: '中部地方',
      todofukens: ['静岡県', '愛知県', '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県'],
    },
    {
      chihou: '四国地方',
      todofukens: ['徳島県', '愛媛県', '香川県', '高知県'],
    },
    {
      chihou: '北海道地方',
      todofukens: ['北海道'],
    },
    {
      chihou: '沖縄地方',
      todofukens: ['沖縄県'],
    },
    {
      chihou: '海外',
      todofukens: ['海外'],
    },
  ];

  return (
    <Select className={props?.className} showSearch style={props?.style} onChange={props?.onChange} value={props?.value} placeholder={props?.placeholder}>
      {todofukens.map(chihou => {
        return (
          <OptGroup label={chihou.chihou} key={chihou.chihou}>
            {chihou.todofukens.map(todofuken => {
              return (
                <Option value={todofuken} key={todofuken}>
                  {todofuken}
                </Option>
              );
            })}
          </OptGroup>
        );
      })}
    </Select>
  );
};

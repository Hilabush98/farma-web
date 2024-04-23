/* eslint-disable react/prop-types */
import { Card, Statistic } from "antd";

const CardComponent = ({
  tittle,
  value,
  style,
  prefix,
  suffix,
  typeCard,
  onClickCard,
}) => {
  console.log(tittle);
  {
    switch (typeCard) {
      case "statistic":
        return (
          <>
            <Card bordered={false} onClick={onClickCard}>
              <Statistic
                title={tittle}
                value={value}
                precision={2}
                valueStyle={style}
                prefix={prefix}
                suffix={suffix}
              />
            </Card>
          </>
        );

      default:
        return null;
    }
  }
};
export default CardComponent;

/* eslint-disable react/prop-types */
import { Card, Statistic } from 'antd';

 const CardComponent = ({tittle, value, style, icon, suffix, typeCard}) => {
  {
    switch (typeCard) {
      case 'statistic':
        
        return(
          <>
            <Card bordered={false}>
              <Statistic
                title={tittle}
                value={value}
                precision={2}
                valueStyle={style}
                prefix={icon}
                suffix={suffix}
              />
          </Card> 
          </>
        );
    
      default:
        return (null);
    }
  } 
}
export default CardComponent
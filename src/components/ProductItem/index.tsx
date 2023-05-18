import React, { useState } from "react";
import { Ticket } from "../../store/ticket/types";
import { PercentageLoader } from "../loaders";
import {CustomSwitch} from '../CustomInputs/index'
import './style.css'


type Props = {
  item: Ticket;
}

const ProductItem: React.FC<Props> = ({ item }) => {

  const [checked, setChecked] = useState(!!item.active)

  const check = () => {
    setChecked((oldValue: boolean) => !oldValue)
  }

  const getPercent = () => {
    return Math.round(item.amount/((item.amount_avaliable + item.amount) || 1) * 100);
  }

  return (
    <div className="ticket" key={item.title}>
      <div className="percent" style={{ backgroundColor: ('#' + item.color), backgroundImage:`url(${item.image})`, backgroundRepeat: 'round' }}>
        <PercentageLoader percent={getPercent()} color={item.color} />
      </div>

      <div className="content">
        <div className="title">{item.title}</div>
        <div className="amount"> {item.amount}/{Number(item.amount_avaliable) + Number(item.amount)} יחידות</div>
        <div className="price">{item.price + ''}</div>
      </div>

      <div className="switch-wrapper">
        <CustomSwitch checked={checked} check={check} />
      </div> 
    </div>
  );
};


export default ProductItem;

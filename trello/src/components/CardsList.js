import React from "react";
import Card from './Card';

const CardsList = (props) => {
  const { cards } = props;

  return cards.map((description, idx) => {
    return <Card className="cards-list" description={`${description}`} key={idx}/> 
  });
};

export default CardsList;

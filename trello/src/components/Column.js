import React, {useState} from 'react';
import ColumnHeader from './ColumnHeader';
import CardsList from './CardsList';
import Button from './Button';

const Column = (props) => {
  const { header } = props;
  const defaultCards = ["card 1", "card 2"];
  const [cards, setCards] = useState(defaultCards);
  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    marginLeft: '25px'
  };
  return (
    <div className="column" style={columnStyle}>
      <ColumnHeader header={header} />
      <CardsList cards={cards} />
      <Button setCards={setCards} cards={cards}/>
    </div>
  )
}

export default Column;
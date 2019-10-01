import React from "react";

const Button = (props) => {
  let { setCards, cards } = props;
  const handleOnClick = () => {
    let userInput = window.prompt('Enter Card Description')
    const newCards = [...cards];
    newCards.push(userInput);
    setCards(newCards);
  }
  return (
    <button onClick={handleOnClick}>+ Add a card</button>
  )
};

export default Button;

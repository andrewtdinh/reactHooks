import React from "react";

const Card = (props) => {
  const { description = "card desc" } = props;
  return <div>{description}</div>;
};

export default Card;

import React from 'react';

const ColumnHeader = (props) => {
  const { header } = props;
  const headerStyle = {
    width: '100px'
  };
  return (
    <div className="column-header">{header}</div>
  )
}

export default ColumnHeader;
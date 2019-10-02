import React, { useState } from 'react';
import axios from 'axios';

const ResourceList = (props) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${props.resource}`);

    setResources(response.data);
  }
  
  return (<div>{resources.length}</div>)
}

export default ResourceList;
import React from React;

const ResourceList = ({ resource }) => {

  const resources = useResources(resource);

  return (
    resources.map((record) => (
      <li key={record.id}>{record.title}</li>
    ))
  )
}

export default ResourceList;
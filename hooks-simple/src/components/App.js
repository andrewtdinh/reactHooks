import React, { useState } from 'react';

const App = () => {
  const [resource, setResource] = useState('posts')

  return (
    <div>
      <div>
        <button onClick={() => setResource('Posts')}>Posts</button>
        <button onClick={() => setResource('Todos')}>Todos</button>
      </div>
      {resource}
    </div>
  )
}

export default App;
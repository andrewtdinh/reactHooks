import React from 'react';
import { useState } from 'react';

class App extends React.Component {

  render() {
    const [resource, setResource] = useState('posts')
    return (
      <div>
        <div>
          <button onClick={() => setResource({ resource: 'posts'})}>Posts</button>
          <button onClick={() => setResource({ resource: 'todos'})}>Todos</button>
        </div>
        {resource}
      </div>
    )
  }
}

export default App;
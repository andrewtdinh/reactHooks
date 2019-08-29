import React, { useState } from "react";

const App = () => {
  const SNIPPETS = [
    'Bears, beets, battlestar galactica',
    "What's Forrest Gump's password? 1Forrest1",
    'Where do programmers like to hangout? The Foo Bar'
  ];
  const [snippet, setSnippet] = useState('');
  const [userText, setUserText] = useState('');
  const [gameState, setGameState] = useState({});

  const updateUserText = event => {
    setUserText(event.target.value);

    if (event.target.value === snippet) {
      setGameState({
        ...gameState,
        victory: true,
        endTime: new Date().getTime() - gameState.startTime,
      })
    }
  }

  const chooseSnippet = snippetIndex => () => {
    console.log("setSnippet", snippetIndex);
    setSnippet(SNIPPETS[snippetIndex]);
    setGameState({
      ...gameState,
      startTime: new Date().getTime(),
    })
  };

  return (
    <div>
      <h2>Type Race</h2>
      <hr />
      <h3>Snippet</h3>
      {snippet}
      <input value={userText} onChange={updateUserText} />
      <hr />
      {SNIPPETS.map((SNIPPET, index) => (
        <button onClick={chooseSnippet(index)} key={index}>
          {SNIPPET.substring(0, 10)}...
        </button>
      ))}
    </div>
  );
};

export default App;

import React from 'react';
import './App.css';

const noJSX = React.createElement('h1', null, 'I do not use JSX')

function App() {
  return (
    <>
    {noJSX}
    </>
  );
}

export default App;

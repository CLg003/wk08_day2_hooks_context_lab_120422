import { useState } from 'react';
import MainPage from './pages/MainPage';
import { useToggle } from './hooks/hooks';

function App() {

  let {chosenState, handleToggle} = useToggle(false);

  return (
    <div className={chosenState ? "dark" : "light"}>
      <button onClick={handleToggle}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;

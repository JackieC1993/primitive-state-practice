// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [isSelected, setIsSelected] = useState(false);

//   const handleClick = () => {
//     setIsSelected(!isSelected);
//   };

//   return (
//     <div className={`container ${isSelected ? "selected" : ""}`}>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Box from './Box';

const App = () => {
  return (
    <div className="app">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
};

export default App;
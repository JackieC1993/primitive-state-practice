// import React, { useState } from 'react';
// import './Box.css';

// const Box = () => {
//   const [isSelected, setIsSelected] = useState(false);
//   const [colorIndex, setColorIndex] = useState(0);

//   const colors = ['#007bff', '#ff0000']; // blue and red

//   const handleClick = () => {
//     setIsSelected(!isSelected);
//     setColorIndex((colorIndex + 1) % colors.length);
//   };

//   return (
//     <div
//       className={`box ${isSelected ? `selected-${colors[colorIndex]}` : ''}`}
//       onClick={handleClick}
//     />
//   );
// };

// export default Box;

// import React, { useState } from 'react';
// import './Box.css';

// const Box = () => {
//   const [isSelected, setIsSelected] = useState(false);
//   const [colorIndex, setColorIndex] = useState(0);

//   const colors = ['#007bff', '#ff0000']; // blue and red

//   const handleClick = () => {
//     setIsSelected(!isSelected);
//     setColorIndex((colorIndex + 1) % colors.length);
//   };

//   return (
//     <div
//       className={`box ${isSelected ? 'selected' : ''}`}
//       style={{
//         backgroundColor: isSelected ? colors[colorIndex] : '#fff',
//       }}
//       onClick={handleClick}
//     />
//   );
// };

// export default Box;
import React, { useState } from 'react';
import './Box.css';

const Box = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['#007bff', '#ff0000']; // blue and red

  const handleClick = () => {
    setIsSelected(!isSelected);
    setColorIndex((colorIndex + 1) % 2);
  };

  return (
    <div
      className={`box ${isSelected ? 'selected' : ''}`}
      style={{
        backgroundColor: isSelected ? colors[colorIndex] : '#0000ff',
      }}
      onClick={handleClick}
    />
  );
};

export default Box;

import React from 'react';
import Button from './components/common/button/button';

function App() {
  const handleClick = () => {
    alert('버튼이 클릭되었습니다!');
  };
  return (
    <div>
      <Button
        buttonStyle="plusAdd"
        buttonAble="Enabled-plusAdd"
        onClick={handleClick}
      >
        Enabled
      </Button>
      <Button
        buttonStyle="Primary"
        buttonSize="Largest"
        buttonAble="enabled-Primary"
        onClick={handleClick}
      >
        Enabled
      </Button>
    </div>
  );
}

export default App;

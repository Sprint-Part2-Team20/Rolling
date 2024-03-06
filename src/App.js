import React from 'react';
import Button from './components/common/Button/index';

function App() {
  const buttonTest1 = {
    display: 'flex',
    gap: '20px',
  };
  const buttonTest2 = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    margin: '20px',
  };

  const handleClick = () => {
    alert('버튼이 클릭되었습니다!');
  };
  return (
    <div style={buttonTest1}>
      <div style={buttonTest2}>
        <Button
          buttonStyle="Primary"
          buttonAble="enabled-Primary"
          onClick={handleClick}
        >
          Enabled
        </Button>
        <Button
          buttonStyle="Primary"
          buttonAble="disabled-Primary"
          onClick={handleClick}
        >
          Disabled
        </Button>
        <Button
          buttonStyle="Primary"
          buttonAble="hover-Primary"
          onClick={handleClick}
        >
          Hover
        </Button>
        <Button
          buttonStyle="Primary"
          buttonAble="pressed-Primary"
          onClick={handleClick}
        >
          Pressed
        </Button>
        <Button
          buttonStyle="Primary"
          buttonAble="focus-Primary"
          onClick={handleClick}
        >
          Focus
        </Button>
      </div>
      <div style={buttonTest2}>
        <Button
          buttonStyle="Primary"
          buttonAble="enabled-Primary"
          buttonSize="large"
          onClick={handleClick}
        >
          Enabled
        </Button>
        <Button
          buttonStyle="Primary"
          buttonAble="disabled-Primary"
          buttonSize="large"
          onClick={handleClick}
        >
          Disabled
        </Button>
        <Button
          buttonStyle="Primary"
          buttonAble="hover-Primary"
          buttonSize="large"
          onClick={handleClick}
        >
          Hover
        </Button>
        <Button
          buttonStyle="Primary"
          buttonAble="pressed-Primary"
          buttonSize="large"
          onClick={handleClick}
        >
          Pressed
        </Button>
        <Button
          buttonStyle="Primary"
          buttonAble="focus-Primary"
          buttonSize="large"
          onClick={handleClick}
        >
          Focus
        </Button>
      </div>
      <div style={buttonTest2}>
        <Button
          buttonStyle="Secondary"
          buttonAble="enabled-Secondary"
          onClick={handleClick}
        >
          Enabled
        </Button>
        <Button
          buttonStyle="Secondary"
          buttonAble="disabled-Secondary"
          onClick={handleClick}
        >
          Disabled
        </Button>
        <Button
          buttonStyle="Secondary"
          buttonAble="hover-Secondary"
          onClick={handleClick}
        >
          Hover
        </Button>
        <Button
          buttonStyle="Secondary"
          buttonAble="pressed-Secondary"
          onClick={handleClick}
        >
          Pressed
        </Button>
        <Button
          buttonStyle="Secondary"
          buttonAble="focus-Secondary"
          onClick={handleClick}
        >
          Focus
        </Button>
      </div>
      <div style={buttonTest2}>
        <Button
          buttonStyle="PulsAdd"
          buttonAble="enabled-PulsAdd"
          onClick={handleClick}
        />
        <Button
          buttonStyle="PulsAdd"
          buttonAble="disabled-PulsAdd"
          onClick={handleClick}
        />
        <Button
          buttonStyle="PulsAdd"
          buttonAble="hover-PulsAdd"
          onClick={handleClick}
        />
        <Button
          buttonStyle="PulsAdd"
          buttonAble="pressed-PulsAdd"
          onClick={handleClick}
        />
        <Button
          buttonStyle="PulsAdd"
          buttonAble="focus-PulsAdd"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;

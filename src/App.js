/*
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import CardCreatePage from './pages/CardCreatePage/CardCreatePage';
import PostPage from './pages/PostPage/PostPage';
import PostEditPage from './pages/PostEditPage/PostEditPage';
import MessageCreatePage from './pages/MessageCreatePage/MessageCreatePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post" element={<CardCreatePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/post/:id/edit" element={<PostEditPage />} />
        <Route path="/post/:id/message" element={<MessageCreatePage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/
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
          buttonStyle="PlusAdd"
          buttonAble="enabled-PlusAdd"
          onClick={handleClick}
        />
        <Button
          buttonStyle="PlusAdd"
          buttonAble="disabled-PlusAdd"
          onClick={handleClick}
        />
        <Button
          buttonStyle="PlusAdd"
          buttonAble="hover-PlusAdd"
          onClick={handleClick}
        />
        <Button
          buttonStyle="PlusAdd"
          buttonAble="pressed-PlusAdd"
          onClick={handleClick}
        />
        <Button
          buttonStyle="PlusAdd"
          buttonAble="focus-PlusAdd"
          onClick={handleClick}
        />
      </div>
      <div style={buttonTest2}>
        <Button
          buttonStyle="TrashCan"
          buttonAble="enabled-TrashCan"
          onClick={handleClick}
        />
        <Button
          buttonStyle="TrashCan"
          buttonAble="disabled-TrashCan"
          onClick={handleClick}
        />
        <Button
          buttonStyle="TrashCan"
          buttonAble="hover-TrashCan"
          onClick={handleClick}
        />
        <Button
          buttonStyle="TrashCan"
          buttonAble="pressed-TrashCan"
          onClick={handleClick}
        />
        <Button
          buttonStyle="TrashCan"
          buttonAble="focus-TrashCan"
          onClick={handleClick}
        />
      </div>
      <div style={buttonTest2}>
        <Button
          buttonStyle="Outlined"
          buttonAble="enabled-Outlined"
          onClick={handleClick}
        >
          Enabled
        </Button>
        <Button
          buttonStyle="Outlined"
          buttonAble="disabled-Outlined"
          onClick={handleClick}
        >
          Disabled
        </Button>
        <Button
          buttonStyle="Outlined"
          buttonAble="hover-Outlined"
          onClick={handleClick}
        >
          Hover
        </Button>
        <Button
          buttonStyle="Outlined"
          buttonAble="pressed-Outlined-gray"
          onClick={handleClick}
        >
          Pressed
        </Button>
        <Button
          buttonStyle="Outlined"
          buttonAble="pressed-Outlined-white"
          onClick={handleClick}
        >
          Pressed
        </Button>
      </div>
      <div style={buttonTest2}>
        <Button
          buttonStyle="Outlined"
          buttonAble="enabled-Outlined"
          buttonSize="large"
          onClick={handleClick}
        >
          Enabled
        </Button>
        <Button
          buttonStyle="Outlined"
          buttonAble="disabled-Outlined"
          buttonSize="large"
          onClick={handleClick}
        >
          Disabled
        </Button>
        <Button
          buttonStyle="Outlined"
          buttonAble="disabled-Outlined"
          buttonSize="large"
          onClick={handleClick}
        >
          Disabled
        </Button>
        <Button
          buttonStyle="Outlined"
          buttonAble="hover-Outlined"
          buttonSize="large"
          onClick={handleClick}
        >
          Hover
        </Button>
        <Button
          buttonStyle="Outlined"
          buttonAble="pressed-Outlined-gray"
          buttonSize="large"
          onClick={handleClick}
        >
          Pressed
        </Button>
        <Button
          buttonStyle="Outlined"
          buttonAble="focus-Outlined"
          buttonSize="large"
          onClick={handleClick}
        >
          focus
        </Button>
      </div>
      <div style={buttonTest2}>
        <Button
          buttonStyle="Outlined"
          buttonAble="enabled-Outlined"
          buttonSize="large-icon"
          onClick={handleClick}
        >
          Enabled
        </Button>
        <Button
          buttonStyle="Outlined"
          buttonAble="disabled-Outlined"
          buttonSize="large-icon"
          onClick={handleClick}
        >
          Disabled
        </Button>
        <Button
          buttonStyle="Outlined"
          buttonAble="disabled-Outlined"
          buttonSize="large-icon"
          onClick={handleClick}
        >
          Disabled
        </Button>
        <Button
          buttonStyle="Outlined"
          buttonAble="hover-Outlined"
          buttonSize="large-icon"
          onClick={handleClick}
        >
          Hover
        </Button>
        <Button
          buttonStyle="Outlined"
          buttonAble="pressed-Outlined-gray"
          buttonSize="large-icon"
          onClick={handleClick}
        >
          Pressed
        </Button>
        <Button
          buttonStyle="Outlined"
          buttonAble="focus-Outlined"
          buttonSize="large-icon"
          onClick={handleClick}
        >
          focus
        </Button>
      </div>
    </div>
  );
}
export default App;

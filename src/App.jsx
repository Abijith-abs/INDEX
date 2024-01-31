import React, { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import './index.css';
import imagecer001 from "./images/cer001.jpg"
import imagecer002 from "./images/cer002.jpg"
import imagecer003 from "./images/cer003.jpg"

const App = () => {
  const [image, setImage] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const searchInput = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("/src/images/" + searchInput.current.value + ".jpg");
    setImage("/src/images/" + searchInput.current.value + ".jpg");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <h1 className='title'>Certificate Search</h1>
      <div className='search-section'>
        <Form onSubmit={handleSearch}>
          <Form.Control
            type='search'
            placeholder='Enter the certificate no.'
            className={`search-input ${darkMode ? 'dark-input' : ''}`}
            ref={searchInput}
          />
          <Button variant="primary" onClick={handleSearch}>Search</Button>
        </Form>

        {image && (
          <div className='images'>
            <img
              src={image}
              alt={"image"}
              className='image'
            />
          </div>
        )}
      </div>

      <div className='dark-mode-toggle'>
        <label className='switch'>
          <input type='checkbox' checked={darkMode} onChange={toggleDarkMode} />
          <span className='slider round'></span>
        </label>
        <p className='dark-mode-label'>{darkMode ? 'Dark Mode' : 'Light Mode'}</p>
      </div>
    </div>
  );
};

export default App;

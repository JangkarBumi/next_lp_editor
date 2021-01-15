import React, { useState } from 'react';

const LandingPage = () => {
  const [text, setText] = useState('Title Of my Landing Page');
  return (
    <div>
      <label>Choose a Landing Page:</label>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      <b />
      <input type="submit" value="Submit" />

      <h1>Title Of my Landing Page</h1>
      <input
        className="editor"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default LandingPage;

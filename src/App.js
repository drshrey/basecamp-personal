import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <p style={{fontSize: 25, fontWeight: 500 }}> Basecamp </p>
      <p style={{ lineLength: 2, fontSize: 14 }}> 
        Hi, I'm Shreyas. I live in San Francisco where I work on infrastructure stuff at Checkr. Send me a message at shreyas[dot]jaganmohan[at]gmail[dot]com if you want to talk/ hang and I'll get back asap.
      </p>
      <p> 
        <a href="https://twitter.com/shreyasjagan">
          <b>twitter</b> 
        </a>
          <p className="Bio">
            View my participation in the ideas exchange.
          </p>
      </p>
      <p> 
        <b><a href="https://drshrey.substack.com">substack</a></b>
        <p className="Bio">Read essays about books I've read, concepts I've encountered, projects I've built and the things I'm inspired by.</p>
      </p>
      <p> <a href="https://github.com/drshrey"><b>github</b></a></p>
      <p className="Bio">
        Take a look at what I've built and if you're into it, make a PR!
      </p>
    </div>
  );
}

export default App;

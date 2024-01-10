import './App.css';
import React from 'react';

function ID (props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <figure className='picture-container'>
        <img src={props.imgURL} alt="profile img" class="picture"/>
        <figcaption class="picture-caption">**Not an accurate reflection of my appearance</figcaption>
      </figure>
    </div>
  );
}

function Hobbies(props) {
  return (  
    <div>
      <h3>Hobbies</h3>
      <div className='hobbyList'>
        <ul>
          <li>{props.hobbyList[0]}</li>
          <li>{props.hobbyList[1]}</li>
          <li>{props.hobbyList[2]}</li>
        </ul>
      </div>
    </div>
  );
}

function App({data}) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {<ID name={data.name} imgURL={data.imgURL}/>}
          {<Hobbies hobbyList={data.hobbyList}/>}
        </p>
      </header>
    </div>
  );
}

export default App;

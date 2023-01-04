import React from 'react';
import './App.css';
import img01 from './assets/images/img01.png';
import img02 from './assets/images/img02.gif';
import img03 from './assets/images/img03.jpg';
import img04 from './assets/images/img04.png';
import img05 from './assets/images/img05.gif';
import img06 from './assets/images/img06.jpg';
import img07 from './assets/images/img07.png';
import img08 from './assets/images/img08.png';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1> 이미지 최적화 테스트 - image-minimizer-webpack-plugin </h1>
        <img src={img01} />
        <img src={img02} />
        <img src={img03} />
        <img src={img04} />
        <img src={img05} />
        <img src={img06} />
        <img src={img07} />
        <img src={img08} />
      </div>
    );
  }
}

export default App;
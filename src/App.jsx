import React from 'react';
import './App.css';
import img01 from '../public/assets/images/png/img01.png';
import img02 from '../public/assets/images/gif/img02.gif';
import img03 from '../public/assets/images/jpg/img03.jpg';
import img04 from '../public/assets/images/png/img04.png';
import img05 from '../public/assets/images/gif/img05.gif';
import img06 from '../public/assets/images/jpg/img06.jpg';
import img07 from '../public/assets/images/png/img07.png';
import img08 from '../public/assets/images/png/img08.png';

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
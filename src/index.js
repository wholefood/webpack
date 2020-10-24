//CommonJs spec require, export
const _ = require('lodash');
import './style.css';
import './hello.scss';
import {area, circumference} from './js/circle';
//es 모듈화의 named import
//es default import : {}없이 사용하고 이름을 마음대로 바꿀수 있다.
import cube from './js/cube';

function component() {
  let element = document.createElement('div');



  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack..d.',  area(5),circumference(5)], ' ');

  return element;
}

console.log(cube(5));



document.body.appendChild(component());
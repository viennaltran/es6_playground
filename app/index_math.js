import * as math from './math';
// {add, subtract, multiply, divide}from './math';
import {addToDom as atd} from './helpers';

console.log('Math:', math);

// addToDom('h1',`23 + 67 =${add(23,67)}`);

// addToDom('h1',`56 - 14 =${subtract(56,14)}`);

// addToDom('h1',`23 * 4 =${multiply(23,4)}`);

// addToDom('h1',`25 / 5 =${divide(25,5)}`);

atd('h1',`23 + 67 =${math.add(23,67)}`);

atd('h1',`56 - 14 =${math.subtract(56,14)}`);

atd('h1',`23 * 4 =${math.multiply(23,4)}`);

atd('h1',`25 / 5 =${math.divide(25,5)}`);


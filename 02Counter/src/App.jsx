import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { useState } from 'react'

function App() {

  // let counter = 10; // to reflect number dynamically (not hardcoded), we created this variable 
  /*
  const Add = () => {
    counter = counter + 1;
    console.log(counter);
  }
*/

// hooks are used to change things in UI.
// useState hook is used to change the state of a variable in the UI. So, let's say if we give above "add" function in onClick, then check in the console. 'counter' variable will be updated, but in UI still we will see '10' at {counter}. So, this is the problem useState hook is resolving.
//Now, we will do it through useState hook. basically, it will return 2 things in array. first one is "variable" and second one is "function". this means that whichever variable we will give in there as first argument if that variable react found in UI, it will change it's value. and what to change it's value react gave second argument as function through which we can update that variables value. See below example for more clarification.
// so, it's like if you change 'counter' variable using 'setCounter' function, then only that change will be reflected in UI. otherwise if you simply update variable without using that function(useCounter), the varible gets updated as you will see in console.log but it will not being reflected in the UI.

let [counter, setCounter] = useState(15);

const Add = () => {
  setCounter(counter + 1);
  console.log(counter);
}

/*
let [decCount, setdecCouter] = useState(15);

const Remove = () => {
  // setdecCouter(decCount - 1);
  setCounter(counter - 1);
}
*/

const Remove = () => {
  setCounter(counter - 1);
}

// Assignment : values should not go below 0 and should not go beyond 10
/*
let [count, setcount] = useState(5);

const add = () => {
  if(count < 10) setcount(count + 1);
}

const remove = () => {
  if(count > 0) setcount(count - 1);
}
*/
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={Add /*add*/}>Add Value {counter /*count*/}</button>
      <br />
      <button onClick={Remove /*remove*/} >Remove Value {counter /*count*/}</button>
      <footer>{counter}</footer>
    </>
  )
}

export default App

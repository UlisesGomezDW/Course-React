//Practice One BY: Ulises Gomez 
function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
	return( 
    <button onClick={handleClick}>+{props.increment}</button>);
}

function Display(props) {
  return (<div>{props.message}</div>);
}

function App() {
  const [counter, setCounter]= useState(42);
  const incrementCounter = () => setCounter(counter+5); 
  return (
  <div>
    <Button onClickFunction={incrementCounter} increment={5} />
      <Button onClickFunction={incrementCounter} increment={10} />
      <Button onClickFunction={incrementCounter} increment={15} />
    <Display message={counter} />
  </div>
  );
}

 / //Practice BY Ulises Gomez 

ReactDOM.render(
  <App />, 
  document.getElementById('mountNode'),
);

document.getElementById('mountNode').innerHTML = `
  <div>
    Hello HTML
    <input />
<pre>${(new Date).toLocaleTimeString()}</pre>
  </div>
`;

ReactDOM.render(
  React.createElement(
    'div', 
    null, 
    'Hello React',
  ),
  document.getElementById('mountNode2'),
);


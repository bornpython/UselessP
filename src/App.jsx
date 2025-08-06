import { useState } from 'react';

function App() {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const tossCoin = () => {
    const outcomes = ['Heads', 'Tails'];
    const random = Math.floor(Math.random() * 2);
    const newResult = outcomes[random];
    setResult(newResult);
    setHistory([newResult, ...history]);
  };

  return (
    <div style={styles.container}>
      <h1>🪙 Coin Toss</h1>
      <button onClick={tossCoin} style={styles.button}>Toss</button>
      {result && <h2>Result: {result}</h2>}
      <h3>History:</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>🎯 {item}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: '50px'
  },
  button: {
    fontSize: '18px',
    padding: '10px 20px',
    cursor: 'pointer'
  }
};

export default App;

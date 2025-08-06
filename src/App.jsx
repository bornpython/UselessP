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

      <div
        style={styles.coin}
        onClick={tossCoin}
        title="Click to toss"
      >
        🪙
      </div>

      {result && <h2>Result: {result}</h2>}

      <h3>History:</h3>
      <ul style={styles.list}>
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
    marginTop: '50px',
  },
  coin: {
    fontSize: '100px',
    cursor: 'pointer',
    margin: '20px auto',
    transition: 'transform 0.3s ease-in-out',
    userSelect: 'none',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
};

export default App;

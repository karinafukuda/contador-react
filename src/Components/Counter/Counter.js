import { useState, useEffect } from 'react';
import '../Counter/Counter.css';

function Counter() {
  const [numero, setNumero] = useState(1);
  const [botaoEstilo, setBotaoEstilo] = useState('botao-contador-ativo');

  useEffect(() => {
    document.getElementById('moeda').innerHTML = 2.0 * numero;
  }, [numero]);

  function subtrair() {
    if (numero <= 1) {
      setBotaoEstilo('botao-contador-inativo');
    }

    if (numero > 0) {
      setNumero(numero - 1);
    }
  }

  function adicionar() {
    if (numero >= 0) {
      setNumero(numero + 1);
      setBotaoEstilo('botao-contador-ativo');
    }
  }
  return (
    <div className="box-contador">
      <button onClick={subtrair} className={botaoEstilo}>
        -
      </button>
      <p>{numero}</p>
      <button onClick={adicionar} className={botaoEstilo}>
        +
      </button>
      <p>(x 2) = </p>
      <button id="moeda"></button>
    </div>
  );
}

export default Counter;

import React from 'react';
import './App.css'; // Importe seus estilos específicos do aplicativo aqui, se houver
import Quiz from './components/Quiz'; // Importe o componente principal do seu aplicativo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meu Quiz</h1>
      </header>
      <main>
        <Quiz />
      </main>
      <footer>
        <p>© 2024 Meu Quiz App</p>
      </footer>
    </div>
  );
}

export default App;

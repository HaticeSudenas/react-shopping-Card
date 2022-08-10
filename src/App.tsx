import React from 'react';
import { Container } from 'react-bootstrap';
import Dashboard from './components/root/dashboard';
import Navi from './components/navi/navi';
function App() {
  return (
    <div className="App">
      <Container>
        <Navi/>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;

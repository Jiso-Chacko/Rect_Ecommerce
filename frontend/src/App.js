import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap'
import Homescreen from "./Screens/Homescreen";
import Productscreen from "./Screens/Productscreen";

function App() {
  return (
  <Router >
      <Header />
    <main>
      <Container>
    <Routes>
        <Route path='/'element={<Homescreen />} exact/>
        <Route path='/producs/:id'element={<Productscreen />} />
    </Routes>
     
      </Container>
    </main>
    <Footer />
  </Router>
  );
}

export default App;

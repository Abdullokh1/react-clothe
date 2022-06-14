import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { ShopProvider } from './Store/Store/ShopContext';
import {Routes, Route,} from "react-router-dom";
import Products from './Products';
import Card from './Card';
import './App.css'

function App() {
  return (
    <ShopProvider>
      <Wrapper>
        <h1>Add to card</h1>
      <LinksWrapper>
        <Link to='/'>Home</Link>
        <Link to='/Card'>Card</Link>
      </LinksWrapper>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/Card' element={<Card/>}/>
      </Routes>
      </Wrapper>
    </ShopProvider>
  );
}

export default App;


const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;
  display: grid;
  row-gap: 20px;
  justify-content: center;

`
const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #bb7250;

    :hover {
      color: #bb7250;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;

import React, { useState} from 'react';
import styled from 'styled-components';
 

const P = styled.p`
margin-top: 15px;
margin-left: 10px;

`;
const Input = styled.input`
  margin-top: 5px;
  margin-left: 30px;
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  border:1px solid #000;
`;

function App() {


  const [conta, setConta] = useState('');
  const [Pct, setPct] = useState(10);

  return (
    <>

      <P> Digite o Valor da Conta</P>
      <Input type="number" value={conta} onChange={(e)=>setConta(parseFloat(e.target.value))} />
      <br></br>
      <P>Digite a porcentagem da Gorjeta </P>
      <Input type="number" value={Pct} onChange={(e)=>setPct(parseFloat(e.target.value))} />
      <br></br>


      {conta > 0 &&
      <div>
        <h1> Sub-total da conta: $ {conta} </h1>
        <h1>Gorjeta ({Pct}%): R$ {(Pct/100) * conta}</h1>
        <h3>Total: R$ {conta + ((Pct/100) * conta)}</h3>
        </div>

      }
      
      
     

      
 


    </>
  );
}

export default App;
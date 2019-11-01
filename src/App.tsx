import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IChuck } from './types/chuck';
import ChuckComponent from './components/ChuckComponent';
import './App.css';

const Header = styled.div`
  background-color: #454545;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.div`
  background-color: red;
  animation: ${rotate360} infinite 1s linear;
  height: 80px;
  width: 80px;
`;

const App: React.FunctionComponent = () => {
  const [data, setData] = useState<IChuck>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://api.chucknorris.io/jokes/random',);
      const myJson = await result.json();
      setData(myJson)
    };
    fetchData();
  }, []);

  return (

      <div className="App">
        <Header className="App-header">
          {!data ? <AppLogo id="loader" /> : <ChuckComponent data={data} />}
        </Header>
      </div>
  );
};

export default App;

import React, {FunctionComponent} from 'react';
import { IChuck } from '../types/chuck';

interface IProps {
  data: Partial<IChuck>
}

const ChuckComponent: FunctionComponent<IProps> = ({ data }) => {
  return (
    <>
      {data && <img src={data.icon_url} className="App-logo" alt="logo"/>}
      <p>
        {data && data.value}
      </p>
    </>
  )
};

export default ChuckComponent;
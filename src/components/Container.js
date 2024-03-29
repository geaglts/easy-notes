import React, { useContext } from 'react';
import { Context } from '../Context';
import { APP_NAME } from '@constants';

import '../styles/Components/Container.scss';

function Container(props) {
  const { darkTheme } = useContext(Context);

  return (
    <main style={{ backgroundColor: darkTheme ? '#1c1b22' : '#fff' }}>
      <div className="Container">
        <h1 className="Container__Title">{APP_NAME}</h1>
        {props.children}
      </div>
    </main>
  );
}

export default Container;

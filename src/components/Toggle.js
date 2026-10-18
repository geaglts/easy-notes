import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Context } from '../Context';
import '../styles/Components/Toggle.scss';

function Toggle(props) {
  const { darkTheme } = useContext(Context);
  return (
    <div
      className="Toggle"
      onClick={props.onClick}
      style={{ backgroundColor: darkTheme ? '#2c2c33' : '#2c2c33' }}
    >
      <div
        className="Toggle__Circle"
        style={props.status ? { transform: 'translateX(25px)' } : {}}
      >
        {darkTheme ? (
          <FaMoon color="white" size={14} />
        ) : (
          <FaSun color="white" size={14} />
        )}
      </div>
    </div>
  );
}

export { Toggle };

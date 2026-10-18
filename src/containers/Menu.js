import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import '@styles/Containers/Menu.scss';

import { Context } from '../Context';
import { APP_NAME } from '@constants';

import { Toggle } from '../components/Toggle';

function Menu() {
  const navigate = useNavigate();
  const [fullMenu, setFullMenu] = useState(false);
  const { darkTheme, changeTheme, hasUser, changeUserStatus } = useContext(Context);

  const theme = darkTheme ? ' dark' : ' white';

  const handleMenu = () => {
    setFullMenu(!fullMenu);
  };

  const onLogout = () => {
    changeUserStatus();
    setFullMenu(false);
    navigate('/');
  };

  if (fullMenu) {
    return (
      <nav className={`FullMenu${theme}`}>
        <button className="close-button" onClick={handleMenu}>
          X
        </button>
        <h1>{APP_NAME}</h1>
        <button className="change-theme">
          <Toggle onClick={changeTheme} status={darkTheme} />
        </button>
        <ul>
          <li>
            <Link className="link" to="/fast" onClick={handleMenu}>
              Nota Rapida
            </Link>
          </li>
          {hasUser && (
            <li>
              <button className="link" onClick={onLogout}>
                Cerrar sesión
              </button>
            </li>
          )}
        </ul>
        <div>
          {!hasUser && (
            <>
              <Link onClick={handleMenu} to="/login" className="user-status">
                iniciar sesion
              </Link>
              <Link onClick={handleMenu} to="/register" className="user-status">
                registrate
              </Link>
            </>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className={'menu__container' + theme}>
      <Link to="/" className="menu__container--title">
        {APP_NAME}
      </Link>
      <ul className="menu__list">
        <li className="menu__list--item">
          <Link to="/fast">Nota rapida</Link>
        </li>
        <li className="menu__list--item">
          <Toggle onClick={changeTheme} status={darkTheme} />
        </li>
        {hasUser && (
          <li className="menu__list--item">
            <button className="button" onClick={onLogout}>
              Cerrar sesión
            </button>
          </li>
        )}
        <li className="menu__list--item menu__list--button">
          <button className="show_menu" onClick={handleMenu}>
            <BiMenu />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export { Menu };

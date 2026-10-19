import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import '@styles/Containers/Menu.scss';

import { Context } from '../Context';
import { APP_NAME } from '@constants';

import { Toggle } from '../components/Toggle';

function Menu() {
  const navigate = useNavigate();
  const [fullMenu, setFullMenu] = useState(false);
  const [closing, setClosing] = useState(false);
  const { darkTheme, changeTheme, hasUser, changeUserStatus } = useContext(Context);

  const theme = darkTheme ? ' dark' : ' white';

  useEffect(() => {
    document.body.style.overflow = fullMenu ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [fullMenu]);

  const closeMenu = () => {
    setClosing(true);
  };

  const handleAnimationEnd = (e) => {
    if (e.target != e.currentTarget) return;
    if (closing) {
      setFullMenu(false);
      setClosing(false);
    }
  };

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
      <nav
        className={`FullMenu${theme}${closing ? ' closing' : ''}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="fullmenu-header">
          <h1>{APP_NAME}</h1>
          <div className="fullmenu-header-right">
            <li>
              <div className="menu-item">
                <Toggle onClick={changeTheme} status={darkTheme} />
              </div>
            </li>
            <li>
              <button className="close-button menu-item" onClick={closeMenu}>
                X
              </button>
            </li>
          </div>
        </div>
        <ul>
          <li>
            <Link className="link menu-item" to="/fast" onClick={closeMenu}>
              ⚡Nota Rapida
            </Link>
          </li>
          {hasUser && (
            <li>
              <button className="link menu-item" onClick={onLogout}>
                Cerrar sesión
              </button>
            </li>
          )}
        </ul>
        <ul className="bottom-options">
          {!hasUser && (
            <>
              <li>
                <Link
                  onClick={handleMenu}
                  to="/login"
                  className="user-status secondary-full menu-item"
                >
                  Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleMenu}
                  to="/register"
                  className="user-status secondary-outline menu-item"
                >
                  Registrate
                </Link>
              </li>
            </>
          )}
        </ul>
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

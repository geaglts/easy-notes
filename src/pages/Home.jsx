import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Context } from '../Context';
import { Helmet } from 'react-helmet';

import { APP_NAME } from '@constants';

import TakingNotesImage from '../assets/images/taking_notes.svg';

import '../styles/pages/Home.scss';

function Home() {
  const { darkTheme, hasUser } = useContext(Context);

  if (hasUser) return <Navigate to="/dashboard" />;

  return (
    <>
      <Helmet>
        <title>{APP_NAME} | Administra tus notas de manera segura</title>
      </Helmet>
      <main
        className="HomePage__Page"
        style={{ backgroundColor: darkTheme ? '#141414' : '#f8f8f8' }}
      >
        <div className="Introduction__Section">
          <section>
            <h1>
              <span style={{ color: darkTheme ? '#fff' : '#475ded' }}>
                Bienvenido a{' '}
              </span>
              {APP_NAME}
            </h1>
            <p style={{ color: darkTheme ? '#fff' : '#1c1b22' }}>
              Crea y administra tus notas de forma rapida y sencilla.
            </p>
            <Link to="/fast">¡Crear mi primera nota!</Link>
          </section>
          <section>
            <img src={TakingNotesImage} alt="Persona tomando notas en easy notes" />
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;

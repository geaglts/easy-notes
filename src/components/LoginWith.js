import React from 'react';
import styles from '@styles/Components/LoginWith.module.scss';
import classnames from '@utils/classnames';

const LoginWith = ({ to, provider, providerLogo, titleStyle }) => {
  return (
    <a className={classnames(styles.provider)} href={to}>
      <div className={styles.container}>
        <img className={styles.providerLogo} src={providerLogo} />
        <span className={titleStyle}>Continuar con {provider}</span>
      </div>
    </a>
  );
};

export default LoginWith;

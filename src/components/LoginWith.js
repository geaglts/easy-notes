import React from 'react';
import styles from '@styles/Components/LoginWith.module.scss';
import classnames from '@utils/classnames';

const LoginWith = ({ to, provider, providerLogo, titleStyle }) => {
  return (
    <div className={styles.container}>
      <img className={styles.providerLogo} src={providerLogo} />
      <a className={classnames(styles.provider, titleStyle)} href={to}>
        Continuar con {provider}
      </a>
    </div>
  );
};

export default LoginWith;

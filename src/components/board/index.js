import React from 'react';
import styles from './styles';

export default (props) => {
  return (
    <div className={ styles.container }>
      { props.children }
    </div>
  );
};
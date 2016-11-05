import React from 'react';
import Grid from 'react-material-grid';
import styles from './styles';

export default (props) => {
  return (
    <Grid layout='row' className={ styles.header }>
      { props.children }
    </Grid>
  );
};
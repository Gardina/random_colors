import React from 'react';
import styles from './styles';
import Grid from 'react-material-grid';

export default (props) => {
  return (
    <Grid
      layout='column'
      className={ styles['layout'] }
      layoutAlign='start center'>
      <Grid className={ styles['layout-box'] }>
        { props.children }
      </Grid>
    </Grid>
  );
};

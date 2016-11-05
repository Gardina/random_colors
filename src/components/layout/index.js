import React from 'react';
import styles from './styles';
import Grid from 'react-material-grid';

export default (props) => {
  return (
    <Grid layout='row' layoutAlign='end center' className={styles.grid}>
        { props.children }
    </Grid>
  );
};

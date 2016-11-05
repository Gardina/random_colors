import React from 'react';
import Grid from 'react-material-grid'
import randomColor from 'random-color'
import randomWords from 'random-words'

import styles from './styles';


class RandomColor extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      style: {color: 'red',
               backgroundColor: 'black'},
      text: "Click Me"   
    };
  }	

  onChangeStyle() {
  	console.log('color changed');
     const color = randomColor();
     const newcolor = randomColor();
     var randColor = color.hexString();
     var newColor = newcolor.hexString();
     const newWord = randomWords({ exactly: 5, join: ' ' });
     this.setState({style: {color: newColor,
                             backgroundColor: randColor },
                            text: newWord}); 
   }

  render() {
   return (
    <Grid flexSm={ 100 } flex={ 100 } 
      style={ this.state.style }
      onClick={this.onChangeStyle.bind(this)}
      className={styles['box']} >
         {this.state.text}
    </Grid>
  );
  }
};

export default RandomColor; 
import React from 'react';
import Grid from 'react-material-grid'
import randomColor from 'random-color'
import styles from './styles'

class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      style1: {color: 'red',
              backgroundColor: 'black'},
      style2: {color: 'black',
              backgroundColor: 'red'},        
  
    };
  }

   onChangeStyle1() {
     const color = randomColor();
     const newcolor = randomColor();
     var randColor = color.hexString();
     var newColor = newcolor.hexString();
     this.setState({style1: {color: newColor,
                             backgroundColor: randColor }}); 
   }


  onChangeStyle2() {
     const color = randomColor();
     const newcolor = randomColor();
     var randColor = color.hexString();
     var newColor = newcolor.hexString();
     this.setState({style2: {color: newColor,
                             backgroundColor: randColor }}); 
   }

   render() {
      return (
      	 <Grid layout='column' layoutAlign='center center' className={styles.grid}>
      	   <Grid flexSm={ 100 } flex={ 50 } 
           style={ this.state.style1 }
           onClick={this.onChangeStyle1.bind(this)} >
             Click Me
           </Grid>
           <Grid flexSm={ 100 } flex={ 50 } 
           style={ this.state.style2}
           onClick={this.onChangeStyle2.bind(this)}>
            Click Me
           </Grid>
      	 </Grid>
      );
   }
}

export default App;
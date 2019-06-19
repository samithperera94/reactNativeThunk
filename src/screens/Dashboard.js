
import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList,ActivityIndicator,
  BackHandler
} from 'react-native';
import {fetchData} from '../redux/actions/libraryActions';
import {connect} from 'react-redux';
import ListItem from '../components/ListItem';
import Header from '../components/common/Header';

class App extends Component {

  static navigationOptions = {
    headerTitle: <Header headerText='Tech Stack'/>,
    headerLeft: null
  };

    constructor(props){
        super(props)
    }

    componentWillMount(){
      
      BackHandler.addEventListener('hardwareBackPress', this.backPressed);
      
     
     }

     
    componentDidMount(){
        this.props.fetchData();
        
    }  

    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
   }

   backPressed = () => {
     BackHandler.exitApp();
      
  }



    renderRow({item}){
      return  <ListItem library={item} /> ;
     // return(<Text style={{color:'#2e42dd'}}>{item.gender}</Text>) ;
      //console.log(item)
    }

  render() {
      const {container} = styles;
      if(this.props.library.isFetching){
        
       <ActivityIndicator size="large" color="#0000ff" />
        
      }
    return (
      <View style={container}>
        <FlatList
                data={this.props.library.libraryData}
                
                renderItem={this.renderRow}
                keyExtractor={(item, index) => item.title}
                />
           
      </View>
    );
  }
}

const mapStateToProps=(state)=>{
    return{
      library : state.library,
     
    }
    
}

export default connect (mapStateToProps,{fetchData})(App)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  
});

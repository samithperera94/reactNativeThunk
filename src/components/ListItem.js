import React, {Component} from 'react';
import CardSection from '../components/common/CardSection';
import { StyleSheet, Text, View,TouchableWithoutFeedback,LayoutAnimation} from 'react-native'; 
import {selectLibrary} from '../redux/actions/libraryActions';
import {connect} from 'react-redux';

class ListItem extends Component{
    componentWillUpdate(){
        LayoutAnimation.spring();
    }


    renderDescription(){
        if(this.props.library.title==this.props.selectedLibraryId){
            return(
                <Text style={{flex:1,paddingLeft:10}} >{this.props.library.description}</Text>
            );
        }
    }
    render(){
        const {title} = styles;
       return(
           <TouchableWithoutFeedback onPress={()=>this.props.selectLibrary(this.props.library.title)} 
           //style={button}
           >
            <View>
           
                <CardSection>
                    <Text style={title}>
                    {this.props.library.title}
                </Text>

                </CardSection>

                {this.renderDescription()}
            </View>
           </TouchableWithoutFeedback>
           
       );
        
    }
}



const mapStateToProps=(state)=>{
    return{
      selectedLibraryId : state.library.selectedId
    }
    
}

export default connect (mapStateToProps,{selectLibrary})(ListItem);

const styles = StyleSheet.create({
    title: {
      fontSize:20,
      paddingLeft: 15,
      color:'#2e42dd'
    },
    
    
  });
import React, { Component } from 'react';
import { Text } from 'react-native';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection';
import Input from '../components/common/Input';
import Header from '../components/common/Header';

import {emailChanged,passwordChanged,loginUser} from '../redux/actions';
import {connect} from 'react-redux';




class Login extends Component {
  
  static navigationOptions = {
    headerTitle: <Header headerText='Authentication'/>,
  };

  constructor(props){
    super(props);
    this.state = {
      error:null
    }
  }

  componentWillReceiveProps(nextProps){

    if(nextProps.auth.isLoggedIn){
      this.props.navigation.navigate('Dash');
    
    
    }
    
    }

    componentDidMount(){

      if(this.props.auth.isLoggedIn){
      
        this.props.navigation.navigate('Dash');
      
      }
      
      }

      validate(email,password){
        
        var error='';
        if (email==='' && password==='' ){
          error='Please enter details '
          
        }
        else if(email===''){
         error='Please enter email '
        }
        else if(password===''){
          error='Please enter password '
        }
        
        
        return error;
      }

     

      onPressButton = () => {
        var Err = this.validate(this.props.auth.email,this.props.auth.password);
        

        if(Err){
          this.setState({error:Err})
        }else{
          this.props.loginUser();
        }
        

        
        
        
        

        

        
        
        }  


  renderButton() {
  
    return (
        <Button onPress={this.print}>
          Log in
        </Button>
    )
  }

  render() {
    return (
        <Card>
          <CardSection>
            <Input label="Email"
                   placeholder="user@gmail.com"
                  
                   onChangeText={email => this.props.emailChanged(email)}
            />
          </CardSection>
          <CardSection>
            <Input label="Password"
                   secureTextEntry
                   placeholder="password"
                   
                   onChangeText={password => this.props.passwordChanged(password)}/>
          </CardSection>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
          <CardSection>
          <Button 
          
          onPress={
          
          this.onPressButton
          }
          >
          Log in
        </Button>
          </CardSection>
        </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps=(state)=>{
  return{
    auth : state.auth,
   
  }
  
}

export default connect (mapStateToProps,{emailChanged,passwordChanged,loginUser})( Login)



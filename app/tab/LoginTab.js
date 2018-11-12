import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as PersonAction from "../redux/action/PersonAction";
import BackgroundWrapper from "../component/tabLogin/BackgroundWrapper";
import Login from "../component/tabLogin/Login";
import {Container,Content,Icon} from 'native-base';
class LoginTab extends Component{
    static navigationOptions ={
        tabBarIcon: ({tintColor}) =>{
            return <Icon name='ios-card-outline' style={{color:tintColor}} />
        }
    }
    componentWillMount(){
        this.props.fetchPeople();
    }
    render(){
        return(
            <BackgroundWrapper >
                <Login navigate={this.props.navigation.navigate}/>
            </BackgroundWrapper>
        );
    }
}
function mapStateToProps(state){
    return{
        person: state.person,
        errorMessage:state.errorMessage,
    }
}
export default connect(mapStateToProps,PersonAction)(LoginTab);
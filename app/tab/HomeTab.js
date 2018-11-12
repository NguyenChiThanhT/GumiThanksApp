import React,{Component} from 'react';
import {Container,Content,Icon} from 'native-base';
import {connect} from 'react-redux';
import * as PersonAction from "../redux/action/PersonAction";
import TodosList from '../component/tabHome/TodosList';
class HomeTab extends Component{
    static navigationOptions ={
          tabBarIcon: ({tintColor}) =>{
              return <Icon name='ios-home-outline' style={{color:tintColor}} />
          }
    }
    componentWillMount(){
        this.props.GetDataPerson();
        this.props.SetPassword();
    }
        render(){
            return(
                <TodosList navigate={this.props.navigation.navigate} />
            );
        }
}
function mapStateToProps(state){
    return{
        homeTab:state.todolist,
    }
}
export default connect(mapStateToProps,PersonAction)(HomeTab);
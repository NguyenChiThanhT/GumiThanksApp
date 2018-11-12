import React,{Component} from 'react';
import {Container, Content} from 'native-base';
import {FlatList} from "react-native";
import ListPerson from "./view/ListPerson";
import connect from "react-redux/es/connect/connect";
import * as PersonAction from "../../redux/action/PersonAction";
import HeaderItem from "../../common/Headers";
class TodosList extends Component{
    componentWillMount(){
        this.props.GetDataPerson();
        this.props.SetPassword();
    }
    render() {
        return (
            <Container>
                <HeaderItem navigate={this.props.navigate} right="person"/>
                <Content style={{padding:10}}>
                    <FlatList
                        data={this.props.person}
                        renderItem={({item}) => <ListPerson listperson={item} arrperson={this.props.person} navigate={this.props.navigate}/>}
                        keyExtractor={item => item.id.toString()}
                    />
                </Content>
            </Container>
        );
    }
}
function mapStateToProps(state){
    return{
        person:state.todolist.person,
    }
}
export default connect(mapStateToProps,PersonAction)(TodosList);
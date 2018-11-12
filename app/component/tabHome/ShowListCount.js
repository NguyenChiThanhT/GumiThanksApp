import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import HeaderItem from "../../common/Headers";
import {Container, Content} from "native-base";
import ListCount from "./view/ListCount";
import StylesShowListCount from '../../asset/StylesShowListCount';
import {Dialog, ProgressDialog} from 'react-native-simple-dialogs';
import connect from "react-redux/es/connect/connect";
import {ToggleDialogVisible}from '../../redux/action/ToggleAction';
import {RedFileCSV,WriteFileCSV} from '../../redux/action/ListCountAction';
class ShowListCount extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({
            arrperson: this.props.navigation.getParam('arr')
        })
    }

    _modalVisible() {
        this.props.ToggleDialogVisible();
    }

    RedFileCSV() {
        this.props.RedFileCSV();
    }

    WriteFileCSV() {
        this.props.WriteFileCSV(this.props.person);
    }

    render() {
        //css
        const {dialogContainer,textSuccess,textcheck,btnOk,textbtnOK} = StylesShowListCount;
        return (
            <Container>
                <HeaderItem navigate={this.props.navigation.navigate} fucW={this.WriteFileCSV.bind(this)}
                            fucR={this.RedFileCSV.bind(this)} left="ios-arrow-back-outline"
                            fright="ios-cloud-upload-outline" lright="ios-cloud-download-outline"/>
                <Content style={{padding: 10}}>
                    <ListCount data={this.props.person}/>
                </Content>
                <Dialog
                    visible={this.props.dialogVisible}>
                    <View>
                        <View style={dialogContainer}>
                            <Image
                                style={{width: 80, height: 80}}
                                source={require('../../asset/images/finish.png')}
                            />
                        </View>
                        <Text style={textSuccess}>Success</Text>
                        <Text style={textcheck}>Check your firebase file in storage</Text>
                        <TouchableOpacity style={btnOk} onPress={() => {
                            this._modalVisible()
                        }}>
                            <Text style={textbtnOK}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Dialog>
                <ProgressDialog
                    visible={this.props.progressVisible}
                    title="Progress Dialog"
                    message="     Please, wait..."
                    activityIndicatorColor="red"
                    activityIndicatorSize="large"
                />
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        person: state.todolist.person,
        dialogVisible: state.toggle.dialogVisible,
        progressVisible: state.toggle.progressVisible,
    }
}

export default connect(mapStateToProps,{ToggleDialogVisible,RedFileCSV,WriteFileCSV})(ShowListCount);

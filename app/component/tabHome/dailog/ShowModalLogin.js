import React, {Component} from 'react';
import {View, Modal, StyleSheet, TouchableOpacity, AsyncStorage} from 'react-native';
import connect from "react-redux/es/connect/connect";
import * as ToggleAction from '../../../redux/action/ToggleAction';
import Prompt from "react-native-prompt-crossplatform";
class ShowModalLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            verifypass: '',
        }
    }

    componentWillMount() {
        AsyncStorage.multiGet(["pass"]).then((data) => {
            this.setState({verifypass: data[0][1]})
        })
    }

    Login() {
        ars = this.props.person;
        if (this.state.verifypass === this.state.password) {
            this.props.ToggleModalVisible()
            this.props.navigate('ShowListCount', {arr: ars})
        } else {
            alert("please enter password again")
        }
    }
    Cancel(){
        this.props.ToggleModalVisible();
    }
    render() {
        const {modal} = styles;
        return (
            <Prompt
                promptBoxStyle={{borderRadius:15}}
                title="Enter password"
                // placeholder="Enter Some Text"
                secureTextEntry={true}
                inputPlaceholder={'Enter Some Text'}
                isVisible={this.props.toggle.modalVisible}
                onChangeText={(text) => {
                    this.setState({ password: text });
                }}
                onCancel={() => {this.Cancel()}}
                onSubmit={() => {this.Login()}}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        person:state.homeTab,
        updatePerson:state.updatePerson,
        toggle:state.toggle
    }
}

export default connect(mapStateToProps,ToggleAction)(ShowModalLogin);

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        marginTop: 150,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 150,
        backgroundColor: "pink"
    },
})
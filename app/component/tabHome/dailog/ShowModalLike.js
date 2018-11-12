import React, {Component} from 'react';
import {View, Text, Modal, StyleSheet, AsyncStorage, TextInput, TouchableOpacity} from 'react-native';
import {Option, Select} from "react-native-chooser";
import {connect} from 'react-redux';
import StylesModalLike from '../../../asset/StylesModalLike';
import * as PersonAction from "../../../redux/action/PersonAction";

class ShowModalLike extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Select Me Please",
            id: 0,
            name: '',
            count: 0,
            countbegin: 0,
            email: '',
            image: ''
        }
    }

    onSelect(value, lable) {
        //get value from option
        arr = value.split(",");
        namer = arr[0];
        id = arr[1];
        count = arr[2];
        counts = parseInt(count) - 1;
        countbegin = arr[3];
        email = arr[4];
        image = arr[5];
        this.setState({
            id: id,
            name: namer,
            count: counts,
            countbegin: countbegin,
            email: email,
            image: image
        })
        this.setState({value: namer})

    }

    GotoOK() {
        const {id, name, count, countbegin, email, image} = this.state;
        if (count == -1) {
            alert("khong gui dc");
        } else {
            //update list person
            this.props.UpdateListPerson(id, name, count, parseInt(countbegin), email, image);
            this.props.GetDataPerson();
            this.props.arrperson.filter(e => {
                if (e.name == name) {
                    e.count = count;
                }
                return e;
            });
        }
        this.setState({value: "Select Me Please"})
    }

    Cancel() {
        const {id, name, count, countbegin, email, image} = this.props;
        countbegins = countbegin - 1;
        this.props.UpdateCountBegin(id, name, count, countbegins, email, image)
        this.props.GetDataPerson();
    }

    render() {
        //css
        const {
            text_cancel, tounchable_cancel, text_width,
            text_ok, modal_tounchable_ok, modal_content_ok,
            textinput, modal_content_textinput, modal_top,
            styleSeclect, modal_content, modal,
            modal_content_2, modal_content_text, modal_content_select,
            modal_text_thanksapp} = StylesModalLike;
        return (
            <Modal visible={this.props.toggle.modalVisiblePost} transparent={true}>
                <View style={modal}>
                    <View style={modal_content}>
                        <Text style={modal_text_thanksapp}>Thanks App</Text>
                    </View>
                    <View style={modal_content_2}>
                        <View style={modal_content_text}>
                            <Text style={{padding: 15}}>
                                Sender
                            </Text>
                            <View style={modal_content_select}>
                                <Select
                                    transparent={true}
                                    onSelect={this.onSelect.bind(this)}
                                    defaultText={this.state.value}
                                    style={styleSeclect}
                                    textStyle={{}}
                                    backdropStyle={{backgroundColor: "#00000000"}}
                                    optionListStyle={{backgroundColor: "white"}}
                                >
                                    {
                                        this.props.arrperson.map((item, key) => (
                                            <Option
                                                value={item.name + "," + item.id + "," + item.count + "," + item.countbegin + "," + item.email + "," + item.image}
                                                key={key}>{item.name + " " + item.count}</Option>
                                        ))
                                    }
                                </Select>
                            </View>
                        </View>
                        <View style={modal_top}/>
                        <View style={modal_content_textinput}>
                            <TextInput
                                style={textinput}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                            />
                        </View>
                    </View>
                    <View style={modal_top}/>
                    <View style={modal_content_ok}>
                        <TouchableOpacity style={modal_tounchable_ok} onPress={() => {
                            this.GotoOK()
                        }}>
                            <Text style={text_ok}>OK</Text>
                        </TouchableOpacity>
                        <Text style={text_width}></Text>
                        <TouchableOpacity style={tounchable_cancel} onPress={() => {
                            this.Cancel()
                        }}>
                            <Text style={text_cancel}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return {
        toggle:state.toggle,
        id:state.OptionList.id,
        name:state.OptionList.name,
        count:state.OptionList.count,
        countbegin:state.OptionList.countbegin,
        email:state.OptionList.email,
        image:state.OptionList.image
    }
}

export default connect(mapStateToProps, PersonAction)(ShowModalLike);

import React, {Component} from 'react';
import {View} from 'react-native';
import {Card,CardItem, Badge, Left, Body, Right, Thumbnail, Text} from 'native-base';

class ListCount extends Component {

    componentWillMount() {
        this.props.data.sort(function (a, b) {
            return b.countbegin - a.countbegin;
        })
    }

    render() {
        return (
            <View>
                {this.props.data.map((item, key) => (
                    <Card key={key}>
                        <CardItem>
                            <Left>
                                <Thumbnail resizeMode="stretch" large source={{uri: item.image}}/>
                            </Left>
                            <Body style={{justifyContent: "center"}}>
                            <Text>{item.name}</Text>
                            <Text note>{item.email}</Text>
                            </Body>
                            <Right>
                                <Badge>
                                    <Text>{item.countbegin}</Text>
                                </Badge>

                            </Right>
                        </CardItem>
                    </Card>
                ))}
            </View>
        );
    }
}

export default ListCount;
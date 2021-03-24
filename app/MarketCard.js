import React from 'react';
import { StyleSheet, View, Image, Text, Button} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

export default class MarketCard extends React.Component {
    render() {
      if(this.props.time !== null){
        return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{this.props.name}</Text>
                <View style={styles.right}>
                    <Icon style={styles.icon} name="walking" size={30} />
                    <Text style={styles.time}>{this.props.time}</Text>
                </View>
            </View>
        </View>
        )
        }}
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        padding: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: '#EA6F20',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2
    },
    card: {
        paddingTop: '3%', 
        alignItems: 'center',
        flexDirection: 'row', 
        backgroundColor: 'transparent',
    },
    right: {
      flex: 0.5,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-end',
    },
    title: {
        flex: 1,
        alignSelf: 'center',
        fontFamily: 'Helvetica Neue',
        fontWeight: '800',
        fontSize: 14,
    },
    icon: {
        flex: 0.7,
        marginRight: 4,
        color: '#EA6F20',
        zIndex: 2,
        textAlign: 'right'
    },
    time: {
      flexShrink: 1,
      fontSize: 14,
      justifyContent: 'flex-end',
      textAlign: 'right',
      zIndex: 1,
    }
})
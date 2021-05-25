import React from 'react';
import {
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
    Button,
    StyleSheet,
    AsyncStorage,
    alert,
    View,
    ScrollView,
    Dimensions,
    ImageBackground
} from 'react-native';


class StartedScreen extends React.Component {

    render() {
        return (
            <View style={styles.Container}>
                <Image source={require('../images/logo.png')} />

                <View style={{ marginTop: 50 }}>
                    <TouchableOpacity
                        //onPress={this.signupFun}
                        style={[styles.buttonContainer, styles.loginButton]}
                    //onPress={() => this.props.navigation.navigate('OtpScreen')}

                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.loginText}>Get Started</Text>
                            <Image source={require('../images/Group.png')} style={{ marginLeft: 30 }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    buttonContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 270,
        borderRadius: 10,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    loginButton: {
        backgroundColor: '#fa8837',
    },

    loginText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },

});

export default StartedScreen

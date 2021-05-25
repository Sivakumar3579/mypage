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
    ImageBackground,
    Dimensions,
    ScrollView,

} from 'react-native';


class FirstScreen extends React.Component {

    render() {
        return (
            <ScrollView style={{ height: Dimensions.get('window').height }}>
                <ImageBackground
                    source={require('../images/background1x.png')}
                    style={{
                        width: '100%',
                        height: Dimensions.get('window').height,
                        //alignItems: 'center',
                        //justifyContent: 'center',
                    }}>
                    <View style={{ margin: 15 }}>
                        <TouchableOpacity>
                            <Image
                                source={require('../images/leftarrow1.png')}
                                style={{}}
                            />
                        </TouchableOpacity>

                    </View>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={[styles.buttonContainer, styles.loginButton]}
                            onPress={() => this.props.navigation.navigate('LoginScreen')}
                        >
                            <Text style={styles.register}>Sign In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.buttonContainer1, styles.loginButton]}
                            onPress={() => this.props.navigation.navigate('SignupScreen')}
                        >
                            <Text style={styles.register1}>Sign Up</Text>
                        </TouchableOpacity>

                        <Text style={{ fontSize: 18, marginTop: 15 }}>OR</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('StartedScreen')}
                        >
                            <Text style={{ fontSize: 18, marginTop: 20 }}>SKIP the sign in and sign up</Text>
                        </TouchableOpacity>


                    </View>

                    {/* <View style={{}}>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Image
                                source={require('../images/logo1.png')}
                                style={{ }}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, color: 'blue' }}>WORKINBUDDY</Text>
                        </View>
                    </View> */}
                </ImageBackground>
            </ScrollView>

        )
    };
};

const styles = StyleSheet.create({
    Container: {
        //justifyContent: 'center',
        //alignItems: 'center',
        //flex: 1
    },
    buttonContainer: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 300,
        borderRadius: 15,
        // borderColor: 'blue',
        // borderWidth: 1,
        marginRight: 20,
        backgroundColor: '#fa8837'
    },
    register: {
        color: 'white',
        fontSize: 18,
    },
    buttonContainer1: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 300,
        borderRadius: 15,
        borderColor: '#fa8837',
        borderWidth: 1,
        marginRight: 20,
        // backgroundColor:'blue'
        marginTop: 20
    },
    register1: {
        color: 'red',
        fontSize: 18,
    },

});

export default FirstScreen

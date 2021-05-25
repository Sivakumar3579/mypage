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


class SignupScreen extends React.Component {

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
                        <View style={{}}>
                            <Image
                                source={require('../images/logo1.png')}
                                style={{ backgroundColor: 'white' }}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, color: 'white' }}>WORKINBUDDY</Text>
                        </View>
                    </View>

                    <View style={{ marginLeft: 25, marginTop: 25 }}>
                        <Text style={{ fontSize: 30, color: 'red', fontWeight: 'bold' }}>Register</Text>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ color: 'red', marginBottom: 5 }}>FULL NAME</Text>
                            <TextInput
                                style={{ borderColor: 'red', borderWidth: 1, borderRadius: 10, width: 330, height: 45 }}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ color: 'red', marginBottom: 5 }}>Mobile number</Text>
                            <TextInput
                                style={{ borderColor: 'red', borderWidth: 1, borderRadius: 10, width: 330, height: 45 }}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ color: 'red', marginBottom: 5 }}>Email</Text>
                            <TextInput
                                style={{ borderColor: 'red', borderWidth: 1, borderRadius: 10, width: 330, height: 45 }}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ color: 'red', marginBottom: 5 }}>Password</Text>
                            <TextInput
                                style={{ borderColor: 'red', borderWidth: 1, borderRadius: 10, width: 330, height: 45 }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 10 }}>
                        <TouchableOpacity>
                            <Image
                                source={require('../images/google.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../images/fb.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 20 }}>
                            <Text>Already Member?</Text>
                            <TouchableOpacity>
                                <Text style={{ fontWeight: 'bold', color: 'red', marginLeft: 5 }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={[styles.buttonContainer, styles.loginButton]}
                            onPress={() => this.props.navigation.navigate('LoginScreen')}
                        >
                            <Text style={styles.register}>Register</Text>
                        </TouchableOpacity>
                    </View>
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
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 100,
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 1,
        marginRight: 20
    },
    register: {
        color: 'white',
        fontSize: 20,
    }

});

export default SignupScreen

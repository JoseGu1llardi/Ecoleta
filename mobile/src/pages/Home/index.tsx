import React, { useState } from "react";

import Icon from '@expo/vector-icons/Feather'

import { View, Text, StyleSheet, ImageBackground, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native'

import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Screens } from '../../routes'

const Home = () => {
    const [uf, setUf] = useState('');
    const [city, setCity] = useState('');

    const navigation = useNavigation<NativeStackNavigationProp<any, any>>();

    function handleNavigateToPoints() {
        navigation.navigate('Points', {
            uf,
            city
        })
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ImageBackground style={styles.container}
                source={require('../../assets/home-background.png')}
                imageStyle={{ width: 274, height: 368 }}
            >
                <View style={styles.main}>
                    <Image source={require('../../assets/logo.png')} />

                    <View>
                        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
                        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coletas de forma eficiente.</Text>
                    </View>

                </View>

                <View style={styles.footer}>

                    <TextInput
                        style={styles.input}
                        placeholder='Digite a UF'
                        value={ uf }
                        onChangeText={ setUf }
                        maxLength={ 2 }
                        autoCapitalize='characters'
                        autoCorrect={ false }
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Digite a cidade'
                        value={ city }
                        onChangeText={ setCity }
                        autoCorrect={ false }
                    />

                    <RectButton style={styles.button} onPress={() => handleNavigateToPoints()}>
                        <View style={styles.buttonIcon}>
                            <Icon name='arrow-right' size={24} color='#FFF' />
                        </View>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </RectButton>
                </View>

            </ImageBackground>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#f0f0f5'
    },

    main: {
        flex: 1,
        justifyContent: "center",
    },

    title: {
        color: "#7a33cc",
        fontSize: 32,
        fontFamily: "Ubuntu_700Bold",
        maxWidth: 260,
        marginTop: 64,
    },

    description: {
        color: "#6C6C80",
        fontSize: 15,
        marginTop: 16,
        fontFamily: "Roboto_400Regular",
        maxWidth: 260,
        lineHeight: 24,
    },

    footer: {},

    select: {},

    input: {
        height: 60,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        backgroundColor: "#34CB79",
        height: 60,
        flexDirection: "row",
        borderRadius: 10,
        overflow: "hidden",
        alignItems: "center",
        marginTop: 15,
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
        color: "#FFF",
        fontFamily: "Roboto_500Medium",
        fontSize: 16,
    },
});

export default Home;
"use client"

import React from 'react';
import { TouchableOpacity, ImageBackground, Text, StyleSheet } from 'react-native-web';

const CustomButton = ({ onPress, title, imageSource, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={style || styles.container}>
            <ImageBackground 
                source={imageSource} 
                style={styles.backgroundImage} 
                resizeMode="cover">
                    <Text style={styles.text}>{title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        padding: 7,
        overflow: 'hidden'
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
})

export default CustomButton;

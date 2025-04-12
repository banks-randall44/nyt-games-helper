"use client"

import { View, Text, TextInput, FlatList } from 'react-native-web'
import CustomButton from './CustomButton.jsx'
import { StyleSheet } from 'react-native-web'


function expandClicked() {
    console.log('Expand clicked');
}

const NavigationBar = () => {
    return (
        <View style={style.container}>
            <CustomButton
                onPress={expandClicked}
                title={''}
                imageSource={'images/Hamburger_icon.svg'}
            > 
            </CustomButton>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: 'rgb(200,200,200)',
        height: '100vh',
        left: 0,
        width: 50,
        position: 'fixed',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 0px 2.6px'
    }
})

export default NavigationBar

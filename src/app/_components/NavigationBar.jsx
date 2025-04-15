"use client"

import { React, useState } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native-web'
import CustomButton from './CustomButton.jsx'
import itemsCollapsed from './NavItemsCollapsed.jsx'
import itemsExpanded from './NavItemsExpanded.jsx'
import { StyleSheet } from 'react-native-web'


const NavigationBar = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    let styles = [style.container]
    let imgSource;
    if (isExpanded) {
        styles.push(style.expanded)
        imgSource = 'images/close-x.svg';
    } else {
        styles.push(style.closed)
        imgSource = 'images/Hamburger_icon.svg';
    }

    return (
        <View style={styles}>
            <CustomButton
                onPress={toggleExpanded}
                title={''}
                imageSource={imgSource}
                containerStyle={style.button}
            /> 
            {!isExpanded && <View style={style.itemsCollapsed}>{itemsCollapsed()}</View>}
            {isExpanded && <View style={style.itemsExpanded}>{itemsExpanded()}</View>}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'top',
        zIndex: 100,
        backgroundColor: 'rgb(200,200,200)',
        height: '100vh',
        left: 0,
        position: 'sticky',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 0px 2.6px'
    },
    button: {
        position: 'absolute',
        right: 0,
        width: 50,
        height: 50,
        padding: 7,
        overflow: 'hidden'
    },
    closed: {
        width: 50
    },
    expanded: {
        width: 200
    },
    itemsCollapsed: {
        height: 'calc(100% - 50px)',
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        top: 50
    },
    itemsExpanded: {
        height: 'calc(100% - 50px)',
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        color: 'black',
        top: 50
    }
})

export default NavigationBar

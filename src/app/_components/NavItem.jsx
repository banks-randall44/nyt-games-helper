import { StyleSheet, View } from 'react-native-web'
import CustomButton from './CustomButton.jsx'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const style = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10
    }
})

const NavItem = ({ text, textStyle, imageSource, destination, clickCallback }) => {
    const router = useRouter()

    const onPress = () => {
        router.push(destination)
        clickCallback()
    }

    return (
        <View style={style.container}>
            <CustomButton
                imageSource={imageSource}
                onPress={onPress}
                title={text}
                textStyle={textStyle}
            />
        </View>
    )
}

export default NavItem

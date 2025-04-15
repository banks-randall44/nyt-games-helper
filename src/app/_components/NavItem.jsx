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

const NavItem = ({ text, textStyle, imageSource, destination }) => {
    const router = useRouter()

    return (
        <View style={style.container}>
            <CustomButton
                imageSource={imageSource}
                onPress={() => router.push(destination)}
                title={text}
                textStyle={textStyle}
            />
        </View>
    )
}

export default NavItem

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

const NavItem = ({ text, imageSource, destination }) => {
    const handlePress = () => {
        console.log('Navigating to: ' + destination)
    }

    const router = useRouter()

    // Href works, but it performs a whole new page request that causes the broswer to re-
    // request everything from the server. Need to leverage react navigation
    return (
        <View style={style.container}>
            <CustomButton
                imageSource={imageSource}
                onPress={() => router.push(destination)}
                title={text}
            />
        </View>
    )
}

export default NavItem

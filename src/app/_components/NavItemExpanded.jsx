import { StyleSheet, View } from 'react-native-web'

const style = StyleSheet.create({
    container: {
    }
})

const NavItemExpanded = ({child}) => {
    return (
        <View style={style.container}>
            {child}
        </View>
    )
}

export default NavItemExpanded

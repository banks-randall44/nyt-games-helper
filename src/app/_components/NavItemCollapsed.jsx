import { StyleSheet, View } from 'react-native-web'

const style = StyleSheet.create({
    container: {
    }
})

const NavItemCollapsed = ({child}) => {
    return (
        <View style={style.container}>
            {child}
        </View>
    )
}

export default NavItemCollapsed

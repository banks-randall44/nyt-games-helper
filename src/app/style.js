import { StyleSheet } from 'react-native-web'

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    header: {
        color: 'white',
        flex: 1,
        fontSize: 50,
        width: 'calc(100% - 100px)',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subHeader: {
        color: 'white',
        fontSize: 30,
        fontStyle: 'italic',
        marginBottom: 30
    }
})

export default style

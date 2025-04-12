import { StyleSheet } from 'react-native-web'

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
        width: '6em',
        height: '1.5em',
        fontSize: 30,
        marginBottom: 10
    },
    inputCenter: {
        width: '2em',
        margin: 'auto'
    },
    button: {
        backgroundColor: "#428af5",
        width: '10em',
        height: '2em',
        marginTop: 10,
        marginBottom: 20
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
    headerText: {
        marginBottom: 30,
        fontSize: 80,
        fontFamily: 'nyt-karnakcondensed',
        textAlign: 'center',
        color: 'white'
    },
    list: {
        width: '10em',
        height: '2em',
        flex: 1,
        margin: 5
    },
    listAllOthers: {
        maxHeight: '60vh',
        overflowY: 'scroll'
    },
    labelText: {
        textAlign: 'center',
        color: 'white',
        fontStyle: 'italic',
        fontSize: 20
    },
    listItem: {
        backgroundColor: '#55c2c9',
        margin: 2
    },
    listText: {
        color: 'black',
        textAlign: 'center'
    }
})


export default style;

import { StyleSheet } from 'react-native-web'

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
    },
    pageComponents: {
        flex: 1,
        flexDirection: 'column'
    },
    inputs: {
    },
    results: {
        flex: 1,
        flexDirection: 'row',
    },
    input: {
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
        height: '1.5em',
        width: '80%',
        margin: 'auto',
        fontSize: 30,
        marginBottom: 10
    },
    inputCenter: {
        width: '2em',
        margin: 'auto'
    },
    button: {
        backgroundColor: "#428af5",
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
        width: 'calc(100% - 100px)',
        fontSize: 80,
        fontFamily: 'nyt-karnakcondensed',
        textAlign: 'center',
        color: 'white'
    },
    listPangrams: {
        height: 300,
        width: 150,
        margin: 10,
    },
    listAllOthers: {
        width: 150,
        height: 300,
        margin: 10,
        overflowY: 'scroll',
    },
    labelText: {
        textAlign: 'center',
        color: 'white',
        fontStyle: 'italic',
        fontSize: 20,
        marginBottom: 5
    },
    listItem: {
        backgroundColor: '#55c2c9',
        margin: 2
    },
    listText: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center'
    }
})


export default style;

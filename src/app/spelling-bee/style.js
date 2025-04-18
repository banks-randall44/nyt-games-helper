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
        width: '80%',
        margin: 'auto',
        marginTop: 10,
        borderRadius: 5,
        marginBottom: 20
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24
    },
    headerText: {
        marginBottom: 30,
        width: 'calc(100% - 100px)',
        fontSize: 80,
        fontFamily: 'nyt-karnakcondensed',
        textAlign: 'center',
        color: 'white'
    },
    resultsLeft: {
        width: '50%'
    },
    resultsRight: {
        width: '50%'
    },
    labelText: {
        textAlign: 'center',
        color: 'white',
        fontStyle: 'italic',
        fontSize: 20,
        marginBottom: 5
    },
    listItem: {
        backgroundColor: 'rgb(240, 240, 17)',
        width: '90%',
        margin: 'auto',
        marginBottom: 5
    },
    listText: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center'
    }
})


export default style;

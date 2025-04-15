import { StyleSheet } from 'react-native-web'

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center'
    },
    headerText: {
        marginBottom: 30,
        fontSize: 80,
        fontFamily: 'nyt-karnakcondensed',
        textAlign: 'center',
        color: 'white'
    },
    gridContainer: {
    },
    keyboardContainer: {
    },
    letterTile: {
        border: '2px solid rgb(100,100,100)',
        boxSizing: 'border-box',
        height: 80,
        width: 80,
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 4
    },
    letterInput: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        fontSize: 50
    },
    wordEntry: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default style;

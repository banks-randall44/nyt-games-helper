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
    wordsRemaining: {
        color: 'white',
        marginTop: '5px',
        fontStyle: 'italic',
        fontSize: 24
    },
    gridContainer: {
    },
    keyboardContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 40,
        width: 'calc(100% - 10px)',
        maxWidth: 600,
        maxHeight: '30vh',
        aspectRatio: 2
    },
    key: {
        backgroundColor: 'rgb(200,200,200)',
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 4,
        padding: 2,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 5,
        minWidth: 'calc(100% / 12)',
        justifyContent: 'center'
    },
    keyText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    keyboardRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    letterTile: {
        border: '2px solid rgb(100,100,100)',
        backgroundColor: 'rgb(50,50,50)',
        boxSizing: 'border-box',
        height: '7vh',
        aspectRatio: 1,
        margin: 2,
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

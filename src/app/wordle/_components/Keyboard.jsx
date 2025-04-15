import { View, Text, TextInput } from 'react-native-web'
import CustomButton from '../../_components/CustomButton.jsx'
import style from '../style.js'

// Keyboard 'key' component
const keyPressed = (text) => {
    console.log('Key pressed: ' + text)
}
const Key = ({text}) => (
    <CustomButton
        containerStyle={style.key}
        textStyle={style.keyText}
        onPress={() => keyPressed({text}.text)}
        title={text}
    />
)
let keyTexts = {
    row1: ['Q','W','E','R','T','Y','U','I','O','P'],
    row2: ['A','S','D','F','G','H','J','K','L'],
    row3: ['Enter','Z','X','C','V','B','N','M','Delete']
}
let keys = {
    row1: [],
    row2: [],
    row3: []
}
Object.keys(keyTexts).forEach((key) => {
    // key = row1, row2, row3
    for (var i = 0; i < keyTexts[key].length; i++) {
        keys[key].push(<Key key={i} text={keyTexts[key][i]} />)
    }
})

// Keyboard component
const Keyboard = () => (
    <View style={style.keyboardContainer}>
        <View style={style.keyboardRow}>{keys.row1}</View>
        <View style={style.keyboardRow}>{keys.row2}</View>
        <View style={style.keyboardRow}>{keys.row3}</View>
    </View>
)


export default Keyboard

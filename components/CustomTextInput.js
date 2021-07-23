import React, { Component } from "react"
import PropTypes from "prop-types"
import { Platform, StyleSheet, Text, TextInput, View } from "react-native"

const styles = StyleSheet.create({
    fieldLabel: {marginLeft: 10 },
    TextInput: {
        height: 40, marginLeft: 10, width: "96%", marginBottom: 20,
        borderColor: '#c0c0c0', borderWidth: 2,
        ...Platform.select({
            ios: { 
                marginTop: 4, paddingLeft: 10, borderRadius: 8               
            },
            android: {}
        })
    }
})

class CustomTextInput extends Component {

    render(){
        const { label, labelStyle, maxLength, textInputStyle, stateHolder} =
        this.props

        return(
            <View>
                <Text style={[ styles.fieldLabel, labelStyle]}>{label}</Text>
                <TextInput maxLength={maxLength}
                    onChangeText={(inText) => stateHolder(inText)}
                    style={[ styles.TextInput, textInputStyle ]}
                />                
            </View>
        )
    }
}

CustomTextInput.propTypes = {
    label : PropTypes.string.isRequired, labelStyle : PropTypes.object,
    maxLength : PropTypes.number, textInputStyle : PropTypes.object,
    stateHolder : PropTypes.func.isRequired
}

export default CustomTextInput
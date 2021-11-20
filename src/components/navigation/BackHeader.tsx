import { LeftArrow } from '@novomarkt/assets/icons/icons'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Text from '../general/Text'
import {COLORS} from '../../constants/colors'

const BackHeader = (props) => {
    return (
        <View {...props} style={{...styles.container, ...props.style}}>
            <LeftArrow/>
            <Text style={styles.text}>Мои данные</Text>
        </View>
    )
}

export default BackHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    text: {
        marginLeft: 10,
        fontSize: 18,
        color: COLORS.defaultBlack
    }
})

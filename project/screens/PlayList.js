import React from 'react';
import {View, StyleSheet} from 'react-native';

const PlayList = () => {
    return (
        <View style = {styles.container}>
            <Text>PlayList</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default PlayList;

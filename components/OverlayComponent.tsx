import React, { useState } from 'react';
import { Button, Overlay, Icon } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';

type OverlayComponentProps = {};

export default ({visible,toggleOverlay}:
                    {visible:boolean, toggleOverlay: () => void}
    ) => {
    // const [visible, setVisible] = useState(false);
    //
    // const toggleOverlay = () => {
    //     setVisible(!visible);
    // };

    return (
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <Text style={styles.textPrimary}>Hello!</Text>
            <Text style={styles.textSecondary}>
                Welcome to React Native Elements
            </Text>
        </Overlay>
    );
};

const styles = StyleSheet.create({
    button: {
        margin: 10,
    },
    textPrimary: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20,
    },
    textSecondary: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 17,
    },
});


import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';

export interface StatBlockProps {
    value: string;
    description: string;
    style?: ViewStyle;
}

function renderStatValue(value: string) {
    const lastChar = value[value.length - 1];
    
    if (lastChar === '%' || lastChar === '+') {
        return (
            <Text style={styles.statValue}>
                {value.slice(0, -1)}
                <Text style={styles.specialCharacter}>{lastChar}</Text>
            </Text>
        );
    }
    
    return <Text style={styles.statValue}>{value}</Text>;
}

export default function StatBlock({ value, description, style }: StatBlockProps) {
    return (
        <View style={[styles.cardContainer, style]}>
            {renderStatValue(value)}
            <Text style={styles.descriptionText}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#4A4A4A',
        paddingTop: 20,
        paddingHorizontal: 24,
        marginVertical: 20, 
        alignItems: 'center',
        justifyContent: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, 
    },
    statValue: {
        fontSize: 64,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: 'Inter',
    },
    specialCharacter: {
        fontSize: 48,
        color: '#FFFFFF',
    },
    descriptionText: {
        fontSize: 16,
        color: '#d0d0d0',
        textAlign: 'center',
        marginTop: -1, 
        lineHeight: 22, 
        fontFamily: 'Inter',
    },
});
import React from 'react';
import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.iconRow}>
        <Pressable onPress={() => Linking.openURL('https://facebook.com')}>
          <FontAwesome name="facebook" size={24} />
        </Pressable>

        <Pressable onPress={() => Linking.openURL('https://x.com')}>
          <AntDesign name="twitter" size={24} />
        </Pressable>

        <Pressable onPress={() => Linking.openURL('https://instagram.com')}>
          <AntDesign name="instagram" size={24} />
        </Pressable>

        <Pressable onPress={() => Linking.openURL('https://youtube.com')}>
          <Entypo name="youtube" size={24} />
        </Pressable>

        <Pressable onPress={() => Linking.openURL('https://linkedin.com')}>
          <Entypo name="linkedin" size={24} />
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Address:</Text>
        <Text style={styles.text}>North Seattle College</Text>
        <Text style={styles.text}>9600 College Way North</Text>
        <Text style={styles.text}>Seattle, WA 98103</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Contact</Text>
        <Text style={styles.text}>206.934.3600</Text>
      </View>

      <Text style={styles.copy}>@2025 All right reserved</Text>

      <View style={styles.linkRow}>
        <Pressable>
          <Text style={styles.link}>Terms</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.link}>Privacy</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#8c8c8c',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    gap: 18,
    marginBottom: 28,
  },
  section: {
    alignItems: 'center',
    marginBottom: 22,
  },
  heading: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 6,
    color: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  copy: {
    color: '#fff',
    marginTop: 12,
    marginBottom: 18,
  },
  linkRow: {
    flexDirection: 'row',
    gap: 30,
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

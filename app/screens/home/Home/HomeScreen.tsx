import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { GDSCItem } from '../../../components';
import { globalStyles } from '../../../theme';

const HomeScreen = () => {
  return (
    <ScrollView style={[globalStyles.screen, styles.container]}>
      <Text style={[globalStyles.text, styles.title]}>
        Google Developers Student Clubs
      </Text>
      <GDSCItem name="UNAH-VS" flag="🇭🇳" />
      <GDSCItem name="UNAH-VS" flag="🇲🇽" />
      <GDSCItem name="UNAH-VS" flag="🇭🇳" />
      <GDSCItem name="UNAH-VS" flag="🇭🇳" />
      <GDSCItem name="UNAH-VS" flag="🇭🇳" />
      <GDSCItem name="UNAH-VS" flag="🇭🇳" />
      <GDSCItem name="UNAH-VS" flag="🇭🇳" />
      <GDSCItem name="UNAH-VS" flag="🇭🇳" />
      <GDSCItem name="UNAH-VS" flag="🇭🇳" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;

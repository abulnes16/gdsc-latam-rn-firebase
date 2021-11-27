import React from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { GDSCItem } from '../../../components';
import { globalStyles } from '../../../theme';
import colors from '../../../theme/colors';
import { HomeScreenProps } from '../../../@types/navigation';

interface Props extends HomeScreenProps {}

const HomeScreen = ({ navigation }: Props) => {
  return (
    <ScrollView style={[globalStyles.screen, styles.container]}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" style={styles.menuButton} fill={colors.white} />
      </TouchableOpacity>
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
  menuButton: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
});

export default HomeScreen;

import { Layout } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { GDSC_LOGO } from '../../assets/images';

interface Props {
  logo?: string;
  name: string;
  flag: string;
}

const GDSCItem = ({ logo, name, flag }: Props) => {
  return (
    <Layout style={styles.item}>
      <Image
        resizeMode="contain"
        source={logo || GDSC_LOGO}
        style={styles.image}
      />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.flag}>{flag}</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: { width: 50, height: 50, borderRadius: 20 },
  title: { fontSize: 30, color: 'black', fontWeight: 'bold' },
  flag: { fontSize: 30 },
});

export default GDSCItem;

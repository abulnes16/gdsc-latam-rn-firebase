import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Button } from '@ui-kitten/components';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { GDSC_LOGO } from '../../assets/images';
import { globalStyles } from '../../theme';
import colors from '../../theme/colors';

interface Props {
  logout: () => void;
  user: User | null;
}

const DrawerContent = ({ logout, user }: Props) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} resizeMode="contain" source={GDSC_LOGO} />
        </View>
        <Text style={[globalStyles.text, styles.user]}>{user?.name}</Text>
      </View>
      <Button
        onPress={logout}
        style={[globalStyles.buttonColor, styles.button]}>
        Log out
      </Button>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
  },
  image: { width: 50, height: 50 },

  imageContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: colors.white,
    marginRight: 10,
  },
  button: {
    marginTop: 20,
    marginHorizontal: 15,
  },

  user: {
    fontSize: 18,
  },
});

export default DrawerContent;

import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

import {Avatar} from 'react-native-paper';

interface Props {
  text: string;
  type: string;
  userPhoto: any;
  size?: number;
}

function CustomAvatar({text, type, userPhoto, size}: Props) {
  let icon;
  if (type === 'default') {
    icon = <Avatar.Text size={size} label={text} style={styles.Avatar} />;
  }
  if (type === 'image') {
    icon = <Image source={userPhoto} style={styles.img} />;
  }

  return <View>{icon}</View>;
}

const styles = StyleSheet.create({
  img: {width: 80, height: 80},
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  Avatar: {
    backgroundColor: 'cadetblue',
  },
});

export default CustomAvatar;

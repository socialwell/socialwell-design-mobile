import React, {useState} from 'react';
import {StyleSheet, Switch, TouchableOpacity} from 'react-native';

interface Props {
  onPress: () => void;
}

function Switchs({onPress}: Props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <TouchableOpacity style={[styles.wrapper]} onPress={onPress}>
      <Switch
        trackColor={{false: '#767577', true: '#3182CE'}}
        thumbColor={isEnabled ? 'white' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 20,
  },
});

export default Switchs;

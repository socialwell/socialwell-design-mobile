import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
interface Props {
  text: string;
  position: string;
  visible?: boolean;
}

function CustomToolTip({text, position, visible}: Props) {
  const [tootTipVisible, setVisible] = React.useState(visible);
  return (
    <View style={styles.container}>
      <Tooltip
        isVisible={tootTipVisible}
        contentStyle={styles.contentStyle}
        content={
          <View style={styles.contentStyle}>
            <Text style={styles.text}>{text}</Text>
          </View>
        }
        onClose={() => setVisible(false)}
      />
    </View>
  );
}

export default CustomToolTip;

const styles = StyleSheet.create({
  text: {color: 'white'},
  contentStyle: {backgroundColor: 'black'},
  container: {flex: 1, justifyContent: 'center'},
});

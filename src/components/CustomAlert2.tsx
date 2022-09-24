import React, {useState} from 'react';
import {
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  View,
  ColorValue,
  Image,
} from 'react-native';
const close = require('../../assets/image/closeIcon.png');
const warning = require('../../assets/image/warning.png');
const normal = require('../../assets/image/normal.png');
const stop = require('../../assets/image/stop.png');
const confirm = require('../../assets/image/confirm.png');

interface Props {
  text: string;
  backgroundColor?: ColorValue;
  visible?: boolean;
}

function CustomAlert2({text, backgroundColor, visible}: Props) {
  const buttonStyle = React.useMemo(() => {
    return {
      backgroundColor: backgroundColor,
    };
  }, [backgroundColor]);
  const [modalVisible, setModalVisible] = useState(visible);

  let icon;
  if (text === 'warning') {
    icon = <Image source={warning} style={styles.img} />;
  }
  if (text === 'normal') {
    icon = <Image source={normal} style={styles.img} />;
  }
  if (text === 'stop') {
    icon = <Image source={stop} style={styles.img} />;
  }
  if (text === 'confirm') {
    icon = <Image source={confirm} style={styles.img} />;
  }

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container}>
          <View style={[styles.modal, buttonStyle]}>
            {icon}
            <Text style={styles.modalHeader}>Title</Text>

            <Text style={styles.warningText}>This is a description</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Image source={close} style={styles.img2} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  img2: {width: 15, height: 15},
  img: {width: 20, height: 20},
  container: {flex: 1, backgroundColor: 'white'},
  btnText: {
    fontFamily: 'Inter-Medium',
  },
  btn: {
    marginHorizontal: 5,
    padding: 8,
    borderRadius: 5,
  },
  modalHeader: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#2D3748',
  },
  warningText: {
    color: '#2D3748',
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  modal: {
    width: 300,
    height: 50,
    padding: 15,
    alignSelf: 'center',
    borderRadius: 5,
    position: 'absolute',
    bottom: 350,
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-around',
  },
});

export default CustomAlert2;

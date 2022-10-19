import React, {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const close = require('../../assets/image/closeIcon.png');
interface Props {
  text: string;
  question: string;
  visible?: boolean;
  onPress: () => void;
}

function CustomModal({text, question, visible, onPress}: Props) {
  const [modalVisible, setModalVisible] = useState(visible);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modal}>
          <View style={styles.container}>
            <Text style={styles.modalHeader}>{text}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Image source={close} style={styles.img} />
            </TouchableOpacity>
          </View>

          <Text style={styles.warningText}>{question}</Text>

          <View style={styles.cont2}>
            <TouchableOpacity style={styles.btn1}>
              <Text style={styles.btnText1}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress} style={styles.btn}>
              <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {width: 15, height: 15},
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  cont2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30,
  },
  btnText1: {
    fontFamily: 'Inter-Medium',
    color: 'black',
  },
  btn1: {
    marginHorizontal: 5,
    padding: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 5,
  },
  btnText: {
    fontFamily: 'Inter-Medium',
    color: 'white',
  },
  btn: {
    marginHorizontal: 5,
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#E53E3E',
  },
  modalHeader: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#2D3748',
  },
  warningText: {
    marginTop: 10,
    color: '#2D3748',
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  modal: {
    width: 300,
    height: 150,
    padding: 15,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 5,
    position: 'absolute',
    bottom: 350,
    elevation: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CustomModal;

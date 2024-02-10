import React, { useState } from "react";
import { Button, Text, View, StyleSheet,Pressable } from "react-native";
import Modal from "react-native-modal";

function Instructions() {
  const [isModalVisible, setModalVisible] = useState(false);


  function Button(props) {
    const { onPress, title = 'Instructions' } = props;
    return (
      <Pressable style={styles.button} onPress={
        toggleModal
        }>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
  }


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
    
    <Button>

    </Button>

      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            The game consists of how fast 
            can you type in under 1 minute.
          </Text>
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontFamily: 'Clean Sports Stencil',
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#007bff',
  },
});

export default Instructions;

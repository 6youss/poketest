import React from 'react';
import {Modal, ModalProps, Pressable, StyleSheet} from 'react-native';

export interface BottomModalProps extends ModalProps {
  onClose: () => void;
}

export const BottomModal: React.FC<BottomModalProps> = ({
  children,
  onClose = () => {},
  ...props
}) => {
  return (
    <Modal transparent animationType="fade" {...props}>
      <Pressable
        onPress={() => {
          onClose();
        }}
        style={styles.container}>
        <Pressable style={styles.bottomContainer}>{children}</Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0005',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    height: '50%',
    backgroundColor: 'white',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    alignItems: 'center',
    padding: 30,
  },
});

import React, { ReactNode } from 'react'
import { Text, StyleSheet, Modal, View, ScrollView, Pressable } from 'react-native'
import { useAppDispatch, useAppSelector } from '../hooks'
interface Props {
  children : ReactNode
  transparent : boolean
  modalVisible : boolean
}

const ModalComponent = ({children, transparent, modalVisible} : Props) => {

  return (
      <Modal 
        animationType='slide'
        visible={modalVisible}
        transparent={transparent}
      >
        {children}
      </Modal>
  )
}

export default ModalComponent
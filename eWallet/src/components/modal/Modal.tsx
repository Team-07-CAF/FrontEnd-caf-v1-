import React, { useState } from 'react';
import { Button, Modal } from 'antd';

interface ModalComponentProps {
  modalTitle: string;
  modalText: React.ReactNode;
  modalStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  titleButton?: string;
  children: React.ReactNode;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ titleButton, buttonStyle, modalTitle, modalText, modalStyle }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Button type="primary" style={buttonStyle} onClick={handleButtonClick}>
      {titleButton}
      </Button>
      <Modal
        title={modalTitle}
        centered
        open={modalOpen}
        onOk={handleModalClose}
        onCancel={handleModalClose}
        style={modalStyle}
      >
       {modalText}
      </Modal>
    </>
  );
};

export default ModalComponent;

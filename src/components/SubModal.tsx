import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const SubModal: React.FC<{
  id: string;
  content: string;
  check: boolean;
  handleOpen: boolean;
  handleClose: () => void;
}> = ({ id, content, check, handleOpen, handleClose}) => {

  return (
    <>
      <Modal
        open={handleOpen}
        onClose={handleClose}
        aria-labelledby="parent-modal-title1"
        aria-describedby="parent-modal-description1">
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title2">{content}</h2>
          <h6 id="parent-modal-description2">{`id: ${id}`}</h6>
          {check && <h3>Checked</h3>}
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </>
  );
};


export default SubModal;

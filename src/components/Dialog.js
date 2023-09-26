import React, { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import Modal from 'react-modal'; // You may need to install this library
import RoundedBtn from './Common/RoundedBtn';
// Create a dialog component
function LogoutDialog({ isOpen, onClose, onLogout }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Logout Confirmation</h2>
      <p>Are you sure you want to log out?</p>
      <button onClick={onLogout}>Logout</button>
      <button onClick={onClose}>Cancel</button>
    </Modal>
  );
}

function Dialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLogout = () => {
    // Implement Firebase sign-out logic here
    // For example, using Firebase Authentication:
    // firebase.auth().signOut();
    
    // Close the dialog after logging out
    setIsDialogOpen(false);
  };

  return (
    <div className="flex justify-between items-center w-[85px]">
      <RoundedBtn icon={<HiDotsVertical />} onClick={() => setIsDialogOpen(true)} />
      <LogoutDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} onLogout={handleLogout} />
    </div>
  );
}

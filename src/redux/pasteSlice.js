import { createSlice } from '@reduxjs/toolkit'
import { ToastContainer, toast } from 'react-toastify';
export const pasteSlice = createSlice({
  name: 'pastes',
  initialState: {
    pastes: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : [],
  },
  reducers: {
    addtopaste: (state,action) => {
      const paste= action.payload;
      state.pastes.push(paste);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast.success('Paste added successfully!');
    },
    updatetopaste: (state,action) => {
        const updatedPaste = action.payload;
        const index = state.pastes.findIndex(paste => paste._Id === updatedPaste._Id);
        if (index !== -1) {
            state.pastes[index] = updatedPaste;
            localStorage.setItem('pastes', JSON.stringify(state.pastes));
            toast.success('Paste updated successfully!');
        } else {
            toast.error('Paste not found for update!');
        }
    },
    resetallpaste: (state, action) => {
        state.pastes = [];
        localStorage.removeItem('pastes');
        toast.info('All pastes have been reset!');
    },
    removefrompaste: (state, action) => {
        const pasteId = action.payload;
        state.pastes = state.pastes.filter(paste => paste._Id !== pasteId);
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.warn('Paste removed successfully!');
    },
  },
})

// Action creators are generated for each case reducer function
export const {addtopaste,updatetopaste,resetallpaste,removefrompaste } = pasteSlice.actions

export default pasteSlice.reducer
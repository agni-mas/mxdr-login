import React, { useState, KeyboardEvent, MouseEvent, Fragment } from 'react';

type Anchor = 'right'; // the direction from where the modal appears from

// Centralizes modal control
const useModal = () => {
  const [state, setState] = useState({
    right: false,
    index: null,
  });

  function toggleDrawer(anchor: Anchor, open: boolean, key: number) {

    return (event: KeyboardEvent | MouseEvent) => {
      if (event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')) {
        return;
      }

      setState({ ...state, [anchor]: open, index: key });
    };
  }

  return { toggleDrawer, state }
}

export default useModal

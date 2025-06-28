import { useState, useEffect } from 'react';
// import { CloseButton, Overlay } from './ModalStyled';
import { createPortal } from 'react-dom';
import { CloseButton, ModalStyled, Overlay } from './Modal.styled';

export const Modal = ({ onEsc = true, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { onActive, children } = props;

  const handleClick = event => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      onActive()
    }
  };

  useEffect(() => {
    if (!onEsc) {
      setIsOpen(true);
      return;
    }
    const onEscKey = event => {
      if (event.code !== 'Escape') {
        return;
      }
onActive();
    };

    document.addEventListener('keydown', onEscKey);
    document.documentElement.style.overflowY = 'hidden';
    setTimeout(() => {
      setIsOpen(true);
    }, 200);

    return () => {
      document.removeEventListener('keydown', onEscKey);
      document.documentElement.style.overflowY = 'auto';
    };
  }, [setIsOpen]);

  const modalClassName = isOpen ? 'modal-open' : '';
  return createPortal(
    <Overlay onClick={handleClick} $backdrop={props.backdrop}>
      <ModalStyled className={modalClassName}>
        {children}
        
          <CloseButton size="24" type="button" onClick={handleClick} />
      </ModalStyled>
    </Overlay>,
    document.body
  );
};
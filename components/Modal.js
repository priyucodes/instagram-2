import { modalState } from '../atoms/modalAtom';
import { useRecoilState } from 'recoil';

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return <div>{open && <p>Opened</p>}</div>;
};
export default Modal;

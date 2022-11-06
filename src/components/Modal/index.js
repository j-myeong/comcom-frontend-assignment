import * as style from './styles';

export default function Modal(props) {
  return (
    <style.ModalContainer>
      <style.ModalWrapper>
        <p>
          Are you sure you want to clear
          this conversation?
        </p>
        <style.ButtonWrapper>
          <button type="button" className="cancel" onClick={props.cancelClick}>
            Cancel
          </button>
          <button type="button" className="clear" onClick={props.clearClick}>
            Clear
          </button>
        </style.ButtonWrapper>
      </style.ModalWrapper>
    </style.ModalContainer>
  );
}

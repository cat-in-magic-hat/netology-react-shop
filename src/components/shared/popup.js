import { useDispatch, useSelector } from 'react-redux';
import { hidePopup } from '../../actions/popup-action-creators';

export default function Popup() {
    const { isOpened, text, title } = useSelector(state => state.popup);
    const dispatch = useDispatch();

    const closePopup = (e) => {
        e.preventDefault();
        dispatch(hidePopup());
    }

    if (!isOpened) return null;

    return (<>
        <div className="popup-shadow"></div>
        <div className="popup">
            <div className="popup-header">{title}</div>
            <div className="popup-body">{text}</div>
            <div className="popup-actions">
                <button onClick={closePopup}>OK</button>
            </div>
        </div>
    </>
    );
}
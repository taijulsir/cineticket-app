

import "./Modal.css";


function Modal({
    children,
    extraClass,
    setShowModalContent,
}) {
    return (
        <div className={`hall_modal ${extraClass}`}>
            <div
                className="hall_modal_backdrop"
                onClick={() => setShowModalContent(false)}
            ></div>
            <div
                className={`hall_modal_dialog hall_modal_dialog_centered hall_modal_dialog_scrollable`}
            >
                <div className="hall_modal_content" >

                    <div className="hall_modal_body" >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
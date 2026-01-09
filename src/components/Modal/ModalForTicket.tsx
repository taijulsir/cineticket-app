import "./ModalForTicket.css";

function ModalForTicket({
    children,
    setShowModalContent,
}) {
    return (
        <div className={`modal_for_ticket`}>
            <div
                className="modal_backdrop"
                onClick={() => setShowModalContent(false)}
                style={{
                    display: 'grid',
                    placeItems: 'center'
                }}
            >
            </div>
            <div 
                    className="modal_body"
                    style={{
                        display: 'grid',
                        placeItems: 'center',
                        height: '90%',
                        width: '90%',
                        overflow: 'hidden'
                    }}
                >
                        {children}
            </div>
        </div>
    );
}

export default ModalForTicket;
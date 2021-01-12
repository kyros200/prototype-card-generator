import React from 'react';
import Modal from 'react-modal';
import layoutHelper from '../../helper/layoutHelper';

const ModalLayout = (props) => {
    
    return (
        <Modal
            isOpen={props.isOpen}
            ariaHideApp={false}
        >
            <button onClick={() => props.close()}>Close</button>
            {layoutHelper.getFields(props).map((f) => (
                <>
                    {f}
                </>
            ))}
            <button onClick={() => props.save()}>Save</button>
        </Modal>
    );
};

export default ModalLayout;
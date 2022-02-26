import React from 'react';
import cl from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    let classActive = [cl.myModal];

    if (visible){
        classActive.push(cl.active);
    }
    return (
        <div className={classActive.join(" ")} onClick={()=>setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;
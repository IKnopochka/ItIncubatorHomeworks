import React from 'react'
import {AffairType, deleteAffair} from "./HW2";
import c from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={c.block}>
            <div className={c.task}>{props.affair.name}</div>
            <div className={c.priority}>{props.affair.priority}</div>

            <button onClick={deleteCallback} className={c.button}>X</button>
        </div>
    )
}

export default Affair

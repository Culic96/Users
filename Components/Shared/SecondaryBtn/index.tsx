import { FC } from "react";
import {  Secondary } from "./style";


const SecondaryBtn:FC <{children: any, onClick: ()=> void}> = ({children, onClick}) => {
    return (
        <>
        <Secondary onClick={onClick}>{children}</Secondary>
        </>
    )
}

export default SecondaryBtn;
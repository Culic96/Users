import { FC } from "react";
import { Primary } from "./style";

const PrimaryBtn:FC<{children: string, onClick:() => Promise<void>}> = ({children, onClick}) => {
    return (
        <>
        <Primary onClick={onClick}>{children}</Primary>
        </>
    )
}

export default PrimaryBtn;
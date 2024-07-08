import React from "react";

interface ButtonProps {
 color?: 'button-primary' | 'button-danger' | 'button-warning',
 text: string;
 onClick: () => void;
}

export default function Button({ color,text, onClick }: ButtonProps) {
    return(<>
        <div className="flex p-2">
            <button className={color} onClick={() => onClick() }>{text}</button>
        </div>
    </>);
}
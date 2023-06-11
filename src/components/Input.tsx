import { useState } from "react";

interface propType {
    depth: number;
    isVisible: boolean;
}

function Input(props: propType) {
    
    const [children, setChildren] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);

    function handlePlus() {
        if (visible)
            setChildren(children + 1);
    }

    function handleMinus() {
        if (visible)
            if (children)
                setChildren(children - 1);
    }

    function handleVisiblity() {
        if (children)
            setVisible(!visible);
    }

    function handleReset() {
        setChildren(0);
        setVisible(true);
    }

    return (
        <div className={`ml-20 ${props.isVisible ? "" : "hidden"}`}>
            <div className="flex flex-col items-center justify-center gap-5">
                <div className={`flex items-center justify-between gap-3 ${visible ? "": "after:contents-none after:block after:w-full after:h-1 after:shadow-md after:shadow-purple-800 after:basis-0"}`}>
                    <input id="inputBox" type="text" className="text-xl p-3 rounded-md" placeholder="Name: " />
                    <button type="submit" onClick={handleVisiblity} className={`rounded-full text-sm w-10 h-10 flex items-center justify-center ${children ? "bg-gray-600": "text-gray-500 bg-gray-800"} rotate-${visible ? 0 : 180}`}> ▼ </button>
                    <button type="submit" onClick={handlePlus} className={`${visible ? "bg-gray-600": "text-gray-500 bg-gray-800"} rounded-full text-3xl w-10 h-10 flex items-center justify-center`}> + </button>
                    <button type="submit" onClick={handleMinus} className={`${visible && children ? "bg-gray-600": "text-gray-500 bg-gray-800"} rounded-full text-3xl w-10 h-10 flex items-center justify-center`}> - </button>
                </div>
                {Array(children).fill(0).map((_, i) => 
                        <Input depth={props.depth + 1} key={i} isVisible={visible} />
                )}
                {visible ? null : <div className="w-full h-1 shadow-md shadow-purple-800"></div>}
                {props.depth ? null: <button type="submit" onClick={handleReset} className="px-4 py-2 bg-gray-600 flex items-center justify-center rounded-lg text-xl">Reset</button>}
            </div>
        </div>
    )
}

export default Input;
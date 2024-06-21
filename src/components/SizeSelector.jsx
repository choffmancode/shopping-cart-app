import { useState } from "react"
import { SizeButton } from "./SizeButton"

import { sizes } from "../utils/sizes"

export const SizeSelector = () => {
    const [size, setSize] = useState("S")
    const [selected, setSelected] = useState([]);

    return (
        <>
        <div className="btn-toolbar justify-content-between">
                <div className="btn-group btn-group-sm">
                { 
                Object.values(sizes).map(
                    value => <SizeButton key={value} size={value} setSize={setSize} checked={value === size} />
                )
                }
                </div>
        </div>
        
        </>
    )

}
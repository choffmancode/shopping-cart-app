import { useState } from "react";

export const SizeButton = (size, setSize, checked) => {

        console.log("size", size)
    return (
        <>
        <input type="radio" id={size.size} className="btn-check" checked={checked} autoComplete="off" onChange={() => setSize(size.size)} />
        <label className="btn btn-info m-1 p-2" htmlFor={size.size}>
        { size.size }
        </label>
    </>
    )
}
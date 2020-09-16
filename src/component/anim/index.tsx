import React from "react"

export type AnimProps = {
    type: "bounceIn"
    children: JSX.Element
}
const Anim = (p: AnimProps) => {
    return <div className={`animate__animated animate__${p.type}`}>{p.children}</div>
}
export default Anim

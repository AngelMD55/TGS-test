import React from 'react'

export default function Intro(props) {
    return (
        <div style={{marginTop: "14px", paddingBottom: "10px"}}>
            <div style={{marginRight: "16px"}}>
                <img
                    alt={props.name}
                    src={props.image}
                />
            </div>
            <div>
                <span style={{fontWeight: "bold"}}>{props.bold}</span>
                <span>{props.reg}</span>
            </div>
        </div>
    )
}

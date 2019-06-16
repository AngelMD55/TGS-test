import React from 'react'

export default function Post(props) {
    return (
        <div className="container bg-white mt-3">
            <div className="row">
                <div style={{ marginLeft: "14px" }}>
                    <div className="mt-2" style={{ display: "inline", float: "left" }}>
                        <img src={props.userImage} alt={props.userName} style={{ width: "50px", borderRadius: "50%" }} />
                    </div>
                    <div className="mt-2" style={{ display: "inline", float: "left", marginLeft: "8px" }}>
                        <p style={{ padding: "0px", margin: "0px", color: "#3B5998", fontWeight: "bold" }}>{props.userName}</p>
                        <p style={{ padding: "0px", margin: "0px", fontSize: "12px" }}>{props.date}<span role="presentation" aria-hidden="true"> · </span> <i className="fas fa-globe-americas"></i> </p>
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <p style={{ marginBottom: "8px", fontSize: "12px", fontWeight: "bold" }}>{props.subject}</p>
            </div>
            <div>
                <img src={props.postImage} alt={props.altImage} style={{ width: "475px", marginLeft: "14px" }} />
            </div>
            <div className="row p-1">
                <div style={{ marginLeft: "100px", fontSize: "12px" }}>
                    <i className="far fa-thumbs-up"></i> Like
                </div>
                <div style={{ marginLeft: "375px", fontSize: "12px" }}>
                    <i className="far fa-comment-alt"></i> Comment
                </div>
            </div>
            <div className="row bg-light" style={{ padding: "6px 0px", borderBottom:" solid 1px #edf0f5",}}>
                <div className="col-7" style={{ fontSize: "11px", fontWeight: "bold" }}>
                    <p style={{marginBottom:"0px"}}>{props.reacted}</p>
                </div>
                <div className="col-5">
                    <div style={{ float: "right", fontSize: "10px", color: "#3B5998", fontWeight: "bold" }}>
                        Most relevant <i className="fas fa-caret-down"></i>
                    </div>
                </div>
            </div>
            
            <div className="row bg-light" style={{ fontSize: "11px", color: "#3B5998", padding: "5px 15px", borderBottom:" solid 1px #edf0f5", fontWeight: "bold"}}>
                <p style={{marginBottom: "0px"}}>{props.timesShared} shares</p>
            </div>
            <div className="row bg-light" style={{ fontSize: "11px", color: "#3B5998", padding: "5px 15px", fontWeight: "bold"}}>
                <p style={{marginBottom: "0px"}}>View all {props.numberOfComments} comments</p>
            </div>

        </div>
    )
}

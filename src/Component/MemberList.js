import React from "react";

export default function MemberList (props) {
    const {details} = props
    return (
        <div className='member container'>
        <h2>Name: {details.username}</h2>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
      </div>
    )
}
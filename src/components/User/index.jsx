import React from 'react';
import './style.scss'
export default function ({index, dateTime, username, phoneNumber, companyName, loginCount}) {

    const style = index % 2 === 0 ? 'even' : 'odd';
    return (    
        <div className={`User ${style}`}>
            <div className="no">#{index+1}</div>
            <div className="date bold">{dateTime}</div>
            <div className="name">{username}</div>
            <div className="phone">{phoneNumber}</div>
            <div className="company-name">{companyName}</div>
            <div className="login-count bold">{loginCount}</div>
        </div>
    )
}
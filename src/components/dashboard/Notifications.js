import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

const Notifications = (props) => {
    const {notifications} = props;
    return (
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        {notifications && notifications.map(item => {
                            return (
                                <li key={item.id}> {
                                    item.recipeId !== undefined ?
                                    <Link to={'/recipe/' + item.recipeId} >
                                    <span className="pink-text">{item.user} </span>
                                        <span>{item.content}</span>
                                        <div className="grey-text note-date">
                                          {moment(item.time.toDate()).fromNow()}
                                        </div> 
                                     </Link> : 
                                     <div> 
                                        <span className="pink-text">{item.user} </span>
                                        <span>{item.content}</span>
                                        <div className="grey-text note-date">
                                        {moment(item.time.toDate()).fromNow()}
                                        </div> 
                                     </div>
                                }
                                
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;
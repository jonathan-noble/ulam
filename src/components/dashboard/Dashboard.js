import React, {Component} from 'react';
import Notifications from './Notifications';
import RecipeList from '../recipes/RecipeList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


class Dashboard extends Component {
    render() {

        const { recipes, auth, notifications } = this.props;

        if(!auth.uid) return <Redirect to='/signin'/>
        
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <RecipeList recipes={recipes} />
                    </div>

                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>

            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        recipes: state.firestore.ordered.recipes,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'recipes', orderBy: ['createdAt', 'desc']},
        {collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])

)(Dashboard);
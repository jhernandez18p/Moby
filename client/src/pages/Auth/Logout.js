import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// Actions 
import { userLogout } from '../../redux/actions/user/userActions';

class Logout extends Component {

    componentDidMount(){
        this.props.onUserLogout()
    }

    render() {
        // let user = this.props.user;
        // if (user.isAuthrnticated){
            return <Redirect to='/'/>
        // }else{
            // return <Redirect to='/auth/registro'/>
        // }
    };
}

const userSelector = createSelector(state => state.user, user => user);                                     // user

const mapStateToProps = createSelector(
    userSelector,
    (user) => (
        {
            user
        }
    )
);

const mapDispatchToProps = (dispatch, props) => {
    return bindActionCreators(
        {
            onUserLogout: userLogout,
        }, dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
// export default Logout;
// Modified from https://github.com/keppelen/react-facebook-login !

import React, { Component, PropTypes } from 'react';


class FacebookLoginHandler extends React.Component {

    state = {
        loginStatus: ""
    };

    /*
        Sets the type of the props to be used
     */
    static propTypes = {
        callback: PropTypes.func.isRequired,
        appId: PropTypes.string.isRequired,
        xfbml: PropTypes.bool,
        cookie: PropTypes.bool,
        reAuthenticate: PropTypes.bool,
        scope: PropTypes.string,
        textButton: PropTypes.string,
        typeButton: PropTypes.string,
        autoLoad: PropTypes.bool,
        size: PropTypes.string,
        fields: PropTypes.string,
        cssClass: PropTypes.string,
        version: PropTypes.string,
        icon: PropTypes.any,
        language: PropTypes.string,
        onClick: PropTypes.func,
        loggedInStatus: PropTypes.string,
    };

    /*
        Default props to be used with JSX, e.g. <button>{textButton}</button>
     */
    static defaultProps = {
        textButton: 'Login with Facebook',
        loginButton: 'Login with Facebook',
        logoutButton: 'Logout',
        typeButton: 'button',
        scope: 'public_profile',
        xfbml: false,
        cookie: false,
        reAuthenticate: false,
        size: 'metro',
        fields: 'name',
        cssClass: 'kep-login-facebook',
        version: 'v2.5',
        language: 'en_US',
        loggedInStatus: 'unknown'
    };


    componentDidMount() {
        const {appId, xfbml, cookie, version, autoLoad, language, loggedInStatus} = this.props;

        this.state = {
            loginStatus: this.props.loggedInStatus
        };

        let root = document.getElementById('fb-root');

        if (!root) {
            root = document.createElement('div');
            root.id = 'fb-root';
            document.body.appendChild(root);
        }
        window.fbAsyncInit = () => {
            window.FB.init({
                version: `${version}`,
                appId,
                xfbml,
                cookie,
            });
            // Now that we've initialized the JavaScript SDK, we call
            // FB.getLoginStatus().  This function gets the state of the
            // person visiting this page and can return one of three states to
            // the callback you provide.  They can be:
            //
            // 1. Logged into your app ('connected')
            // 2. Logged into Facebook, but not your app ('not_authorized')
            // 3. Not logged into Facebook and can't tell if they are logged into
            //    your app or not.
            //
            // These three cases are handled in the callback function.

            if (autoLoad || window.location.search.includes('facebookdirect')) {
                window.FB.getLoginStatus(this.checkLoginState);
            }
        };

        // Load the SDK asynchronously
        ((d, s, id) => {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/all.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }

    // Check the login state of the facebook api session, and sets the response callback from the api
    checkLoginState = (response) => {
        if (response.authResponse) {
            this.responseApi(response.authResponse);
            this.setState({
                loginStatus: 'ok'
            })
        } else {
            if (this.props.callback) {
                this.props.callback({status: response.status});
            }
            this.setState({
                loginStatus: 'unknown'
            })
        }
    };

    /*
        This is the call to and the response from the facebook api.
        Uses the fields in props to call the api:
        A typical facebook login api call is fb/me?fields=email,picture,friends
     */
    responseApi = (authResponse) => {
        window.FB.api('/me', {fields: this.props.fields}, (me) => {
            Object.assign(me, authResponse);
            this.props.callback(me);
        });
    };

    // Handles the click function of the login button
    click = () => {
        const {scope, appId, onClick, reAuthenticate} = this.props;

        if (typeof onClick === 'function') {
            onClick();
        }
        /*
         let isMobile = false;

         try {
         isMobile = ((window.navigator && window.navigator.standalone) || navigator.userAgent.match('CriOS') || navigator.userAgent.match('mobile'));
         } catch (ex) {
         // continue regardless of error
         }
         */
        const params = {
            client_id: appId,
            redirect_uri: window.location.href,
            state: 'facebookdirect',
            scope,
        };

        if (reAuthenticate) {
            params.auth_type = 'reauthenticate';
        }
        /*
         if (isMobile) {
         window.location.href = `https://www.facebook.com/dialog/oauth?${objectToParams(params)}`;
         } else {
         window.FB.login(this.checkLoginState, { scope, auth_type: params.auth_type });
         }
         */
        window.FB.login(this.checkLoginState, {scope, auth_type: params.auth_type});
    };


    // Handles the click function of the logout button
    clickout = () => {
        window.FB.logout();
        window.location.href = "http://localhost:3000";
    };

    getLoggedInStatus = () => {
        return this.state.loginStatus;
    };


    // The react render function which renders the login/logout buttons and returns them to the component call
    render(){
        const {logoutButton, loginButton} = this.props;
        let theButton;
        if (this.getLoggedInStatus() === 'unknown'){
            theButton = (
                <button
                    className="fb-login-button"
                    onClick={this.click}
                >{loginButton}
                </button>
            )
        }
        else {
            theButton = (
                <button
                    className="fb-logout-button"
                    onClick={this.clickout}
                >{logoutButton}
                </button>
            )
        }
        return (
            <span>
                {theButton}
            </span>
        );
    }
}

export default FacebookLoginHandler;

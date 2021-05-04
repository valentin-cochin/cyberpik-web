import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DOWNLOAD, EFFECT, FORGET_PASSWORD, GALLERY, GENERAL_CONDITIONS, HOME_PAGE, IMPORT, PHOTO_DETAILS, PREVIEW, PROFILE, PROFILE_MANAGER, PROJECT_PRESENTATION, SIGN_IN, SIGN_UP } from '../config/url-constants';
import './index.scss';
import { default as NoMatch } from './pages/404';
import Download from './pages/download';
import Effect from './pages/effect';
import ForgetPassword from './pages/forget-pwd';
import Gallery from './pages/gallery';
import GeneralConditions from './pages/general-conditions';
import Home from './pages/home';
import Import from './pages/import';
import PhotoDetails from './pages/photo-details';
import Preview from './pages/preview';
import ProjectPresentation from './pages/project-presentation';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import UserAccountModify from './pages/user-account-modify';
import UserAccountView from './pages/user-account-view';
import registerServiceWorker from './registerServiceWorker';

class Root extends React.Component {
    render() {
        return (
            <BrowserRouter basename={'/'} >
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}${HOME_PAGE}`} component={Home} />
                    <Route path={`${process.env.PUBLIC_URL}${DOWNLOAD}`} component={Download} />
                    <Route path={`${process.env.PUBLIC_URL}${GENERAL_CONDITIONS}`} component={GeneralConditions} />
                    <Route path={`${process.env.PUBLIC_URL}${FORGET_PASSWORD}`} component={ForgetPassword} />
                    <Route path={`${process.env.PUBLIC_URL}${EFFECT}`} component={Effect} />
                    <Route path={`${process.env.PUBLIC_URL}${GALLERY}`} component={Gallery} />
                    <Route path={`${process.env.PUBLIC_URL}${IMPORT}`} component={Import} />
                    <Route path={`${process.env.PUBLIC_URL}${PHOTO_DETAILS}`} component={PhotoDetails} />
                    <Route path={`${process.env.PUBLIC_URL}${PREVIEW}`} component={Preview} />
                    <Route path={`${process.env.PUBLIC_URL}${PROFILE}`} component={UserAccountView} />
                    <Route path={`${process.env.PUBLIC_URL}${PROFILE_MANAGER}`} component={UserAccountModify} />
                    <Route path={`${process.env.PUBLIC_URL}${PROJECT_PRESENTATION}`} component={ProjectPresentation} />
                    <Route path={`${process.env.PUBLIC_URL}${SIGN_IN}`} component={SignIn} />
                    <Route path={`${process.env.PUBLIC_URL}${SIGN_UP}`} component={SignUp} />
                    <Route component={NoMatch} />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();

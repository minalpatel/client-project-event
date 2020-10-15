import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/homepage'
import Faqs from './pages/faq';
import ContactusPage from "./pages/contactus";
import LoginBox from "./components/login";
import RegisterBox from "./components/register";
import history from './components/history';
import AboutUs from './components/aboutUs'
import RegisterEvent from './components/registerEvent'
import AdminLogin from './AdminPanel/adminLogin'
import AdminFaqs from './AdminPages/displayfaqs';
import DisplayContact from './AdminPages/displaycontact';
import Displayusers from './AdminPages/displayusers';
import DisplayCompany from './AdminPages/displaycompany';
import UpdateCompany from './AdminPanel/updatecompany';
import DeleteCompany from './AdminPanel/deletecompany';
import NewCompany from './AdminPages/newcompany';
import NewFAQ from './AdminPages/newfaq';
import UpdateFAQ from './AdminPanel/updatefaq';
import DeleteFAQ from './AdminPanel/deletefaq';
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={LoginBox} />
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/faqs" component={Faqs} />
                    <Route exact path="/contactus" component={ContactusPage} />
                    <Route path="/Register" exact component={RegisterBox} />
                    <Route path="/aboutUs" exact component={AboutUs} />
                    <Route path="/registerEvent" exact component={RegisterEvent} />

		   {/* ADMIN ROUTES */}

                    <Route exact path="/adminLogin"  component={AdminLogin} />                   
                    <Route exact path="/admin/faqs/update/:id"  component={UpdateFAQ} /> 
                    <Route exact path="/admin/faqs" component={AdminFaqs} />
                    <Route exact path="/admin/contactus" component={DisplayContact} />
                    <Route exact path="/admin/user"  component={Displayusers} />
                    <Route exact path="/admin/company" component={DisplayCompany} /> 
                    <Route exact path="/admin/company/update/:id"  component={UpdateCompany} /> 
                    <Route exact path="/admin/company/delete/:id" component={DeleteCompany} /> 
                    <Route exact path="/admin/newcompany"  component={NewCompany} /> 
                    <Route exact path="/admin/newfaq" component={NewFAQ} /> 
                    <Route exact path="/admin/faqs/delete/:id" component={DeleteFAQ} /> 
                </Switch>
            </Router>
        )
    }
}
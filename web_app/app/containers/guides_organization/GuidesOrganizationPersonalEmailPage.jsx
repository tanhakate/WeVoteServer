import axios from 'axios';
import BottomContinueNavigation from "../../components/base/BottomContinueNavigation";
import ListTitleNavigation from "../../components/base/ListTitleNavigation";
import React from "react";
import { Button, ButtonToolbar, Input, ProgressBar } from "react-bootstrap";
import { Link } from "react-router";

export default class GuidesOrganizationPersonalEmailPage extends React.Component {
	constructor(props) {
		super(props);
	}

	static getProps() {
		return {};
	}

	render() {
	    return (
<div>
    <ListTitleNavigation header_text={"Create Voter Guide"} back_to_on={true} back_to_text={"< Back"} link_route={'guides_organization_add_existing_link'} />
	<div className="container-fluid well well-90">
        <h4>Verify Email</h4>
        <ProgressBar striped bsStyle="success" now={30} label="%(percent)s% Complete" />
        <p>To create a public voter guide, we need to verify your email address.
            This provides protection from spammers.<br />
            <span className="small">This email address will not be shared with the public.</span></p>
		<form className="form-horizontal">
			<Input type="text" label="Your&nbsp;Email" name="existing_link" labelClassName="col-xs-3" wrapperClassName="col-xs-9"
				   placeholder="Enter an email address you can verify" /><br />
			<br />
			<br />
			<br />
		</form>
	</div>
    <BottomContinueNavigation link_route_continue={'guides_organization_email_verify'} continue_text={'Continue >'} link_route_cancel={'guides_voter'} cancel_text={"cancel"} />
</div>
		);
	}
}

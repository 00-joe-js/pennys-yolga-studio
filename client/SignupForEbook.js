import React from "react";
import axios from "axios";

class SignupForm extends React.Component {
    constructor() {
        super();
        this.state = { emailTyped: "", errorOccured: false, emailSubmittedSuccessfully: false };
        this.updateTypedEmailState = this.updateTypedEmailState.bind(this);
        this.submitEmailToServer = this.submitEmailToServer.bind(this);
    }
    updateTypedEmailState(inputEvent) {
        this.setState({
            emailTyped: inputEvent.target.value,
            errorOccured: false, // remove any currently displaying error.
            emailSubmittedSuccessfully: false, // remove any success message if they are typing something new too
        });
    }
    async submitEmailToServer(formSubmitEvent) {
        formSubmitEvent.preventDefault();
        try {
            const { status } = await axios.post(
                "/api/want-ebook",
                { email: this.state.emailTyped } // this will be req.body to server.
            );
            if (status === 201) {
                this.setState({
                    emailSubmittedSuccessfully: true, // Shows success text.
                    errorOccured: false,
                    emailTyped: "" // Empty out the text input
                });
            }
        } catch (e) {
            this.setState({ errorOccured: true }); // show general error
        }
    }
    render() {
        const {emailTyped, errorOccured, emailSubmittedSuccessfully} = this.state;
        return (
            <div id="ebook-signup-form">
                <h3>"Poses & Positions with Penny" eBook Sign-up</h3>
                <h5>Sign up for more yolga tips! It's free so <strong>NO EXCUSE</strong></h5>
                <form onSubmit={this.submitEmailToServer}>
                    {errorOccured && <h4>Um, something went wrong. Maybe I already have your email? make sure you spelled it right tho. I'll ask my dad sorry :(</h4>}
                    {emailSubmittedSuccessfully && <h4>Wow, thanks for signing up! you won't regret it i promise. you will be flexible in no time, flexible like cheese</h4>}
                    <input type="text" value={emailTyped} onChange={this.updateTypedEmailState} placeholder="Your e-mail pwease" />
                    <div>
                        <button type="submit">Gimme dat</button>
                    </div>
                </form>
            </div>
        );

    }
}

export default SignupForm;
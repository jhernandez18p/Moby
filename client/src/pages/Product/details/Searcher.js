import React, { Component } from "react";

class Searcher extends Component {
    render() {
        return (
            <div className="has-background-light" id="is-searcher">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input"></input>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-success" type="text" placeholder="Text input">
                        </input>
                    </div>
                    <p className="help is-success">This username is available</p>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-danger" type="email" placeholder="Email input">
                        </input>
                    </div>
                    <p className="help is-danger">This email is invalid</p>
                </div>

                <div className="field">
                    <label className="label">Subject</label>
                    <div className="control">
                        <div className="select">
                            <select>
                                <option>Select dropdown</option>
                                <option>With options</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Textarea"></textarea>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                            <input type="checkbox" placeholder="I agree to the ">
                            </input>
                        </label>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="radio">
                            <input type="radio" name="question" placeholder="Yes">
                            </input>
                        </label>
                        <label className="radio">
                            <input type="radio" name="question" placeholder="No">
                            </input>
                        </label>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-text">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Searcher;
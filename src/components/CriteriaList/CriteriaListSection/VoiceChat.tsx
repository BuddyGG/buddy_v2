import { Divider } from "semantic-ui-react";
import { Form, Checkbox } from "semantic-ui-react";
import { Component } from "react";
import * as React from "react";

export default class VoiceChat extends Component<any, any> {

    render() {
        return (
            <div className="criteria">
                <Divider className="criteria-header" inverted horizontal>Voice Chat</Divider>

                <Form.Group className="no-margin criteria-content" inline>
                    <Form.Field inline>
                        <Checkbox
                            label="YES"
                            checked={this.props.voiceChat.YES}
                            onChange={this.props.onChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Checkbox
                            label="NO"
                            checked={this.props.voiceChat.NO}
                            onChange={this.props.onChange}
                        />
                    </Form.Field>
                </Form.Group>
            </div>
        );
    }
}
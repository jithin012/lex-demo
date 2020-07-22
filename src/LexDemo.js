import React, { Component } from 'react';
import Amplify, { Interactions } from 'aws-amplify';
import 'react-chatbox-component/dist/style.css';
import {ChatBox} from 'react-chatbox-component';

import awsconfig from './awsConfig';

Amplify.configure(awsconfig);

async function demo() {
    
}

demo();
const messages = [
    {
      "text": "Hey! I am Sculptor bot, How can I help you?",
      "id": "1",
      "sender": {
        "name": "Ironman",
        "uid": "bot",
        "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
      },
    },
  ]
  const user = {
    "uid" : "bot"
  }


class LexDemo extends Component {
    state = {
        messages: [
            {
              "text": "Hey! I am Sculptor bot, How can I help you?",
              "id": "1",
              "sender": {
                "name": "Ironman",
                "uid": "bot",
                "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
              },
            },
        ]
    }
    onSubmitUserQuery = async (userQuery) => {
        const msg = {
            "text": userQuery,
            "id": "1",
            "sender": {
              "name": "user",
              "uid": "jit",
              "avatar": "https://avatars0.githubusercontent.com/u/13549435?v=4",
            },
        }
        messages.push(msg);
        this.setState({messages});
        const response =  await Interactions.send("SculptorBot", userQuery);
        this.onBotResponse(response.message)
    }
    onBotResponse = (message) => {
        const { messages } = this.state
        const msg = {
            "text": message,
            "id": "1",
            "sender": {
              "name": "Ironman",
              "uid": "bot",
              "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
            },
        }
        messages.push(msg);
        this.setState({messages});
    }

  render() {
    return (
        <ChatBox
            messages={messages}
            user={user}
            onSubmit={this.onSubmitUserQuery}
        />
    );
  }
}

export default LexDemo;
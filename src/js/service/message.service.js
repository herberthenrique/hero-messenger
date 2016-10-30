import data from '../data/messages';

export default class MessageService {
  constructor() {
    this.messages = data;
  }

  getAllMessages() {
    return this.messages;
  }

  getConversation(id) {
    return this.messages.people.filter(person => person.id === id)[0];
  }

  send(message, recipient) {
    // actually, sender data should come from logged user and stuff
    const now = new Date();
    const content = {
      time: now.getTime(),
      sender: {
        name: 'Clark Kent',
        id: 1,
      },
      content: message,
    };

    // this part should go to server
    this.getConversation(recipient).messages.push(content);

    return content;
  }
}

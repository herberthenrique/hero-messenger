/* global document */
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import templateMessage from 'pug!../../templates/message.pug';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import templateContainer from 'pug!../../templates/messenger.pug';
import MessageService from '../service/message.service';
import * as messageHelper from '../helper/message.helper';
import * as helper from '../helper/general.helper';

export default class MessageController {
  constructor() {
    this.id = 1;
    this.service = new MessageService();
    this.activate();
  }

  activate() {
    const activeMessage = this.service.getConversation(this.id);
    helper.appendHtmlWithTemplate(templateContainer, 'app', activeMessage);
    this.addList(activeMessage.messages);
  }

  // send(message) {

  // }

  // eslint-disable-next-line class-methods-use-this
  addList(messages) {
    const formattedMessages = messages.map(message => messageHelper.formatMessage(message));
    formattedMessages.forEach(formattedMessage => helper.appendHtmlWithTemplate(templateMessage, 'messages-container', formattedMessage));
  }
}

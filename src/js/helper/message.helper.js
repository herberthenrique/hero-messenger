/* eslint-disable import/prefer-default-export */

import Moment from 'moment';

export function formatMessage(message) {
  const time = new Moment(message.time);
  const formattedMessage = message;
  formattedMessage.formattedTime = time.calendar();
  return formattedMessage;
}

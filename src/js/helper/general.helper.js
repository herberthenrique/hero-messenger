/* global document */
/* eslint-disable import/prefer-default-export */

export function appendHtmlWithTemplate(template, parent, data) {
  const html = template(data);
  const div = document.createElement('div');
  div.innerHTML = html;
  document.getElementById(parent).appendChild(div);
}

export default function canonizer(url) {
  const regex = new RegExp('@?(https?:)?(\/\/)?((www.)*(telegram|vk|vkontakte)[^\/]*\/)?([a-zA-Z0-9]*)', 'i');
  const username = url.match(regex);

  //return '@' + username[6];
  return username;
}

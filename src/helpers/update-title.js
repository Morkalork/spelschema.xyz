export default (newTitle) => {

  document.title = newTitle;
  document.querySelector('meta[property="og:title"]').setAttribute('content', newTitle);
}
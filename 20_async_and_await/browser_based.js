/**
 * There are many existing Promise APIs built into browsers,
 * such as fetch, which returns a Promise and needs the keyword
 * then to do something when the Promise is complete.
 */
fetch('https://api.github.com/users/wesbos').then(res => {
  return res.json(); // This returns another Promise.
}).then(res => {
  console.log(res);
}).catch(err => {
  console.error(err);
});

/**
 * Here's another for accessing the user's webcam. The getUserMedia
 * method returns a Promise and awaits the user to allow access.
 */
const video = document.querySelector('.webcam');
navigator.mediaDevices.getUserMedia({ video: true }).then(mediaStream => {
  video.srcObject = mediaStream;
  video.load();
  video.play();
}).catch(err => {
  console.error(err);
})

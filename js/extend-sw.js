workbox.routing.registerNavigationRoute("/index.html");

self.addEventListener('message', event => {
  sendDesktopNotification(event.data.msg);
});

window.sendDesktopNotification = (text) => {

  if (Notification.permission !== 'granted') return;

  let notification = new Notification('Your Page Title', {
    icon: 'https://your_domain.com/your_web_page_image_icon.png',
    body: text,
    tag: 'soManyNotification'
  });

  notification.onclick = function() {
    parent.focus();
    window.focus(); //just in case, older browsers
    this.close();
  };

  setTimeout(notification.close.bind(notification), 5000);

};
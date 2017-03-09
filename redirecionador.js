function redirecionador(url, options) {
  var defaultOptions = {
    timeout: 5,
    countdownElementId: 'countdown-message',
    countdownTemplate: 'Você será redirecionado em #s',
    onlyFirstVisit: true
  };

  options = options || {};
  for (var option in defaultOptions) {
    options[option] = options[option] || defaultOptions[option]
  }

  if (options.onlyFirstVisit) {
    function createCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    if (readCookie('visited')) {
      return;
    }
    createCookie('visited', 'visited', 365)
  }

  var element = document.getElementById(options.countdownElementId);
  var secondsLeft = options.timeout;

  function updater() {
    if (secondsLeft >= 0) {
      element.innerHTML = options.countdownTemplate.replace('#', secondsLeft.toString());
      secondsLeft = secondsLeft - 1;
      setTimeout(updater, 1000);
    } else {
      window.location = url
    }
  }

  window.addEventListener('mousemove', updater, {once: true});
}

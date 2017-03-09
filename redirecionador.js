function redirecionador(url, options) {
  var defaultOptions = {
    timeout: 5,
    countdownElementId: 'countdown-message',
    countdownTemplate: 'Você será redirecionado em #s'
  };
  options = options || {};
  for (var option in defaultOptions) {
    options[option] = options[option] || defaultOptions[option]
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

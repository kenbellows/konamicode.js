<script>

(function(wnd) {
  var __konami = wnd.konami,
        konami;

  function PlaySound(path) {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', path);
    audioElement.play();
  }
  
  function noConflict() {
    if (wnd.konami == konami) {
      wnd.konami = __konami;
    }
    return konami;
  }
  
  function konamiCode(config) {
    var events = [];
    if (config.sound) events.push(function() { playSound(config.sound); });
    var callback;
    if (callback = (config.fn || config.callback)) events.push(callback);
    
    wnd.document.attachEvent
    if (wnd.addEventListener) wnd.addEventListener('keydown', runEvents, true);
    
    function runEvents() {
        var konamiSequence = [38,38,40,40,37,39,37,39,66,65],
            ksHits = [];
        registerFn("keydown",function(e) {
          kkeys.push(e.keyCode);
          if(kkeys.toString().indexOf(konami)>=0)
              {
                  PlaySound('hadouken.wav');
                  flashBackground();
              }
        }, true);
    }
  }
  
  
  konami = {
    noConflict: noConflict,
  };
  
  wnd.konami = konami;
})(window);


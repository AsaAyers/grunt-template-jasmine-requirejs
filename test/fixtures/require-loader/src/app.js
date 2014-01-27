define(function() {

  var started = false;

  return {
    fixture: 'require-loader',
    start: function() {
      started = true;
    },
    isStarted: function() {
      return started;
    }
  };
});

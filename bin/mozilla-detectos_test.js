suite('detectos', function() {
  var expected = require('../detectos')(),
      exec = require('child_process').exec,
      assert = require('assert');

  test('mozilla-detect', function(done) {
    exec(__dirname + '/mozilla-detectos', function(err, stdout) {
      if (err) return done(err);
      assert(stdout.toString().indexOf(expected) !== -1);
      done();
    });
  });
});

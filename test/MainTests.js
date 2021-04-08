var assert = require('assert');
var ytblocker = require('../YTBlocker/ytblocker.js').ytblocker;

describe('YTBlocker', function() {
  describe('#Cancel()', function() {
    it('Should return false when no string was inserted', function() {
        var input = 
        {
            method: "GET",
            url: ""
        };
        var response = ytblocker.cancel(input);
      assert.strictEqual(response.cancel, null);
    });

    it('Should return false when string with no ad in it is found', function() {
        var input = 
        {
            method: "GET",
            url: "https://stackoverflow.com/questions/62785529/how-to-configure-mocha-in-vscode-for-debugging"
        };
        var response = ytblocker.cancel(input);
      assert.strictEqual(response.cancel, null);
    });

    it('Should return true when string with ad in it is found', function() {
        var input = 
        {
            method: "GET",
            url: "https://googleads.g.doubleclick.net/pagead/id"
        };
        var response = ytblocker.cancel(input);
      assert.notStrictEqual(response.cancel, null);
    });

    it('Should return false when ad value is in a query', function() {
        var input = 
        {
            method: "GET",
            url: "https://docs.unity3d.com/ScriptReference/30_search.html?q=ads"
        };
        var response = ytblocker.cancel(input);
      assert.strictEqual(response.cancel, null);
    });
  });
});

define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');

    function TweetView() {
        View.apply(this, arguments);

        this.rootMod = new Modifier({
            size: [undefined, 100]        
        });

        var backgroundClass = this.options.index % 2 ? 'light-gray' : 'lightest-gray';

        this.tweet = new Surface({
            content: this.options.tweet,
            classes: ['tweet', backgroundClass]
        });

        this.add(this.rootMod).add(this.tweet);
    }

    TweetView.prototype = Object.create(View.prototype);
    TweetView.prototype.constructor = TweetView;

    TweetView.DEFAULT_OPTIONS = {
        index: undefined,
        tweet: undefined,
        user: undefined,
        timestamp: undefined
    };

    module.exports = TweetView;
});

define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Scrollview = require('famous/views/Scrollview');
    var ContainerSurface = require('famous/surfaces/ContainerSurface');

    var TweetView = require('views/TweetView');

    function FeedView() {
        View.apply(this, arguments);

        _createScrollview.call(this);
        _addTweets.call(this);
    }

    FeedView.prototype = Object.create(View.prototype);
    FeedView.prototype.constructor = FeedView;

    FeedView.DEFAULT_OPTIONS = {
        tweetData: []
    };

    function _createScrollview() {
        this._feed = new Scrollview({
            groupScroll: true
        });

        var container = new ContainerSurface({
            properties: {
                overflow: 'hidden'
            }
        });

        this.add(container);
        container.add(this._feed);
    }

    function _addTweets() {
        var tweets = [];

        for (var i = 0; i < this.options.tweetData.length; i++) {
            var tweetInfo = this.options.tweetData[i];
            tweetInfo.index = i;
            tweets.push(new TweetView(tweetInfo));
        }

        this._feed.sequenceFrom(tweets);
    }

    module.exports = FeedView;
});

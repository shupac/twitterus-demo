define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var GridLayout = require('famous/views/GridLayout');

    function ButtonBar() {
        View.apply(this, arguments);

        this._layout;
        this._buttons = [];

        _createLayout.call(this);
        _createButtons.call(this);
    }

    ButtonBar.prototype = Object.create(View.prototype);
    ButtonBar.prototype.constructor = ButtonBar;

    ButtonBar.DEFAULT_OPTIONS = {
        numButtons: 3
    };

    function _createLayout() {
        this._layout = new GridLayout({
            dimensions: [this.options.numButtons, 1]
        });

        this.add(this._layout);
    }

    function _createButtons() {
        for (var i = 0; i < this.options.numButtons; i++) {
            var button = new Surface({
                content: i + "",
                properties: {
                    backgroundColor: "hsl(" + (i * 360 / this.options.numButtons) + ", 100%, 50%)"
                }
            });

            this._buttons.push(button);
        }

        this._layout.sequenceFrom(this._buttons);
    }

    module.exports = ButtonBar;
});

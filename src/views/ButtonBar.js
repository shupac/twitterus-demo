define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var GridLayout = require('famous/views/GridLayout');

    function ButtonBar() {
        View.apply(this, arguments);

        this._layout;
        this._buttons = [];
        this._state;

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
                content: i + '',
                properties: {
                    backgroundColor: 'hsl(' + (i * 360 / this.options.numButtons) + ', 100%, 50%)'
                }
            });

            this._buttons.push(button);

            button.on('click', this.selectState.bind(this, i));
        }

        this._layout.sequenceFrom(this._buttons);
    }

    ButtonBar.prototype.selectState = function(index) {
        if (index === this._state) return;
        this._eventOutput.emit('stateChange', index);
        this._state = index;
    };

    module.exports = ButtonBar;
});

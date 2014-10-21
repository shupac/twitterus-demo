define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var GridLayout = require('famous/views/GridLayout');

    var ButtonView = require('views/ButtonView');

    function ButtonBar() {
        View.apply(this, arguments);

        this._layout;
        this._buttons = [];
        this._state;

        _createLayout.call(this);
        _createButtons.call(this);

        this._eventInput.on('buttonClick', this.selectState.bind(this));
    }

    ButtonBar.prototype = Object.create(View.prototype);
    ButtonBar.prototype.constructor = ButtonBar;

    ButtonBar.DEFAULT_OPTIONS = {
        sections: undefined
    };

    function _createLayout() {
        this._layout = new GridLayout({
            dimensions: [this.options.sections.length, 1]
        });

        this.add(this._layout);
    }

    function _createButtons() {
        for (var i = 0; i < this.options.sections.length; i++) {
            var buttonInfo = this.options.sections[i].button;
            buttonInfo.index = i;
            var button = new ButtonView(buttonInfo);

            this._buttons.push(button);
            this.subscribe(button);
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

define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Transitionable = require('famous/transitions/Transitionable');
    var SpringTransition = require('famous/transitions/SpringTransition');

    Transitionable.registerMethod('spring', SpringTransition);

    function ButtonView() {
        View.apply(this, arguments);

        this.toggleState = false;
        this.buttonScale = new Transitionable(1);

        _createButton.call(this);

        this.buttonSurface.on('click', function() {
            this._eventOutput.emit('buttonClick', this.options.index);

            this.buttonScale.set(0.7);
            this.buttonScale.set(1, {
                method: 'spring',
                period: 300,
                dampingRatio: 0.5
            });
        }.bind(this));
    }

    ButtonView.prototype = Object.create(View.prototype);
    ButtonView.prototype.constructor = ButtonView;

    ButtonView.DEFAULT_OPTIONS = {
        index: undefined,
        iconUrl: undefined,
        label: undefined
    };

    function _createButton() {
        this.buttonModifier = new Modifier({
            origin: [0.5, 0.5],
            align: [0.5, 0.5],
            opacity: 0.5,
            transform: function() {
                var scale = this.buttonScale.get();
                return Transform.scale(scale, scale, 1);
            }.bind(this)
        });

        this.buttonSurface = new Surface({
            size: [true, true],
            content: '<img src="' + this.options.iconUrl + '" width="20"><p>' + this.options.label + '</p>',
            classes: ['button']
        });

        this.add(this.buttonModifier).add(this.buttonSurface);
    }

    ButtonView.prototype.toggle = function() {
        var opacity = this.toggleState ? 0.5 : 1;
        this.buttonModifier.opacityFrom(opacity);
        this.toggleState = !this.toggleState;
    };

    module.exports = ButtonView;
});

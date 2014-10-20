define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');

    var ButtonBar = require('views/ButtonBar');

    function AppView() {
        View.apply(this, arguments);

        this._layout;

        _createLayout.call(this);
        _createHeaders.call(this);
        _createButtonBar.call(this);
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = {
        headerSize: 44,
        footerSize: 60
    };

    function _createLayout() {
        this._layout = new HeaderFooterLayout({
            headerSize: this.options.headerSize,
            footerSize: this.options.footerSize
        });

        this.add(this._layout);
    }

    function _createHeaders() {
        var background = new Surface({
            properties: {
                backgroundColor: '#3be'
            }
        });

        this._layout.header.add(background);
    }

    function _createButtonBar() {
        this.buttonBar = new ButtonBar();

        this._layout.footer.add(this.buttonBar);
    }

    module.exports = AppView;
});

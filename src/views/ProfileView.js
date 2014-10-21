define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');

    function ProfileView() {
        View.apply(this, arguments);

        _createBackground.call(this);
        _createProfilePic.call(this);
        _createName.call(this);
    }

    ProfileView.prototype = Object.create(View.prototype);
    ProfileView.prototype.constructor = ProfileView;

    ProfileView.DEFAULT_OPTIONS = {};

    function _createBackground() {
        this.add(new Surface({
            classes: ['lightest-gray']
        }));
    }

    function _createProfilePic() {
        this.profileMod = new Modifier({
            transform: Transform.translate(0, 25, 1)
        });

        var profilePic = new ImageSurface({
            size: [200, 200],
            content: 'content/images/shu.jpg',
            properties: {
                border: '7px solid #e9e9e9',
                borderRadius: '10px'
            }
        });

        this.add(this.profileMod).add(profilePic);
    }

    function _createName() {
        this.nameMod = new Modifier({
            transform: Transform.translate(0, 240, 1)
        });

        var name = new Surface({
            size: [true, true],
            content: 'Shu Liu<br>resonanc3.io',
            properties: {
                textAlign: 'center',
                fontSize: '20px',
                fontWeight: '600'
            }
        });

        this.add(this.nameMod).add(name);
    }

    module.exports = ProfileView;
});

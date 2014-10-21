define(function(require, exports, module) {
    var Transform = require('famous/core/Transform');
    var Easing = require('famous/transitions/Easing');

    module.exports = {
        headerSize: 44,
        footerSize: 60,
        sections: [
            {
                title: 'Twitterus',
                button: {
                    label: 'Home',
                    iconUrl: 'content/images/home.svg'                    
                }
            },
            {
                title: 'Shu Liu',
                button: {
                    label: 'Profile',
                    iconUrl: 'content/images/user.svg'                    
                }
            },
            {
                title: 'Messages',
                button: {
                    label: 'Messages',
                    iconUrl: 'content/images/messages.svg'                    
                }
            }
        ],
        transitions: {
            header: {
                inTransform: Transform.translate(0, -100, 0),
                outTransform: Transform.translate(0, -100, 0),
                inTransition: { curve: Easing.outExpo, duration: 350},
                outTransition: { curve: Easing.inQuad, duration: 250},
                inOpacity: 1,
                outOpacity: 0,
                overlap: false
            },
            content: {
                inTransform: Transform.translate(500, 0, -800),
                outTransform: Transform.thenMove(Transform.rotateY(1.8), [-200, 0, -500]),
                inTransition: { curve: Easing.outExpo, duration: 350},
                outTransition: { curve: Easing.inQuad, duration: 250},
                inOrigin: [0.5, 0],
                inAlign: [0.5, 0],
                outOrigin: [0.5, 0],
                outAlign: [0.5, 0],
                showOrigin: [0.5, 0],
                showAlign: [0.5, 0],
                inOpacity: 0,
                outOpacity: 0,
                overlap: false
            }
        }
    };
});

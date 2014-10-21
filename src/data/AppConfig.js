define(function(require, exports, module) {
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
            header: {},
            content: {}
        }
    };
});

"use strict";
exports.__esModule = true;
var npm_git_publish_1 = require("npm-git-publish");
npm_git_publish_1["default"]('/home/felix/projects/dn3010/react-native-webrtc', 'https://github.com/dn3010/react-native-webrtc')
    .then(function (result) {
    // respond to whether publishing occurred
    // (e.g. print something to stdout)
    console.log('%j', result.conclusion);
});

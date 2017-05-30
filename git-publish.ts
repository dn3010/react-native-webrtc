import publish from 'npm-git-publish';

publish('/home/felix/projects/dn3010/react-native-webrtc', 'https://github.com/dn3010/react-native-webrtc')
    .then(result => {
        // respond to whether publishing occurred
        // (e.g. print something to stdout)
        console.log('%j', result.conclusion);
    });

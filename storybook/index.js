import './rn-addons';

import {withKnobs} from '@storybook/addon-knobs';
import {addDecorator, configure, getStorybookUI} from '@storybook/react-native';
import {AppRegistry} from 'react-native';

import {loadStories} from './storyLoader';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  onDeviceUI: false,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
AppRegistry.registerComponent('storybookArticle', () => StorybookUIRoot);

export default StorybookUIRoot;

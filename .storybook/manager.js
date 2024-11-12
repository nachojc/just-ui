import { addons } from '@storybook/manager-api';
import justTheme from './addons/JustTheme';

addons.setConfig({
  theme: justTheme,
});

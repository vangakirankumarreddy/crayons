const screenshotTest = require('../../screenshotTest');
const setup = {
  checkbox: [
    'default',
    'checked',
    'disabled',
    'checked-disabled',
    'with-label',
    'disabled-with-label',
    'with-description-and-label',
    'with-description-and-label-disabled',
  ],
};
const DELAY = 0;
screenshotTest(setup, DELAY);

const screenshotTest = require('../../screenshotTest-async.js');
const setup = {
  'input': [
    'default',
    'required',
    'disabled',
    'hint-text',
    'clear-input',
    'error-state',
    'warning-state',
    'max-length',
    'multiple-inputs',
    'with-icons',
  ],
  'label': ['blue', 'red', 'green', 'yellow', 'grey'],
  'modal': ['default', 'large-modal', 'custom-composition', 'slider'],
  'pagination': ['per-page', 'total', 'page', 'page-total-and-per-page'],
  'pill': [
    'blue',
    'red',
    'green',
    'yellow',
    'grey',
    'custom-icons-or-images',
    'custyom-css-styles',
  ],
  'radio-group': ['default', 'allow-empty'],
  'radio': ['default', 'checked', 'disabled', 'disabled-with-checked'],
  'select-option': ['default', 'selected', 'disabled', 'multiple-options'],
  'select': [
    'default',
    'with-select-options',
    'disabled',
    'readonly',
    'multi-select',
    'with-options-and-selected-key',
  ],
  'skeleton': ['default', 'card-layout'],
  /* 'spinner': ['default', 'small', 'medium', 'large', 'custom-color'], */
  'tab-panel': ['default'],
  'tab': ['default', 'with-html-headers'],
  'tabs': [
    'default',
    'with-box-variant',
    'with-html-headers',
    'with-child-components',
  ],
  'tag': ['default', 'disabled'],
  'textarea': [
    'default',
    'with-placeholder-and-value',
    'with-rows-and-cols',
    'with-label-and-required',
    'with-label-and-required-and-error-state',
    'disabled',
  ],
  'timepicker': [
    'default',
    'default-with-value',
    'interval-specified',
    'format-specified',
    'time-range-and-relatively-small-interval',
    'disabled-timepicker',
  ],
  'toast-message': ['default', 'type', 'position', 'action-link'],
  'toast': ['default', 'type', 'position', 'action-link', 'custom-content'],
  'toggle': ['small', 'medium', 'large'],
  'tooltip': ['default', 'placement', 'trigger', 'html'],
};

const DELAY = 0;
screenshotTest(setup, DELAY);

# fw-textarea



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                               | Type                               | Default     |
| ------------- | ------------- | ------------------------------------------------------------------------- | ---------------------------------- | ----------- |
| `cols`        | `cols`        | Number of columns                                                         | `number`                           | `undefined` |
| `disabled`    | `disabled`    | Indicates that this control is disabled                                   | `boolean`                          | `false`     |
| `label`       | `label`       | The type of control to display. The default type is text.                 | `string`                           | `''`        |
| `maxlength`   | `maxlength`   | Max length of value                                                       | `number`                           | `undefined` |
| `minlength`   | `minlength`   | Min length of value                                                       | `number`                           | `undefined` |
| `name`        | `name`        | The name of the control, which is submitted with the form data.           | `string`                           | `''`        |
| `placeholder` | `placeholder` | Instructional text that shows before the input has a value.               | `string`                           | `undefined` |
| `readonly`    | `readonly`    | If `true`, the user cannot modify the value.                              | `boolean`                          | `false`     |
| `required`    | `required`    | If `true`, the user must fill in a value before submitting a form.        | `boolean`                          | `false`     |
| `rows`        | `rows`        | Number of rows                                                            | `number`                           | `undefined` |
| `state`       | `state`       | The state of the control. Color changes accordingly                       | `"error" \| "normal" \| "warning"` | `'normal'`  |
| `stateText`   | `state-text`  | This text will be displayed below the input box indicating the state/hint | `string`                           | `''`        |
| `value`       | `value`       | The value of the input.                                                   | `string`                           | `''`        |
| `wrap`        | `wrap`        | How the text in the textarea is to be wrapped                             | `"hard" \| "soft"`                 | `'soft'`    |


## Events

| Event      | Description | Type                         |
| ---------- | ----------- | ---------------------------- |
| `fwBlur`   |             | `CustomEvent<void>`          |
| `fwChange` |             | `CustomEvent<any>`           |
| `fwFocus`  |             | `CustomEvent<void>`          |
| `fwInput`  |             | `CustomEvent<KeyboardEvent>` |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the specified `fw-input`. Use this method instead of the global
`input.focus()`.

#### Returns

Type: `Promise<void>`




----------------------------------------------

Built with ❤ at Freshworks
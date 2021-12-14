import { Component, h, Fragment, Prop, State } from '@stencil/core';
import * as Yup from 'yup';

/** incoming props formSchema, initialvalues, validationSchema, initialErrors */
const formSchema = {
  title: 'Test Form',
  name: 'Test Form',
  fields: [
    {
      id: 'first_name_id',
      type: 'input',
      label: 'First Name',
      name: 'first_name',
      position: 1,
      editable: true,
      custom: false,
      inputType: 'text',
      placeholder: 'Enter firstname ...',
      required: true,
      fieldOptions: {},
      fields: [],
    },

    {
      id: 'last_name_id',
      type: 'input',
      label: 'Last Name',
      name: 'last_name',
      position: 1,
      editable: true,
      custom: false,
      inputType: 'text',
      placeholder: 'Enter last name...',
      required: false,
      fieldOptions: {},
      fields: [],
    },

    {
      id: 'email_id',
      type: 'input',
      label: 'Email',
      name: 'email',
      position: 1,
      required: true,
      editable: true,
      custom: false,
      inputType: 'email',
      placeholder: 'Enter email...',
      fieldOptions: {},
      fields: [],
    },

    {
      id: 'description_id',
      type: 'textarea',
      label: 'Description',
      name: 'description',
      position: 1,
      editable: true,
      custom: false,
      inputType: 'textarea',
      placeholder: 'Enter Description...',
      required: true,
      fieldOptions: {},
      fields: [],
    },

    {
      id: 'phone_number_id',
      type: 'input',
      label: 'Phone Number',
      name: 'phone_number',
      position: 1,
      editable: true,
      custom: false,
      required: false,
      inputType: 'tel',
      placeholder: 'Enter...',
      fieldOptions: {},
      fields: [],
    },

    {
      id: 'age_id',
      type: 'input',
      label: 'Age',
      name: 'age',
      position: 1,
      editable: true,
      custom: false,
      required: false,
      inputType: 'number',
      placeholder: 'Enter...',
      fieldOptions: {},
      fields: [],
    },
    {
      id: 'personal_page_link_id',
      type: 'input',
      label: 'Personal Page Link',
      name: 'personal_page_link',
      position: 1,
      required: true,
      editable: true,
      custom: false,
      inputType: 'url',
      placeholder: 'Enter...',
      fieldOptions: {},
      fields: [],
    },
    {
      id: 'income_id',
      parent: null,
      type: 'input',
      label: 'Income',
      name: 'income',
      position: 1,
      editable: true,
      custom: false,
      required: true,
      inputType: 'number',
      placeholder: 'Enter...',
      fieldOptions: {},
      fields: [],
    },
  ],
};

// const initialValues = {
//   first_name: 'skdidiw',
//   email: '',
//   phone_number: '',
//   description: '',
//   age: '',
//   personal_page_link: '',
//   income: '',
// };

const initialValues = {
  age: '',
};

const staticValidationSchema = Yup.object().shape({
  age: Yup.number().max(20, 'max 20').required('Age is req'),
});

// const validationSchema = Yup.object().shape({
//   last_name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .notRequired(),
//   email: Yup.string().email('Invalid email').required('Email is Required'),
//   first_name: Yup.string()
//     .min(2, 'First_name Too Short!')
//     .max(50, 'First_name Too Long!')
//     .when('last_name', (last_name, schema) => {
//       return (
//         last_name &&
//         schema.required(' first name is required if last_name is entered')
//       );
//     }),
//   age: Yup.number().required('Age is Required'),
//   income: Yup.number().required('Income is Required'),
//   personal_page_link: Yup.string()
//     .url('Invalid URL')
//     .required('URL is Required'),
//   phone_number: Yup.string().required('Phone no is Required'),
// });

function mergeSchema(...schemas) {
  const [first, ...rest] = schemas;

  const merged = rest.reduce(
    (mergedSchemas, schema) => mergedSchemas.concat(schema),
    first
  );

  return merged;
}

function createYupSchema(schema, config) {
  const { inputType, required, name } = config;
  let yupType = '';
  switch (inputType) {
    case 'text':
    case 'textarea':
      yupType = 'string';
      break;
    case 'url':
      yupType = 'string';
      break;
    case 'number':
      yupType = 'number';
      break;
    case 'tel':
      yupType = 'string';
      break;
    default:
      yupType = 'string';
  }
  if (!Yup[yupType]) {
    return schema;
  }
  let validator = Yup[yupType]();
  if (required) validator = validator['required'](...[`${name} is required`]);
  else validator = validator['notRequired']();

  if (inputType === 'url')
    validator = validator['url'](...[`Enter a valid url`]);

  if (inputType === 'email')
    validator = validator['email'](...[`Enter a valid Email`]);

  schema[name] = validator;
  return schema;
}

const initialErrors = {
  // email: 'ssss',
};

@Component({
  tag: 'fw-form-wrapper',
  styleUrl: 'form-wrapper.scss',
  shadow: true,
})
export class FormWrapper {
  @Prop() formSchema = formSchema;
  @Prop() initialValues = initialValues;
  @Prop() validationSchema = staticValidationSchema as any;
  @Prop() initialErrors = initialErrors as any;

  @State()
  formValidationSchema;
  @State()
  formInitialValues;
  @State()
  formInitialErrors;

  componentWillLoad(): void {
    const yupSchema = this.formSchema.fields.reduce(createYupSchema, {});

    const dynamicValidationSchema = Yup.object().shape(yupSchema as any);

    this.formValidationSchema = mergeSchema(
      dynamicValidationSchema,
      this.validationSchema
    );

    const dynamicInitialValues = this.formSchema.fields.reduce((acc, field) => {
      return {
        ...acc,
        [field.name]: '',
      };
    }, {});

    this.formInitialErrors = this.initialErrors;
    this.formInitialValues = { ...this.initialValues, ...dynamicInitialValues };
  }

  render() {
    return (
      <fw-form
        initialValues={this.formInitialValues}
        validationSchema={this.formValidationSchema}
        initialErrors={this.formInitialErrors}
        renderer={(props) => {
          const {
            errors,
            formProps,
            groupProps,
            labelProps,
            inputProps,
            touched,
          } = props;
          return (
            <div>
              <form {...formProps} novalidate>
                {formSchema.fields.map((field) => {
                  let cmp = '';
                  switch (field.type) {
                    case 'input':
                      cmp = (
                        <Fragment>
                          <fw-input
                            {...inputProps(field.name)}
                            type={field.inputType}
                            label={field.label}
                            name={field.name}
                            placeholder={field.placeholder}
                            required={field.required}
                          ></fw-input>
                          {touched[field.name] && errors[field.name] && (
                            <label class='error' {...labelProps(field.name)}>
                              {' '}
                              {errors[field.name]}{' '}
                            </label>
                          )}
                        </Fragment>
                      );
                      break;

                    case 'textarea':
                      cmp = (
                        <Fragment>
                          <fw-textarea
                            {...inputProps(field.name)}
                            label={field.label}
                            placeholder={field.placeholder}
                            name={field.name}
                            required={field.required}
                          ></fw-textarea>
                          {touched[field.name] && errors[field.name] && (
                            <label class='error' {...labelProps(field.name)}>
                              {' '}
                              {errors[field.name]}{' '}
                            </label>
                          )}
                        </Fragment>
                      );
                      break;

                    case 'datepicker':
                      cmp = <fw-datepicker></fw-datepicker>;
                      break;
                    case 'timepicker':
                      cmp = <fw-timepicker></fw-timepicker>;
                      break;
                    default:
                      cmp = <p>unknown</p>;
                      break;
                  }
                  return cmp;
                })}
                <br />
                <br />
                <button type='submit'>Submit</button>
              </form>
            </div>
          );
        }}
      ></fw-form>
    );
  }
}

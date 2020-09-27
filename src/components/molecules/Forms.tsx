import {
  CheckboxField,
  CheckboxProps,
  FieldWrapper,
  FieldWrapperProps,
  InputField,
  InputProps,
  Radio as BRadio,
  RadioProps,
  Select as BSelect,
  SelectMenu as BSelectMenu,
  SelectMenuProps,
  SelectProps,
  Switch as BSwitch,
  SwitchProps,
  Textarea as BTextarea,
  TextareaFieldProps,
} from 'bumbag'
import {
  Field,
  FieldProps,
  Form as FormikForm,
  Formik,
  FormikConfig,
  FormikFormProps,
} from 'formik'
import React from 'react'
import NumberFormat, { FormatInputValueFunction } from 'react-number-format'

export interface IFieldProps {
  fieldWrapper?: FieldWrapperProps
}

export interface IForm extends FormikFormProps {
  onSubmit: (data: any) => void
}

const getError = (form: any, name?: string) => {
  return form.touched[`${name}`] && form.errors[`${name}`] && 'danger'
}

const getErrorMessage = (form: any, name?: string) => {
  return form.touched[`${name}`] && form.errors[`${name}`]
}

export const Form = ({ children, ...rest }: FormikConfig<any>) => {
  return (
    <Formik {...rest}>
      <FormikForm>{children}</FormikForm>
    </Formik>
  )
}

export function Input({ fieldWrapper, ...rest }: IFieldProps & InputProps) {
  return (
    <FieldWrapper {...fieldWrapper}>
      <Field size="small" component={InputField.Formik} {...rest} />
    </FieldWrapper>
  )
}

export function FormattedInput({
  fieldWrapper,
  format,
  name,
  onChange,
  ...rest
}: IFieldProps & InputProps & { format: string | FormatInputValueFunction }) {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => {
        return (
          <FieldWrapper
            {...fieldWrapper}
            state={getError(form, name) as any}
            validationText={getErrorMessage(form, name)}
          >
            <NumberFormat
              {...field}
              {...rest}
              customInput={InputField}
              onChange={(e: any) => {
                form.setFieldValue(name || 'Field', e.target.value)
              }}
              format={format}
            />
          </FieldWrapper>
        )
      }}
    </Field>
  )
}

export function Select({ name, fieldWrapper, onChange, ...rest }: IFieldProps & SelectProps) {
  return (
    <FieldWrapper {...fieldWrapper}>
      <Field name={name}>
        {({ field, form }: FieldProps) => {
          return (
            <BSelect
              {...field}
              {...rest}
              size="small"
              state={getError(form, name)}
              placeholder="Seçiniz"
              onChange={(e: any) => {
                onChange && onChange(e)
                form.setFieldValue(name || 'Field', e.target.value)
              }}
            />
          )
        }}
      </Field>
    </FieldWrapper>
  )
}

export function SelectMenu({
  name,
  fieldWrapper,
  value,
  onChange,
  ...rest
}: Partial<IFieldProps & SelectMenuProps & { name: string; onChange: any }>) {
  return (
    <FieldWrapper {...fieldWrapper}>
      <Field name={name} value={value}>
        {({ field, form }: FieldProps) => {
          return (
            <BSelectMenu
              {...field}
              {...rest}
              searchInputProps={{
                placeholder: 'Arama Yap',
              }}
              state={getError(form, name)}
              disableClear
              placeholder="Seçiniz"
              onChange={(data: any) => {
                onChange && onChange(data.value, data)
                form.setFieldValue(name || 'Field', data)
              }}
            />
          )
        }}
      </Field>
    </FieldWrapper>
  )
}

export function Checkbox({ name, fieldWrapper, ...rest }: IFieldProps & CheckboxProps) {
  return (
    <FieldWrapper {...fieldWrapper}>
      <Field component={CheckboxField.Formik} {...rest} />
    </FieldWrapper>
  )
}

export function Radio({ name, fieldWrapper, ...rest }: IFieldProps & RadioProps) {
  return (
    <FieldWrapper {...fieldWrapper}>
      <Field name={name}>{({ field }: FieldProps) => <BRadio {...field} {...rest} />}</Field>
    </FieldWrapper>
  )
}

export function Switch({ name, fieldWrapper, ...rest }: IFieldProps & SwitchProps) {
  return (
    <FieldWrapper {...fieldWrapper}>
      <Field name={name}>{({ field }: FieldProps) => <BSwitch {...field} {...rest} />}</Field>
    </FieldWrapper>
  )
}

export function Textarea({ name, fieldWrapper, ...rest }: IFieldProps & TextareaFieldProps) {
  return (
    <FieldWrapper {...fieldWrapper}>
      <Field name={name}>
        {({ field, form }: FieldProps) => {
          return (
            <BTextarea
              {...field}
              {...rest}
              state={getError(form, name)}
              onChange={(e: any) => form.setFieldValue(name || 'Field', e.target.value)}
            />
          )
        }}
      </Field>
    </FieldWrapper>
  )
}

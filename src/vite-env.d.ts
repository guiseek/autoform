/// <reference types="vite/client" />

type InputType =
  | 'checkbox'
  | 'color'
  | 'date'
  | 'email'
  | 'file'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'

type InputAutocomplete =
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
  | 'organization-title'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'one-time-code'
  | 'organization'
  | 'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level4'
  | 'address-level3'
  | 'address-level2'
  | 'address-level1'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-number'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-csc'
  | 'cc-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'url'
  | 'photo'
  | 'tel'
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-area-code'
  | 'tel-local'
  | 'tel-local-prefix'
  | 'tel-local-suffix'
  | 'tel-extension'
  | 'email'
  | 'impp'

type InputMode =
  | 'verbatim'
  | 'latin'
  | 'latin-name'
  | 'latin-prose'
  | 'full-width-latin'
  | 'kana'
  | 'katakana'
  | 'numeric'
  | 'tel'
  | 'email'
  | 'url'

interface Input<T = unknown> extends Partial<HTMLInputElement> {
  label?: string
  type: InputType | 'select'
  autocomplete?: InputAutocomplete
  required?: boolean
  readOnly?: boolean
  maxLength?: number
  minLength?: number
  value?: T | any
}

interface InputText<T = string> extends Input<T> {
  type: 'text' | 'password' | 'email' | 'url'
  inputmode?: InputMode
  value?: T
}

interface InputNumber<T = number> extends Input<T> {
  type: 'number'
  min: string
  max: string
  value?: T
}

interface InputDate<T = Date> extends Input<T> {
  value?: T
}

interface InputRadio<T = 'on'> extends Input<T> {
  type: 'radio'
  checked: boolean
  value?: T
}

interface InputCheckbox<T = 'on'> extends Input<T> {
  type: 'checkbox'
  checked?: boolean
  value?: T
}

type InputControl<T = unknown> =
  | Input<T>
  | InputText<T>
  | InputNumber<T>
  | InputDate<T>
  | InputRadio<T>
  | InputCheckbox<T>

interface FormGroup {
  [k: string]: InputControl<unknown>
}
type Callback<T> = (value: T) => void

// interface HTMLInputElement2 {
//   type: InputType
// }

// interface HTMLElementTagNameMap {
//   "input": HTMLInputElement2;
// }
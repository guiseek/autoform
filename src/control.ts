import {append, create} from './util'
import 'reflect-metadata'

const formsContainer = new Map()

export function Input<T>(config: InputControl<T>) {
  return function (target: any, key: string) {
    const metadataKey = `__control_${key}`
    Reflect.defineMetadata(metadataKey, config, target)

    let group: FormGroup = formsContainer.get(target.constructor.name)
    if (!group) group = {}

    group[key] = Reflect.getMetadata(metadataKey, new target.constructor())
    formsContainer.set(target.constructor.name, group)
  }
}

export const createForm = <T extends object>(name: string) => {
  const group = formsContainer.get(name) as Record<keyof T, InputControl>
  const form = create('form')

  const fieldset = create('fieldset')
  fieldset.appendChild(create('legend', {innerText: 'Form'}))

  if (group) {
    for (const control in group) {
      const section = create('section')
      const {label, type, ...props} = group[control]

      const id = `${name}-${control}`.toLowerCase()
      const attributes = {id, name: id, ...props}
      let input =
        type === 'select'
          ? create('select', attributes as HTMLSelectElement)
          : create('input', {type, ...attributes} as HTMLInputElementExtra)

      const labelEl = create('label', {innerText: label})
      if (props.required) {
        append(labelEl, create('span', {innerText: '*'}))
      }

      labelEl.setAttribute('for', id)

      append(form, append(section, labelEl, input))
    }
  }

  const fnCallback = (cb: Callback<T>) => {
    form.onsubmit = (e) => {
      e.preventDefault()
      const data = new FormData(form)
      cb(Object.fromEntries(data.entries()) as T)
    }
  }

  return [form, fnCallback] as [HTMLFormElement, typeof fnCallback]
}

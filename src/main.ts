import {append, create, asCode} from './util'
import {Input, createForm} from './control'

import './style.css'

const body = document.body

export class User {
  @Input({
    type: 'text',
    label: 'Nome',
    required: true,
  })
  name: string

  @Input({
    label: 'Endereço de e-mail',
    type: 'email',
    required: true,
  })
  email: string

  @Input({
    label: 'Nome de usuário',
    type: 'text',
    required: true,
  })
  username: string

  @Input({
    label: 'Senha',
    type: 'password',
    required: true,
    minLength: 6,
  })
  password: string

  @Input({
    label: 'Data de nascimento',
    type: 'date',
    autocomplete: 'bday',
    required: true,
  })
  birthday: Date
}

const button = create('button', {
  innerText: 'Enviar',
  onclick: (ev) => {
    console.log(ev)
  },
  onfocus: console.log,
})

const [form, onSubmit] = createForm<User>('User')


onSubmit((user) => {
  append(body, asCode(user))
})

append(body, append(form, button))

// Descomenta essas linhas e inicia uma string
create('input', {
  // type: ,
  // autocomplete:
})

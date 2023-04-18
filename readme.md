# AutoForm

```ts

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
  })
  birthday: Date;
}

/**
 * Json to Text
 */
const toText = <T>(value: T) => JSON.stringify(value) as string

/**
 * HTMLButtonElement
 */
const button = create('button', {
  innerText: 'Enviar',
})

/**
 * Callback function
 */
const onSubmit = (user: User) => {
  console.log(user) // <= { name: 'Gui', ... }

  document.body.appendChild(
		create('code', { textContent: toText(user) })
	)
}

document.body.appendChild(
	createForm('User', onSubmit, button)
)

```


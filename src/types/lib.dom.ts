interface HTMLInputElementExtra extends HTMLInputElement {
  type: InputType
	autocomplete: InputAutocomplete
}

interface HTMLElementTagNameMapExtra extends HTMLElementTagNameMap {
  input: HTMLInputElementExtra
}

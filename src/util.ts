import Prism from 'prismjs'

export function create<K extends keyof HTMLElementTagNameMapExtra>(
  name: K,
  attributes: Partial<HTMLElementTagNameMapExtra[K]> = {}
): HTMLElementTagNameMap[K] {
  return Object.assign(document.createElement(name), attributes)
}

export const append = <T extends HTMLElement, E extends Element[]>(
  container: T,
  ...children: E
) => {
  container.append(...children)
  return container
}

export const toText = <T>(value: T) => JSON.stringify(value)

export const asCode = (data: object) => {
  const innerHTML = Prism.highlight(
    toText(data),
    Prism.languages.javascript,
    'javascript'
  )
  const code = create('code', {innerHTML})
  return append(create('pre'), code)
}

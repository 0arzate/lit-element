import { html, LitElement } from 'lit-element'

class RickMortyLuis extends LitElement {
  constructor() {
    super()
  }

  render() {
    return html`
      <h1>Rick & Morty</h1>
    `
  }
}

customElements.define('rick-morty-luis', RickMortyLuis)
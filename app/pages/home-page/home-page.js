import { html, LitElement } from 'lit-element'
import { styles } from './home-page.css'

class HomePage extends LitElement {
  constructor () {
    super()
    this.person = { name: 'Osvaldo' }
  }

  static get is () {
    return 'home-page'
  }

  static get properties () { // oldValue !== newValue
    return {
      person: { type: Object }
    }
  }

  static get styles () {
    return styles
  }

  changePersonName () {
    this.person.name = 'Samuel'
  }

  render () {
    return html`
      <main>
        <h1>${this.person.name}</h1>
        <button @click="${this.changePersonName}">Cambiar nombre</button>

        <person-card .data="${{ name: 'Juan' }}" .isAlive="${true}" ></person-card>
      </main>
    `
  }
}

customElements.define(HomePage.is, HomePage)

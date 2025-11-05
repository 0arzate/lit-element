import { html, LitElement } from 'lit-element'

class HomePage extends LitElement {
  constructor () {
    super()

    this.message = ''
    this.validationText = 'No esta correcto el texto'
    this.showMessage = false
  }

  static get is () {
    return 'home-page'
  }

  static get properties () {
    return {
      message: { type: String },
      showMessage: { type: Boolean }
    }
  }

  static get styles () {
    return []
  }

  hanlderChange (ev) {
    const { value } = ev.target

    this.message = value
  }

  update (changedProperties) { // ANTES DE RENDERIZAR
    super.update(changedProperties)
    console.log('update', changedProperties)
  }

  get showText () {
    return this.message === 'show'
  }

  updated (changedProperties) { // DESPUES DE RENDERIZAR
    console.log('updated', changedProperties)
  }

  render () {
    return html`
      <main>
        <h1>${HomePage.is}</h1>
        <input type="text" @input="${(ev) => this.hanlderChange(ev)}"></input>
        <p>${this.message}</p>
        <p .hidden="${!this.showText}">${this.validationText}</p>
      </main>
    `
  }
}

customElements.define(HomePage.is, HomePage)

import { html, LitElement } from 'lit-element'

class HomePage extends LitElement {
  static get is () {
    return 'home-page'
  }

  static get properties () {
    return {}
  }

  static get styles () {
    return []
  }

  render () {
    return html`
      <main>
        <h1>${HomePage.is}</h1>
      </main>
    `
  }
}

customElements.define(HomePage.is, HomePage)

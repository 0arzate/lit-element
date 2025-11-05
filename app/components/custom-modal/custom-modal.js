import { html, LitElement } from 'lit-element'
import { styles } from './custom-modal-styles'

class CustomModal extends LitElement {
  constructor () {
    super()

    this.selectedCharacter = {}
  }

  static get is () {
    return 'custom-modal'
  }

  static get properties () {
    return {
      selectedCharacter: { type: Object }
    }
  }

  static get styles () {
    return [styles]
  }

  dispatchCloseModal () {
    this.dispatchEvent(new CustomEvent('close-modal', { bubbles: true, composed: true }))
  }

  render () {
    console.log('selected', this.selectedCharacter)
    return html`
      <section id="modal" @click="${() => this.dispatchCloseModal()}">
        <div>
          <h1>${this.selectedCharacter.name}</h1>
          <p>${this.selectedCharacter.status}</p>
          <p>${this.selectedCharacter.alive}</p>
          <p>${this.selectedCharacter.gender}</p>
        </div>
      </section>
    `
  }
}

customElements.define(CustomModal.is, CustomModal)

import { html, LitElement } from 'lit-element'
import '../../components/custom-modal/custom-modal'
class HomePage extends LitElement {
  constructor () {
    super()

    this.message = ''
    this.characters = []
    this.selectedCharacter = {}
  }

  static get is () {
    return 'home-page'
  }

  static get properties () {
    return {
      message: { type: Object },
      characters: { type: Array },
      selectedCharacter: { type: Object }
    }
  }

  static get styles () {
    return []
  }

  firstUpdated () {
    this.getCharacters()
  } // SE EJECUTA UNA VEZ CUANDO SE MONTA EL COMPONENTE

  async getCharacters () {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()

    this.characters = data.results
  }

  handlerChange (ev) {
    const { value } = ev.target

    this.message = value
  }

  update (changeProperties) { // Antes del renderizado \ changedProperies === oldValue (anterior)
    super.update(changeProperties)

    const messageHasChange = changeProperties.has('message')

    if (messageHasChange && this.message !== 'get') {
      this.characters = []
    }
  }

  updated (changeProperties) { // Despues del renderizado
  }

  get renderCharacters () {
    if (this.characters.length === 0) {
      return 'Ingresa get en el input para obtener los personajes'
    }

    return this.characters.map(character => html`
      <p>${character.name}</p>
      <img @click="${(ev) => this.setSelectedCharacter(character)}" src="${character.image}">
    `)
  }

  setSelectedCharacter (character) {
    this.selectedCharacter = character
  }

  get hiddeClass () {
    return this.showModal === false ? 'hidden' : ''
  }

  get renderModal () {
    if (!this.selectedCharacter.name) {
      return ''
    }

    return html`
      <custom-modal .selectedCharacter="${this.selectedCharacter}" @close-modal="${() => this.resetSelectedCharacter()}"></custom-modal>
    `
  }

  resetSelectedCharacter () {
    this.selectedCharacter = {}
  }

  render () {
    return html`
      <main>
        <h1>${HomePage.is}</h1>
        <input type="text" name="message" placeholder="texto aqui..." @input="${(ev) => this.handlerChange(ev)}" />
        <h1>CHARACTERS</h1>
        ${this.renderCharacters}
      </main>

      ${this.renderModal}
    `
  }
}

customElements.define(HomePage.is, HomePage)

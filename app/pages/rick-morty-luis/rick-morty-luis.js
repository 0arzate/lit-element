import { html, LitElement } from 'lit-element'

class RickMortyLuis extends LitElement {
  constructor() {
    super()
    this.characters = []
    this.favorites = []
    this.search = ''
  }

  static get properties() {
    return {
      characters: { type: Array },
      favorites: { type: Array },
      search: { type: String }
    }
  }

  async connectedCallback() {
    super.connectedCallback()
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json()
    this.characters = data.results
  }

  filterCharacters() {
    return this.characters.filter(c =>
      c.name.toLowerCase().includes(this.search.toLowerCase())
    )
  }

  toggleFavorite(character) {
    const exists = this.favorites.find(f => f.id === character.id)
    this.favorites = exists
      ? this.favorites.filter(f => f.id !== character.id)
      : [...this.favorites, character]
  }

  isFavorite(character) {
    return this.favorites.some(f => f.id === character.id)
  }

  render() {
    return html`
      <h1>Rick & Morty Characters (${this.filterCharacters().length})</h1>

      <input
        type="text"
        placeholder="Buscar..."
        @input="${e => this.search = e.target.value}"
      />

      <p>Favoritos: ${this.favorites.length}</p>

      ${this.filterCharacters().map(char => html`
        <div>
          <img src="${char.image}" width="50" />
          <button @click="${() => this.toggleFavorite(char)}">
            ${this.isFavorite(char) ? '❤️' : '🤍'}
          </button>
          <span>${char.name}</span>
        </div>
      `)}
    `
  }
}

customElements.define('rick-morty-luis', RickMortyLuis)
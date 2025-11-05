import { css } from 'lit-element'

export const styles = css`
  #modal {
    width: 100vw;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .6);
    display: grid;
    place-content: center;
  }

  #modal div {
    width: 300px;
    background-color: white;
  }

  #modal.hidden {
    display: none;
  }
`

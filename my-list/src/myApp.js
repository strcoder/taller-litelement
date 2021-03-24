import { LitElement, html, css } from 'lit-element';
import './myList';

class MyApp extends LitElement {
  static get properties() {
    return {
      list: { type: Array },
    }
  }

  // border-radius: 0
  static get styles() {
    return css`
      :host {
        font-family: 'Roboto', sans-serif;
      }

      button {
        margin: 0 10px;
        color: #111111;
        background: none;
        font-size: large;
        font-weight: bold;
        padding: 6px 12px;
        border: 3px solid #111111;
      }
    `;
  }

  constructor() {
    super();
    this.list = [];
  }

  _mandarLista() {
    this.list = [
      { id: 1, name: 'The Dark Knight', year: 2008 },
      { id: 2, name: 'Inception', year: 2010 },
      { id: 3, name: 'Matrix', year: 1999 },
      { id: 4, name: 'Fight Club', year: 1999 },
    ];
  }

  _limiarLista() {
    this.list = [];
  }

  render() {
    return html`
      <div>
        <button type="button" @click=${this._mandarLista}>
          Create list
        </button>
        <button type="button" @click=${this._limiarLista}>
          Empty list
        </button>

        <my-list title="My favorites movies" items=${JSON.stringify(this.list)}></my-list>
      </div>
    `;
  }
}

customElements.define('my-app', MyApp);

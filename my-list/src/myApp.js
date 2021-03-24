import { LitElement, html, css } from 'lit-element';
import './myList';

class MyApp extends LitElement {
  static get properties() {
    return {
      list: { type: Array },
      error: { type: Boolean },
      loading: { type: Boolean },
    }
  }

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
    this.error = false;
    this.boolean = false;
  }

  _mandarLista() {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=4ff32b3a95fabacb861ecfa8aa1dfcba&language=en-US&page=1';
    const node = this.shadowRoot.querySelector('my-list');
    node.removeAttribute('error');
    node.setAttribute('loading', true);
    fetch(url)
    .then((data) => data.json())
    .then(({ results }) => {
      this.list = results;
      node.removeAttribute('loading');
      node.removeAttribute('error');
    }).catch((error) => {
      node.setAttribute('error', true);
    });
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

        <my-list
          title="My favorites movies"
          items=${JSON.stringify(this.list)}
        ></my-list>
      </div>
    `;
  }
}

customElements.define('my-app', MyApp);

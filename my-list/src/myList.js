import { LitElement, html, css } from 'lit-element';

class MyList extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
      title: { type: String },
      error: { type: Boolean },
      loading: { type: Boolean },
    }
  }

  static get styles() {
    return css`
      li {
        color: teal;
        padding: 10px 0;
        font-size: large;
        font-weight: bold;
      }

      .text-info {
        color: #EC7D15;
        font-size: large;
        font-weight: bold;
      }

      .text-error {
        color: #B4242C;
        font-size: large;
        font-weight: bold;
      }
    `
  }

  constructor() {
    super();
    this.title = '';
    this.items = [];
    this.error = false;
    this.loading = false;
  }

  _getItem(item) {
    return html`
      <li>${item?.title || 'Sin nombre'} (${item?.release_date?.slice(0, 4) || 'Sin año'})</li>
    `;
  }

  render() {
    return html`
      <h1>
        ${this.title}
      </h1>
      <ul>
        ${this.error ? // Comprobamos si existe un error al pedir las peliculas
          html`<p class="text-error">¡Error en el servidor!</p>` :
          this.loading ? // Comprobamos si la peticion esta cargando
            html`<p class="text-info">Loading...</p>` :
            (!this.items || this.items?.length === 0) ? // Comprobamos que la lista no este vacia
              html`<p class="text-info">EMPTY LIST</p>` :
              this.items?.map(this._getItem) // Mostramos los elementos de la lista
        }
      </ul>
    `;
  }
}

customElements.define('my-list', MyList);

import { LitElement, html, css } from 'lit-element';

class MyList extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      items: { type: Array },
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
    `
  }

  constructor() {
    super();
    this.title = '';
    this.items = [];
  }

  _getItem(item) {
    return html`
      <li>${item?.name || 'Sin nombre'} (${item?.year || 'Sin año'})</li>
    `;
  }

  render() {
    return html`
      <h1>
        ${this.title}
      </h1>
      <ul>
        ${(!this.items || this.items?.length === 0) ?
          html`<p class="text-info">No hay datos</p>` :
          this.items?.map(this._getItem)
        }
      </ul>
    `;
  }
}

customElements.define('my-list', MyList);

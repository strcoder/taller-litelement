import { LitElement, html } from 'lit-element';

class MyList extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      items: { type: Array },
    }
  }

  _getItem(item) {
    return html`
      <li>${item?.name}(${item?.year})</li>
    `;
  }

  render() {
    return html`
      <h1>
        ${this.title}
      </h1>
      <ul>
        ${this.items?.map(this._getItem)}
      </ul>
    `;
  }
}

customElements.define('my-list', MyList);

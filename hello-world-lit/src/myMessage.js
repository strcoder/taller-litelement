import { LitElement, html } from 'lit-element';

class MyMessage extends LitElement {
  static get properties() {
    return {
      message: { type: String },
    }
  }

  render() {
    return html`
      <p>Message: ${this.message}</p>
    `;
  }
}

customElements.define('my-message', MyMessage);

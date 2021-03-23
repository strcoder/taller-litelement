import { LitElement, html, css } from 'lit-element';
import './myMessage';

class HelloWorld extends LitElement {
  static get properties() {
    return {
      message: { type: String },
    }
  }

  constructor() {
    super();
    this.message = "Dynamic message";
  }

  render() {
    return html`
      <my-message message="Static message"></my-message>
      <my-message message=${this.message}></my-message>
    `;
  }
}

customElements.define('hello-world', HelloWorld);

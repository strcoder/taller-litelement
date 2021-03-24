import { LitElement, html } from 'lit-element';
import './myCounter';

class MyApp extends LitElement {
  render() {
    return html`
      <my-counter></my-counter>
    `;
  }
}

customElements.define('my-app', MyApp);

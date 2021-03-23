import { LitElement, html } from 'lit-element';
import './helloWorld.js';

class MyApp extends LitElement {
  render() {
    return html`
      <hello-world></hello-world>
    `;
  }
}

customElements.define('my-app', MyApp);

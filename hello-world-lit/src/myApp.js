import { LitElement, html } from 'lit-element';
import './helloWorld.js';
import './myList';

class MyApp extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
    }
  }

  constructor() {
    super();
    this.items = [
      { id: 1, name: 'The Dark Knight', year: 2008 },
      { id: 2, name: 'Inception', year: 2010 },
      { id: 3, name: 'Matrix', year: 1999 },
      { id: 4, name: 'Fight Club', year: 1999 },
    ];
  }

  render() {
    return html`
      <hello-world messageOutside="Outside"></hello-world>
      <my-list title="My favorites movies" items=${JSON.stringify(this.items)}></my-list>
    `;
  }
}

customElements.define('my-app', MyApp);

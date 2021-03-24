import { LitElement, html } from 'lit-element';

class MyCounter extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
    }
  }

  constructor() {
    super();
    this.count = 0;
  }

  _onIncrement() {
    this.count += 1;
  }

  render() {
    return html`
      <div>
        <h1>${this.count}</h1>
        <button type="button" @click=${this._onIncrement}>Increment</button>
        <button type="button" @click=${() => (this.count -= 1)}>Decrement</button>
      </div>
    `;
  }
}

customElements.define('my-counter', MyCounter);

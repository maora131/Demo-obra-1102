const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
  .footer {
    background-color: #424242;
    text-align: center;
    margin-top: 10%;
    position: relative;
    min-height: 130px; 
    
  }
  
  /* TEXTO FOOTER */
  .footer p {
    color: white;
    font-family: 'Libre Franklin', sans-serif;
    display: inline-block;
    margin-top: 2em;
    margin-right: 8em;
  }
  
  .zimbra {
    width: 15%;
    margin-bottom: 1em;
    margin-top: 2em;
    margin-right: 7em;
  }
  
  .conce {
    width: 15%;
    margin-bottom: 1em;
    margin-top: 2em;
    margin-right: 7em;
  
  }
  
  .portal {
    width: 5%;
    margin-right: 7em;
  }
  </style>
  
	<div class="footer">
		<p>© Servicio de Orientación laboral</p>
		<a href="https://sede.vigo.org/portal-empregado/#/gestionLogin"><img class="portal" src="../img/portal.png"></a>
		<a href="https://correo.vigo.org/zimbra/"><img class="zimbra" src="../img/zimbra.png"></a>
		<a href="https://hoxe.vigo.org/"><img class="conce" src="../img/conceemprego2.png"></a>
	</div>

`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
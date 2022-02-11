const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <style>
        /* MENU SUPERIOR */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');


@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin&display=swap');

body{
	min-height: 100%;
	height: 100vh;
}
.menu-bar-navigation-link {
	color: #FFFFFF;
	font-family: 'Libre Franklin', sans-serif;
	font-size: .80rem;
	font-weight: 300;
	text-decoration: none;
	

}

.menu-bar-navigation-link:hover {

	text-decoration: underline;
	text-decoration-thickness: 3px;
	color: #FFFFFF;
}


.menu-bar-container {
	margin-bottom: 3rem;
}

.main-body-menu-bar {
	background-color: #B81207;
	display: grid;
	/* grid-template-columns: 10% 55% 35%; */
	margin-bottom: 5%;
	width: 100%;
	min-height: 5rem;


}

.menu-bar-text {
	display: none;
}

.menu-bar-navigation-link,
.menu-bar-close-button {
	align-self: center;
	justify-self: center;
}

.menu-bar-button {
	align-self: center;
	grid-column: 1;
	justify-self: center;
}

.menu-bar-close-button {
	border-radius: 24px;
	border: .06rem solid #666666;
	height: 3rem;
	width: 3rem;
}

.menu-bar-navigation-links {
	display: flex;
	grid-column: 2;
	justify-content: space-evenly;
	margin-left: 27%;
	margin-right: 5%;

}

.menu-bar-navigation-link {
	font-size: 17px;
	margin-left: 50px;
	
}

.menu-bar-input {
	align-self: center;
	text-align: center;
	grid-column: 3;
	

}

.menu-bar-search-field {
	background-color: #F2F2F2;
	border: .05rem solid #666666;
	font-size: 1rem;
	font-weight: 100;
	height: 1.75rem;
	width: 50%;


}

.menu-bar-search-field::placeholder {

	padding-left: .75rem;
	
	
}

.fa-search {
	color: #FFFFFF;
}

@media only screen and (max-width: 900px) {

	.menu-bar-search-field {
		font-size: .75rem;
	}

	.menu-bar-navigation-link {
		font-size: .75rem;
	}

	.menu-bar-search-field::placeholder {
		background: url(../css-resources/search.png) left / 20px no-repeat;
	}

}

@media only screen and (max-width: 750px) {

	.main-body-menu-bar {
		display: flex;
		/* flex-direction: column; */
		width: 100%
	}

	.menu-bar-button {
		width: 100%;
		height: 4rem;
		justify-content: space-between;
	}

	.menu-bar-button {
		display: flex;
	}

	.menu-bar-close-button {
		margin-left: 1rem
	}

	.menu-bar-text {
		display: inherit;
		font-family: 'Open Sans', Sans-Serif;
		font-weight: 300;
		text-transform: uppercase;
		align-items: center;
		margin-right: 1rem;
	}

	/* VACÍO POR SI ACASO */
	.menu-bar-navigation-links {
		/* background-color: #F2F2F2; */
		/* padding: 1rem 0 1rem; */

	}

	.menu-bar-navigation-links {
		/* display: block; */
	}

	.menu-bar-navigation-link {
		/* display: block; */
		font-size: 1rem;
	}

	.menu-bar-navigation-link {
		padding: 1rem;
	}

	.menu-bar-input {
		background-color: #F2F2F2;
		padding-bottom: 1rem;
		text-align: center;
		width: 100%;
	}

	.menu-bar-search-field {
		background-color: #FFFFFF;
		width: 90%;
	}

	.hide {
		display: none;
	}

}

@media only screen and (max-width: 450px) {

	.main-body-menu-bar {
		display: flex;
		flex-direction: column;
		max-width: 25rem;
		min-width: 15rem;
		width: 100%
	}

	.menu-bar-button {

		height: 4rem;
		justify-content: space-between;
	}

	.menu-bar-button {
		display: flex;
	}

	.menu-bar-close-button {
		/* margin-left: 1rem */
	}

	.menu-bar-text {
		display: inherit;
		font-family: 'Open Sans', Sans-Serif;
		font-weight: 300;
		text-transform: uppercase;
		align-items: center;
		margin-right: 1rem;
	}

	.menu-bar-navigation-links {
		/* background-color: #F2F2F2; */
		/* padding: 1rem 0 1rem; */

	}

	.menu-bar-navigation-links {
		/* display: block; */
	}

	.menu-bar-navigation-link {
		/* display: block; */
		font-size: 1rem;
	}

	.menu-bar-navigation-link {
		padding: 1rem;
	}

	.menu-bar-input {
		background-color: #F2F2F2;
		padding-bottom: 1rem;
		text-align: center;
		width: 100%;
	}

	.menu-bar-search-field {
		background-color: #FFFFFF;
		width: 90%;
	}

	.hide {
		display: none;
	}

}
        </style>
        <header class='main-body-menu-bar' id="top">

        <div class='menu-bar-button'>
          <button class='menu-bar-close-button'><i class="far fa-user fa-lg"></i></button>
    
    
        </div>
    
		<div class='menu-bar-navigation-links'>
		<a class='menu-bar-navigation-link link-1' href='../index.php'>INICIO </a>
		<a class='menu-bar-navigation-link link-2' href='../citas/citas.php'>CITAS </a>
		<a class='menu-bar-navigation-link link-3' href='../persoas/index.php'>PERSOAS </a>
		<a class='menu-bar-navigation-link link-4' href='../empresas/index.php'>EMPRESAS </a>
		<a class='menu-bar-navigation-link link-5' href='../login/logout.php'>SAÍR </a>

	  </div>
    
        <div class='menu-bar-input'>
          <!-- <input class='menu-bar-search-field' placeholder='Buscar'> -->
          <input type="text" placeholder="Buscar..." name="search">
          <i class="fas fa-search fa-lg"></i>
    
        </div>
    
      </header>
      `;      
      class Header extends HTMLElement {
        constructor() {
          super();
        }
      
        connectedCallback() {
          const shadowRoot = this.attachShadow({ mode: 'closed' });
      
          shadowRoot.appendChild(headerTemplate.content);
        }
    }
  customElements.define('header-component', Header);

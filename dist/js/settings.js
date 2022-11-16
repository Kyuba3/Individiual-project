export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const select = {
  containerOf: {
    home: 'home-wrapper',
    products: 'products-wrapper',
    contact: 'contact-wrapper',
  },

  templateOf: {
    homePage: '#template-homepage',
    menuProduct: '#template-products-page',
    contactPage: '#template-contact-page',  
  },
  nav: {
    links: 'main-nav a',
  },

};

export const templates = {
  homePage: Handlebars.compile(
    document.querySelector(select.templateOf.homePage).innerHtml
  ),
};

export const classNames = {
  active: 'active',
};

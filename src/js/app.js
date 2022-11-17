import { select, settings } from './settings.js';
import Home from './components/Home.js';

const app = {
  initData: function(){
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
      });
  },
  initHome: function(){
    const thisApp = this;
    const homeSub = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(homeSub);
  },

  init: function(){
    const thisApp = this;
    thisApp.initData();
    thisApp.initHome();
  },
};

app.init();
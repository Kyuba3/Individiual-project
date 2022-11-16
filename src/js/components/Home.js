import {select, templates} from '../settings.js';

class Home {
  constructor(element){
    const thisHome = this;

    thisHome.render(element);
  }


  render(element){
    const thisHome = this;

    thisHome.dom = {};
    
    thisHome.dom.wrapper = element;

    const generatedHtml = templates.homePage(thisHome.data);
    
    document.querySelector(select.containerOf.home).innerHtml = generatedHtml;
  }
}
export default Home;
import { templates, select } from '../settings.js';

class Home {
  constructor(){
    const thisHome = this;
    
    thisHome.render();
  }
    
  render(){
    const thisHome = this;
    
    const generatedHTML = templates.homePage(thisHome.data);
    
    document.querySelector(select.containerOf.home).innerHTML += generatedHTML;
  }
}

export default Home;
import { templates, select } from '../settings.js';

class Contact {
  constructor(){
    const thisContact = this;
    
    thisContact.render();
  }
    
  render(){
    const thisContact = this;

    const generatedHTML = templates.contactPage(thisContact.data);
    
    document.querySelector(select.containerOf.contact).innerHTML = generatedHTML;
  }
}

export default Contact;
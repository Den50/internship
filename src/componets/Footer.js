import {Component} from 'react'

class Footer extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }
   render() { 
      return ( 
         <footer>
            <span>Daniil Shenyagin&copy;2021 <a href="https://github.com/den50/internship">GitHub</a></span>
         </footer>
      )
   }
}
 
export default Footer;
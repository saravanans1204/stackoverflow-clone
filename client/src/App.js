

import { BrowserRouter} from 'react-router-dom'

import NavBar  from './components/navbar';
import Path from './routes';

function App() {



  return (
    
      
       <BrowserRouter>
       <NavBar/>
       <Path/>
       </BrowserRouter>
      
    
  );
}

export default App;

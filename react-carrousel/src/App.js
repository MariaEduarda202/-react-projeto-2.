
import './App.css';
import { CarouselData } from './componentes/CarouselData';
import Imagem from './componentes/Imagem'

function App() {
  return (<div>
    <Imagem slider={CarouselData}/>
    <CarouselData/>
 
     </div>
   
  );
}

export default App;

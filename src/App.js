import './styles.css'
import Cabecalho from './componentes/Cabecalho';
import Main from './componentes/Main';
import Chamada from './componentes/Main/Chamada';
import Rodape from './componentes/Rodape/Rodape';
import ContainerFiltrosECarros from './componentes/Main/ContainerFiltrosECarros';
import { useState } from 'react';
import Header from './componentes/Header';


function App() {

  const [novoAnuncio, setNovoAnuncio] = useState('')
  const [pesquisaVeiculo, setPesquisaVeiculo] = useState('')
  const [listaDeSugestao, setListaDeSugestao] = useState([])
  const [veiculoSugeridoClicado, setVeiculoSugeridoClicado] = useState('')
  const [aoPesquisarLupa, setAoPesquisarLupa] = useState()

  return (
    <div className="App overflow-x-hidden">
      <Header />
      <Main>
        <Chamada />
        <ContainerFiltrosECarros
          aoPesquisarLupa={aoPesquisarLupa}
          veiculoSugeridoClicado={veiculoSugeridoClicado}
          novoAnuncio={novoAnuncio}
          pesquisaVeiculo={pesquisaVeiculo}
          listaDeSugestao={(lista) => setListaDeSugestao(lista)}
        />
      </Main>
      <Rodape />
    </div>
  );
}

export default App;

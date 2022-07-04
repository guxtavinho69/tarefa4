import './App.css'
//teste
function App() {
  const pagina = [{
    item: <img className='fotos' src='https://www.ifpb.edu.br/ti/sistemas/imagens/suap.jpg/@@images/image.jpeg'></img>, 
    descricao: "aaaaaaa"
  },
  {
    item: <img className='fotos' src='https://www.ifpb.edu.br/ti/sistemas/imagens/suap.jpg/@@images/image.jpeg'></img>, 
    descricao: "aaaaaaa"
  },
  {
    item: <img className='fotos' src='https://www.ifpb.edu.br/ti/sistemas/imagens/suap.jpg/@@images/image.jpeg'></img>, 
    descricao: "aaaaaaa"
  },
  {
    item: <img className='fotos' src='https://www.ifpb.edu.br/ti/sistemas/imagens/suap.jpg/@@images/image.jpeg'></img>, 
    descricao: "aaaaaaa"
  },
  {
    item: <img className='fotos' src='https://www.ifpb.edu.br/ti/sistemas/imagens/suap.jpg/@@images/image.jpeg'></img>, 
    descricao: "aaaaaaa"
  },
  {
    item: <img className='fotos' src='https://www.ifpb.edu.br/ti/sistemas/imagens/suap.jpg/@@images/image.jpeg'></img>, 
    descricao: "aaaaaaa"
  },
  {
    item: <img className='fotos' src='https://www.ifpb.edu.br/ti/sistemas/imagens/suap.jpg/@@images/image.jpeg'></img>, 
    descricao: "aaaaaaa"
  },
  {
    item: <img className='fotos' src='https://www.ifpb.edu.br/ti/sistemas/imagens/suap.jpg/@@images/image.jpeg'></img>, 
    descricao: "aaaaaaa"
  },
  {
    item: <img className='fotos' src='https://www.ifpb.edu.br/ti/sistemas/imagens/suap.jpg/@@images/image.jpeg'></img>, 
    descricao: "aaaaaaa"
  },
  {
    item: <img className='fotos' src='https://www.ifpb.edu.br/ti/sistemas/imagens/suap.jpg/@@images/image.jpeg'></img>, 
    descricao: "aaaaaaa"
  }
]
  const menu_item = pagina.map(
    (menu_item)=>
        <div className='itens'>
          {menu_item.item }
          <br></br>
          {menu_item.descricao}
        </div>
   
  )
  return(
    <div className='componente' >

      {menu_item}
      
    </div>
  )
}
 
export default App
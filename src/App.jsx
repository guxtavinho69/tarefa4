import './App.css'

function App() {
  const noticias = [{
    noticia: "Funcionária que anunciou procurador diz que agressor 'desprezava mulheres' e teme sair na rua: 'Muito medo'", 
  },
  {
    noticia: "Imposto de Renda 2022: Receita abre consultas ao 2° lote de restituição nesta quinta;veja se você está no grupo", 
  },
  {
    noticia: "Governo opera para evitar CPI do MEC que ganhou força após prisão de Milton Ribeiro", 
  },
  {
    noticia: "Em Itajubá, assaltantes armados atacam agência da Caixa Econômica Federal; 7 ficam feridos", 
  },
  {
    noticia: "Almir Sater é 'parado em blitz' e policiais tietam cantor: 'o senhor é cono dessa chalana?'", 
  }
]
  const menu_noticias = noticias.map(
    (menu_noticias)=>
    <ol className='not'>
      <li className='li'>
        <div className='lista'>
          {menu_noticias.noticia }
        </div>
      
      </li>
    </ol>
   
  )
  return(
    <div className='componente' >
      <p className='p'>mais noticias</p>
      {menu_noticias}
      
    </div>
  )
}
 
export default App
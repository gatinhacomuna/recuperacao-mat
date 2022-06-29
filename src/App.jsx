import HelloWorld from "./HelloWorld";
import Button from "./Button";
import SayName from "./SayName";
import Perfil from "./Perfil";

function App() {

  const lista_pessoas = [
    {
      
    },
    {
      
    },
    {
     
    }
  ];

  return (
    <div>
      <HelloWorld />
      <Button cor="#FFC0CB" frase="confirmar"/>
      <Button cor="#20B2AA" frase="recusar"/>
      <SayName nome="Andressa"/>

      { lista_pessoas.map( (pessoa) => {
          return <Perfil 
                      foto={pessoa.foto} 
                      nome={pessoa.nome}
                      idade={pessoa.idade}
                     />
      } ) }

    </div>
  );
}

export default App;

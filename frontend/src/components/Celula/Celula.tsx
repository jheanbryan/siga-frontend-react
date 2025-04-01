import './Celula.css';

type ClassType = {
  name: 'xis' | 'circulo' | '';
}

function Celula(props: ClassType) {
  const resolveJogada = () => {
    console.log('clickou')

   console.log(props)
 

  };

  return (
    <>
      <div className={`celula ${props.name}`} onClick={() => resolveJogada()}></div>
    </>
  );
};

export default Celula;

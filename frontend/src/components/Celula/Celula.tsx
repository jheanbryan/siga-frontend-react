import './Celula.css';

type ClassType = {
  name: 'xis' | 'circulo' | '';
}

function Celula(props: ClassType) {
  const resolveJogada = () => {
  let classe = 'celula';

  if (props.name == 'xis') {
    classe += 'xis';

  } else {
    if (props.name == 'circulo') {
      classe += 'circulo';

    } else {

    
    }
  }

  };

  return (
    <>
      <div className={`celula ${props.name}`} onClick={() => resolveJogada()}></div>
    </>
  );
};

export default Celula;

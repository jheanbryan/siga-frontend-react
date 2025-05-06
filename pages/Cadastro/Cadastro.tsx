import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContainerIndex from '../../components/Cadastro/Cadastro';

function Cadastro() {
  return(
    <>
      <Header subtitle='' mostrarFormulario={true} />

      <ContainerIndex />

      <Footer />
    </>
  )
};

export default Cadastro;
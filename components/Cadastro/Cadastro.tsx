import './Cadastro.css'

function ContainerIndex() {
  return (
    <>

      <div className="content">
        <nav>
            <ul>
                <li><a href="http://www.ifms.edu.br/">Site do IFMS</a></li>
            </ul>
        </nav>

        <main>
            <h2>Cadastre-se</h2>

            <form method="post" action="/home" encType="multipart/form-data">
                <p>Cadastre-se como
                    <select name="perfil">
                        <option value="estudante">Estudante</option>
                        <option value="professor">Professor</option>
                    </select>
                </p>
                <p>Nome:
                    <input type="text" name="nome" placeholder="nome" required/>
                </p>
                <p>Email:
                    <input type="email" name="email" placeholder="email" required/>
                </p>
                <p id="paiSenha1">Senha:
                    <input type="password" id="senha1" placeholder="senha" name="senha" required/>
                </p>
                <p id="paiSenha2">Repita a senha:
                    <input type="password" id="senha2" required placeholder="repita a senha" />
                    
                </p>
                <p>Foto:
                    <input type="file" name="foto" />
                </p>
                <p>CPF (somente números):
                    <input type="tel" placeholder="CPF" name="cpf" required />
                </p>
                <p>Data de nascimento (dd/mm/aaaa)
                    <input type="date" required name="dataNasc" />
                </p>
                
                <button type="submit">Cadastrar</button>

            </form>
        </main>
        <section>
            <h2>Últimas notícias</h2>
            <p>Aberto processo seletivo</p>
        </section>
    </div>
    </>
  );  
};

export default ContainerIndex;

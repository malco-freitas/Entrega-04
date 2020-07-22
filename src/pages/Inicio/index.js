import React, { Component } from 'react';
import Curtidas from './../../components/Curtidas.js';
import Comentarios from './../../components/Comentarios.js';
import Time from './../../components/Time.js';
// import Sugestao from './components/Sugestao.js';
import './style.css';

export default class Inicio extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      likes: 79,
      saved: false,
    };
  }

  changeLikeColor = () => {
    if (this.state.liked === true) {
      this.setState({ liked: false });
      this.setState({ likes: this.state.likes - 1 });
    } else {
      this.setState({ liked: true });
      this.setState({ likes: this.state.likes + 1 });
    }
  };

  // state para mudar cor da bandeirinha
  changeSaveColor = () => {
    if (this.state.saved === true) {
      this.setState({ saved: false });
    } else {
      this.setState({ saved: true });
    }
  };

  render() {
    const { liked, likes, saved} = this.state;
    return (
      <div className="rede">
        <div className="App-header">
          {/* <img height="29px" src={require('./../../assets/images/instagram.png')} /> */}
          <div className="botaoPesquisar">
            <img height="10px" src={require('./../../assets/images/lupa.png')} />
            <p className="Pesquisar">Pesquisar por ID</p>
          </div>
          <div className="icones">
            <img className="icone" src={require('./../../assets/svg/home.svg')} />
            {/* <img className="icone" src={require('./../../assets/svg/direct.svg')} /> */}
            {/* <img className="icone" src={require('./../../assets/svg/bussola.svg')} /> */}
            {/* <img className="icone" src={require('./../../assets/svg/coracao.svg')} /> */}
            <img className="foto" src={require('./../../assets/images/dono.jpg')} />
          </div>
        </div>

        <div className="body">
          <div className="left">
            <div className="stories">
              <div className="friend">
                <img
                  className="amigo"
                  src={require('./../../assets/images/amigo1.jpg')}
                />
                <p className="nome">rodrigo</p>
              </div>
              <div className="friend">
                <img
                  className="amigo"
                  src={require('./../../assets/images/amigo2.jpg')}
                />
                <p className="nome">hudson</p>
              </div>
              <div className="friend">
                <img
                  className="amigo"
                  src={require('./../../assets/images/amigo3.jpg')}
                />
                <p className="nome">nique</p>
              </div>
              <div className="friend">
                <img
                  className="amigo"
                  src={require('./../../assets/images/amigo4.jpg')}
                />
                <p className="nome">jesse.m</p>
              </div>
              <div className="friend">
                <img
                  className="amigo"
                  src={require('./../../assets/images/amigo5.jpg')}
                />
                <p className="nome">gouveia.h</p>
              </div>
            </div>
            <div className="publicacao">
              <div className="cabecalho">
                <div className="identificacao">
                  <img
                    className="postador"
                    src={require('./../../assets/images/amigo6.jpg')}
                  />
                  <p className="texto"  >sostenescavalcante</p>
                </div>
                <img
                  className="mais"
                  width="16px"
                  src={require('./../../assets/svg/mais.svg')}
                />
              </div>
              <img
                className="imagemPost"
                src={require('./../../assets/images/imagemPost.JPG')}
              />
              <div className="rodape">
                <div className="interacoes">
                  <div className="acoes">
                    <img
                      onClick={this.changeLikeColor}
                      className="icone"
                      src={require(liked
                        ? './../../assets/svg/coracaoCheio.svg'
                        : './../../assets/svg/coracao.svg')}
                    />
                    <img
                      className="icone"
                      src={require('./../../assets/svg/comente.svg')}
                    />
                    <img
                      className="icone"
                      src={require('./../../assets/svg/direct.svg')}
                    />
                  </div>
                  <img
                      onClick={this.changeSaveColor}
                      className="icone"
                      src={require(saved
                        ? './../../assets/images/flagBlack.jpg'
                        : './../../assets/images/flagWhite.jpg')}
                  />
                </div>
                <div className="Post">
                  <Curtidas likes={likes}/>
                </div>
                <div>
                  <Comentarios comentador="sostenescavalcante" comentario="O deputado Sóstenes continua com ótima evolução clínica. E vamos continuar orando para que em breve ele volte para casa. Juntos vamos vencer essa batalha.
Continuamos em oração!"/>
                  <Comentarios comentador="glaucobarrosgon" comentario="Deus no comando 👏👏🙏"/>
                  <Comentarios comentador="pr_sergiomarques" comentario="A paz. Estamos em oração e confiando no agir de Deus.🙏🏾🙏🏾🙏🏾"/>
                </div>
                <div>
                  <Time tempo="25 DE JUNHO"/>
                </div>
              </div>

            </div>
            <div className="novoComentario">
              <p className="addComent">Adicione um comentário...</p>
              <p className="publicar">Publicar</p>
            </div>
          </div>
          <div className="right">
            <div className="perfil">
              <img className="fotoPerfil" src={require('./../../assets/images/dono.jpg')}/>
              <div className="dadosDono">
                <b>malco.freitas</b>
                <p className="descricaoDono">Malco Freitas</p>
              </div>             
            </div>
            <div className="sugestoesTitulo">
                <p className="sugestoesParaVoce">Sugestões para você</p>
                <p className="verTudo">Ver tudo</p>
            </div>
            {/* <div>
              <Sugestao nome="christianramos9"/>
              <Sugestao nome="flaviatavares_moreira"/>
              <Sugestao nome="levifarias1"/>
              <Sugestao nome="_lucaum"/>
              <Sugestao nome="mgadret_12"/>
            </div> */}
            <div className="linhaSugestao">
              <div className="fotoNome">
                <img className="fotoSugestao" src={require('./../../assets/images/christianramos9.jpg')} />
                <div className="identidade">
                  <p className="nomeSugestao">christianramos9</p>
                  <p className="descricaoDono">Segue você</p>
                </div>
              </div>
              <p className="seguir">Seguir</p>           
            </div>

            <div className="linhaSugestao">
              <div className="fotoNome">
                <img className="fotoSugestao" src={require('./../../assets/images/flaviatavares_moreira.jpg')} />
                <div className="identidade">
                  <p className="nomeSugestao">flaviatavares_moreira</p>
                  <p className="descricaoDono">Segue você</p>
                </div>
              </div>
              <p className="seguir">Seguir</p>           
            </div>      

            <div className="linhaSugestao">
              <div className="fotoNome">
                <img className="fotoSugestao" src={require('./../../assets/images/levifarias1.jpg')} />
                <div className="identidade">
                  <p className="nomeSugestao">levifarias1</p>
                  <p className="descricaoDono">Popular</p>
                </div>
              </div>
              <p className="seguir">Seguir</p>           
            </div>  

            <div className="linhaSugestao">
              <div className="fotoNome">
                <img className="fotoSugestao" src={require('./../../assets/images/_lucaum.jpg')} />
                <div className="identidade">
                  <p className="nomeSugestao">_lucaum</p>
                  <p className="descricaoDono">Segue você</p>
                </div>
              </div>
              <p className="seguir">Seguir</p>           
            </div>

            <div className="linhaSugestao">
              <div className="fotoNome">
                <img className="fotoSugestao" src={require('./../../assets/images/mgadret_12.jpg')} />
                <div className="identidade">
                  <p className="nomeSugestao">mgadret_12</p>
                  <p className="descricaoDono">Sugestões para você</p>
                </div>
              </div>
              <p className="seguir">Seguir</p>           
            </div>
            <p className="final">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags •  idioma</p>
            <p className="final">© 2020 INTAGRAM DO FACEBOOK</p>
          </div>
        </div>


      </div>
    );
  }
}

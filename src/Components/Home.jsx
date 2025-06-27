import React from 'react';
import Loader from './Loader';
import './home.css';
import './Loader.css';

const Home = ({ productos, categorias, isLoading}) => {
  return (
    <div className="container-home">
      <header>
        <img src="./logo.png" alt="Imagen logo " /> e-shop
      </header>
      <nav>
        <button className="btn btn-menu">
          <svg xmlns="http://www.w3.org/2000/svg" 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="32px" 
            fill="#000000">
            <path d="M240-200h156v-234h168v234h156v-360L480-742 240-560v360Zm-28 28v-402l268-203 268 203v402H536v-234H424v234H212Zm268-299Z"/>
          </svg>
        </button>
        <button className="btn btn-menu">
          <svg xmlns="http://www.w3.org/2000/svg" 
            height="32px" 
            viewBox="0 -960 960 960" width="24px" 
            fill="#000000">
            <path d="M296-126q-23 0-38.5-15.5T242-180q0-23 15.5-38.5T296-234q23 0 38.5 15.5T350-180q0 23-15.5 38.5T296-126Zm368 0q-23 0-38.5-15.5T610-180q0-23 15.5-38.5T664-234q23 0 38.5 15.5T718-180q0 23-15.5 38.5T664-126ZM232-746l110 232h261q9 0 16-4.5t12-12.5l103-187q6-11 1-19.5t-17-8.5H232Zm-14-28h500q27 0 40.5 21.5T760-708L654-514q-8 13-20.5 20.5T606-486H324l-50 92q-8 12-.5 26t22.5 14h422v28H296q-32 0-47.5-26.5T248-406l62-110-148-310H92v-28h88l38 80Zm124 260h280-280Z"/>
          </svg>
        </button>
      </nav>
      <section className="container-categorias">
        { isLoading && <Loader /> }
        {
          categorias &&
            categorias.map(cat => (
              <button className="container-cat btn" key={cat.id}>
                <div className="container-img-cat">
                  <img src="/logo.png" alt="Imagen" />
                </div>
                <p className="name-categoria">{cat.categoria}</p>
              </button>
            ))
        }
      </section>
      <main>
        {
          productos.length > 1 ? 
            productos.map(pro => (
              <div className="card-producto" key={pro.id}>
                <div className="img-container">
                  <img src={pro.urlImg} alt={pro.titulo} />
                </div>
                <div className="info-container">
                  <p className="titulo">{pro.titulo}</p>
                  <p className="descripcion">{pro.descripcion}</p>
                  <p className="precio">$ {pro.precio}</p>
                  <div className="nav-btn">
                  <button className="btn-nav-productos">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    height="24px"
                    viewBox="0 -960 960 960" 
                    width="24px" fill="#000000">
                      <path d="M466-466H252v-28h214v-214h28v214h214v28H494v214h-28v-214Z"/>
                    </svg></button>
                  <button className="btn-nav-productos">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    height="24px" viewBox="0 -960 960 960" 
                    width="24px" fill="#000000">
                      <path d="m480-190-22-20q-97-89-160.5-152t-100-110.5Q161-520 146.5-558T132-634q0-71 48.5-119.5T300-802q53 0 99 28.5t81 83.5q35-55 81-83.5t99-28.5q71 0 119.5 48.5T828-634q0 38-14.5 76t-51 85.5Q726-425 663-362T502-210l-22 20Zm0-38q96-87 158-149t98-107.5q36-45.5 50-80.5t14-69q0-60-40-100t-100-40q-48 0-88.5 27.5T494-660h-28q-38-60-78-87t-88-27q-59 0-99.5 40T160-634q0 34 14 69t50 80.5q36 45.5 98 107T480-228Zm0-273Z"/>
                    </svg>
                  </button>
                  </div>
                </div>
              </div>

            ))
          :
          <h4  style={{color: 'grey', textAlign:'center'}}>No hay productos para mostrar</h4>
        }
      </main>
      <footer><p>Dino Studio WD</p></footer>
    </div>
  )
};
export default Home;


import { createGlobalStyle } from 'styled-components';

const getCurrentPath = () => {
  // Obtenemos la ruta actual del navegador
  return window.location.pathname;
};

const getBackgroundImage = () => {
  // Verificamos la ruta actual y definimos la ruta de la imagen en consecuencia
  const currentPath = getCurrentPath();
  if (currentPath === '/') {
    // Si estamos en la ruta raíz (Layout), usamos la ruta ./images/retro-pattern3.png
    return './images/retro-pattern3.png';
  } else {
    // Si estamos en otras rutas (dentro de pages), usamos la ruta ../../images/retro-pattern3.png
    return '../../images/retro-pattern3.png';
  }
};

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
  img{
    display: block;
    max-width: 100%;
  }
  body{
    margin: 0;
    font-family: sans-serif;
    background-image: url(${getBackgroundImage()});
    background-color: #001e2e;
  }
  
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;

export { GlobalStyles };

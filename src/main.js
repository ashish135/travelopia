import hero from './banner';
import heroText from './heroText';

export default () => {
    const element = document.createElement("main");
    element.classList = "heroBanner"
    element.setAttribute("id", "hero")
    element.appendChild(hero())
    element.appendChild(heroText())
    return element;
  };
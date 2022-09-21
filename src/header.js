export default () => {
    const element = document.createElement("header");
    element.innerHTML = '<div class="container"><div class="logo">Travelworld</div><div class="menu"><a href="#">Contact</a></div></div>';
    return element;
  };
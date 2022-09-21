export default () => {
    const div = document.createElement("div");
    div.classList = "overlay"
    const h1 = document.createElement("h1");
    h1.innerText = "EXPERIENTIAL TRAVEL BRANDS"
    const button = document.createElement("button");
    button.innerText = "Click Here"
    button.setAttribute("id", "alert")
    div.appendChild(h1)
    div.appendChild(button)
    return div;
  };
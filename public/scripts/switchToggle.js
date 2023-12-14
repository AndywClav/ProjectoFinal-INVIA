const myFunction = () => {
    let element = document.body;
    element.classList.toggle("lightMode");
    let theme;

    if(element.classList.contains("lightMode")) {
        console.log("Light Mode");
        theme = "light";
    }
    else{
        console.log("darkMode");
        theme = "dark";
    }
    localStorage.setItem("pageTheme", JSON.stringify(theme));
  } ;

  let getTheme = JSON.parse(localStorage.getItem("pageTheme"));
  console.log(getTheme);

  if(getTheme === "light") {
    document.body.classList = "lightMode"
  }


  const toggleMenu = () => {
    let menuElement = document.querySelector(".menu-smartphone");
    menuElement.classList.toggle("visible");
    console.log("h")
  };
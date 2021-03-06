import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #60703b;
  background-image: radial-gradient(
      circle at 100% 150%,
      #60703b 24%,
      #495e35 24%,
      #495e35 28%,
      #60703b 28%,
      #60703b 36%,
      #495e35 36%,
      #495e35 40%,
      transparent 40%,
      transparent
    ),
    radial-gradient(
      circle at 0 150%,
      #60703b 24%,
      #495e35 24%,
      #495e35 28%,
      #60703b 28%,
      #60703b 36%,
      #495e35 36%,
      #495e35 40%,
      transparent 40%,
      transparent
    ),
    radial-gradient(
      circle at 50% 100%,
      #495e35 10%,
      #60703b 10%,
      #60703b 23%,
      #495e35 23%,
      #495e35 30%,
      #60703b 30%,
      #60703b 43%,
      #495e35 43%,
      #495e35 50%,
      #60703b 50%,
      #60703b 63%,
      #495e35 63%,
      #495e35 71%,
      transparent 71%,
      transparent
    ),
    radial-gradient(
      circle at 100% 50%,
      #495e35 5%,
      #60703b 5%,
      #60703b 15%,
      #495e35 15%,
      #495e35 20%,
      #60703b 20%,
      #60703b 29%,
      #495e35 29%,
      #495e35 34%,
      #60703b 34%,
      #60703b 44%,
      #495e35 44%,
      #495e35 49%,
      transparent 49%,
      transparent
    ),
    radial-gradient(
      circle at 0 50%,
      #495e35 5%,
      #60703b 5%,
      #60703b 15%,
      #495e35 15%,
      #495e35 20%,
      #60703b 20%,
      #60703b 29%,
      #495e35 29%,
      #495e35 34%,
      #60703b 34%,
      #60703b 44%,
      #495e35 44%,
      #495e35 49%,
      transparent 49%,
      transparent
    );
  background-size: 100px 50px;
}

h1 {
  font-family: "Pacifico", cursive;
  font-size: 2.1em;
  background-color: rgb(60, 89, 64, 0.7);
  padding: 10px 25px;
  box-shadow: 1px 1px 15px black;
  color: white;
  font-weight: 10;
  text-shadow: 1px 1px 10px black;
  margin-bottom: 2em;
}

ul {
  list-style: none;
  padding: 0;
}

`;
export default GlobalStyles;

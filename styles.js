import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  
  .art-piece {
    text-align: center;
  }
  
  .art-piece h2 {
    margin: 10px 0;
    font-size: 1.5rem;
  }
  
  .art-piece p {
    font-size: 1.2rem;
    color: #666;
  }
  .spotlight {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  border: 2px solid #ccc;
  background-color: #f9f9f9;
}

.spotlight h2 {
  margin-bottom: 20px;
  font-size: 2rem;
}

.spotlight p {
  margin-top: 10px;
  font-size: 1.5rem;
  color: #333;
}

h1 {
    text-align: center;
  }

`;

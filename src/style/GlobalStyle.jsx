import stlyed, { createGlobalStyle } from 'styled-components';
import '../assets/font.css';

const GlobalStyle = createGlobalStyle`
:root{
  --main-color:#ff7028;
}

html,
body {
  width: 100%;
  height: 100%;
}
body,
div,
p,
ul,
ol,
li,
h1,
h2,
h3,
h4 {
  padding: 0;
  margin: 0;
  /* font-family: "yg-jalnan"; */

}

body{
  margin-top:20px;
}

section{
  width:960px;
  margin:0 auto;
}

button{
  padding: 0;
  background-color: transparent;
  border: none;
}

.title{
  text-decoration: none;
  color: #ff7028;
  font-size: 52px;
  padding: 0px;
  text-align: center;
  font-family: "yg-jalnan";
  box-shadow:inset 0 0 30px green;
}

.navbar-brand {
  font-family: "yg-jalnan";
  color: #ff973c;
  font-size: 24px;
}

ol,
ul,
li {
  list-style: none;
}

body {
  font-family: "Nanum Gothic", "맑은 고딕", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #676767;
  border-top: 30px solid #ffffff; /*넓이 스타일 색상*/
}

#campaign {
  display: block;
  margin: auto;
}

#lit {
  font-family: "yg-jalnan";
  font-size: 3em;
  color: #ff7028;
  text-align: center;
  text-decoration: none;
  padding: 20;
  margin: 20;
  clear: both;
  margin-top: 20px;
}
#wrap {
  width: 960px;
  margin: 0 auto;
}
#header {
  width: 100%;
  margin: 0 auto;
}

#footer {
  padding: 20px 0 15px;
  margin-top: 50px;
  background-color: #ff7028;
  font-size: 0.9em;
  text-align: center;
  font-style: normal;
  color: #fff;
  clear: both;
}

#footerlogo {
  display: inline-block;
  text-decoration: none;
  color: #ff7028;
  font-size: 2.5em;
  padding-top: 15px;
  text-align: center;
  font-family: "yg-jalnan";
}

#logo,
#logo a {
  float: left;
}

.img {
  width: auto;
  height: auto;
  display: block;
}

.container {
  display: block;
  width: 984px;
  height: auto;
  max-width: 100%; /* 창사이즈가 1000px보다 작아지면 100%처리 */
  margin: 0 auto;
  clear: both;
  min-height: 500px;
}

#wrap {
  width: 960px;
  margin: 0 auto;
}

.container img {
  width: auto;
  height: auto;
  display: block;
}

thead tr {
  background-color: #ff7028;
  color: #ffffff;
}

label {
  padding: 10;
  margin: 10;
}
`;

export default GlobalStyle;

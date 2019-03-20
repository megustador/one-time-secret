export function render(body: string): string {
  return `
  <!doctype html>
  <head>
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <meta charset="utf-8">
    <title>One Time Link</title>
  </head>
  <style>
  body{
    font-family: "Roboto";
  }
  .navbar {
  background-color: #00225a;
}
  .input-area{
    border: 1px solid red;
  }
  #exampleForm2{
    width: 50%;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #cbcbcb;
  }
  
  td,
  th {
    padding: 0;
    border-left: 1px solid #cbcbcb;/*  inner column border */
    border-width: 0 0 0 1px;
    font-size: inherit;
    margin: 0;
    overflow: visible; /*to make ths where the title is really long work*/
    padding: 0.5em 1em; /* cell padding */
  }
  
  table td:first-child,
  table th:first-child {
      border-left-width: 0;
  }
  
  table thead {
      background-color: #e0e0e0;
      color: #000;
      text-align: left;
      vertical-align: bottom;
  }
  
  table td {.navbar {
      backgr  background-color: #00225a;;
  }
  
}

.buttons {
  padding-top: 20px;
}

.wrapper {
  width: 50%;
  margin: 0 auto;
  padding-left: 10%;
  margin-top: 50px;
}
.alert {
  width: 75%;
  padding: 10px;
  margin: 0;
}
  </style>
  <body>
    <nav class="navbar navbar-light">
      <a class="navbar-brand" href="#">
        <img src="https://bit.ly/2Hwj9I4" width="200" height="" class="d-inline-block align-top" alt="">
      </a>
    </nav>
    ${body}
    <hr/>
  </body>


  </html>
`.trim();
}

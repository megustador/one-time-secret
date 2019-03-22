export function render(body: string): string {
  return `
  <!doctype html>
  <head>
  <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>
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
.t1 {
  display: inline-block;
  color: white;
  padding-top: 5px;
  padding-left: 5px;

}
  </style>
  <body>
    <nav class="navbar navbar-light">
      <a class="navbar-brand" href="./share">
        <i class='fas fa-fingerprint d-inline-block align-top' alt="" style='font-size:48px;color:White'></i>
        <h2 class="t1" >T1-SOLUTION<h2>
      </a>
    </nav>
    ${body}
    <hr/>
  </body>


  </html>
`.trim();
}

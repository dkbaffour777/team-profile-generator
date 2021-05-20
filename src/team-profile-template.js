module.exports = ({manager, engineer, intern}) =>  `
  <!doctype html>
  <html lang="en">

  <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

      <title>Team Profile Generator</title>
  </head>

  <body>
      <div class="w-100 fs-1 fw-bold text-center p-4 bg-info text-white">
          Team Profile Generator
      </div>
      <div class="container">
          <div class="row d-flex justify-content-center p-4">
              <div class="card" style="width: 22rem;">
                  <div class="card-body">
                    <h5 class="card-title">${manager.getName()}</h5>
                    <p class="card-text">${manager.getRole()}}</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                  </ul>
                </div>
          </div>
          <div class="row row d-flex justify-content-evenly flex-wrap p-4">
              ${(engineer.length > 0) ?
                engineer.map(person => 
                `<div class="card mb-3" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${person.getName()}</h5>
                      <p class="card-text">${person.getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID: ${person.getId()}</li>
                      <li class="list-group-item">Email: <a href="mailto:${person.getEmail()}" class="card-link">${person.getEmail()}</a></li>
                      <li class="list-group-item">GitHub: <a href="http://github.com/${person.getGithub()}" target="_blank">${person.getGithub()}</a></li>
                    </ul>
                  </div>`).join('')
              : ''}
              ${(intern.length > 0) ?
                intern.map(person => 
                `<div class="card mb-3" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${person.getName()}</h5>
                        <p class="card-text">${person.getRole()}</p>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${person.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${person.getEmail()}" class="card-link">${person.getEmail()}</a></li>
                        <li class="list-group-item">School: ${person.getSchool()}</li>
                      </ul>
                  </div>
                `).join('')
              : ''}
          </div>
  </body>

  </html>
`;
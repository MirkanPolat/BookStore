function renderBooksTemplate(i) {
    return /*html*/ `
          <div class="books-shield" >
              <div>
                <h1>${books[i].name}</h1>
              </div>
              <div class="img-divs">
                  <img class="myBook" src="img/cover-img.png">
              </div>
              <div class="prices">
                   <h2> ${books[i].price.toFixed(2)} € </h2>
                   <div class="likes-counter" >
                   <h2>${books[i].likes} </h2> <div id="LikeContent${i}"></div>
              </div>
              </div>
              <table>
                  <tr>
                      <td>Author:</td>
                      <td>${books[i].author}</td>
                  </tr>
                  <tr>
                      <td>Erscheinungsjahr:</td>
                      <td>${books[i].publishedYear}</td>
                  </tr>
                  <tr>
                      <td>genre:</td>
                      <td>${books[i].genre}</td>
                  </tr>
              </table>
              <div>
                  <h2>Kommentare:</h2>
              </div>
              <div class="all-comments" id="comments-block${i}">
  
              </div>
  
              <div class="btn-row">
                  <input class="input" id="comment-input${i}" type="text" placeholder="Kommentar verfassen...">
                  <button class="btn" onclick="addComment(${i})">Absenden</button>
              </div>
  
  
          </div>
      `;
  }
  function renderCommentsTemplate(i, j) {
    return /*html*/ `
      <div>
      <table>
          <tr>
              <td>${books[i].comments[j].name}</td>
              <td>${books[i].comments[j].comment}</td>
          </tr>
      </table>
  </div>
      `;
  }
  
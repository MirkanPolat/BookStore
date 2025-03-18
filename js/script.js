function renderBooksLibrary (){
    let library = document.getElementById('books-library');
    library.innerHTML = ""
   for (let i = 0; i < books.length; i++) {
    
    
    
    library.innerHTML += renderBooksTemplate(i);
    renderHeart(i);
    for (let j = 0; j < books[i].comments.length; j++) {
        let comments = document.getElementById(`comments-block${i}`);
        comments.innerHTML += renderCommentsTemplate(i,j);
    }

   }
   
}

function renderCommentsTemplate(i,j){
    return /*html*/`
    <table>
        <tr>
            <td>${books[i].comments[j].name}</td>
            <td>${books[i].comments[j].comment}</td>
        </tr>
    </table>
    `
}

function addComment(i){
    let inputField = document.getElementById(`comment-input${i}`).value
    inputField.innerHTML = ""
   

   books[i].comments.push({name: "guest", comment: inputField})
   document.getElementById(`comments-block${i}`).innerHTML = ""
   

   renderBooksLibrary();

}

function renderHeart(i){
    let heartRef = document.getElementById(`LikeContent${i}`);
    heartRef.innerHTML= "";

    if (books[i].liked == true){
        heartRef.innerHTML = `<img onclick="likeCLick(${i})" class="heart-img" src="./img/heart-full.png" alt="heart">`
    }else{
        heartRef.innerHTML = `<img onclick="likeCLick(${i})" class="heart-img" src="./img/herz-leer.png" alt="heart">`
    }
}

function likeCLick(i){
    if (books[i].liked == true){
        books[i].likes -=1 
        books[i].liked = false
        renderBooksLibrary();
    }else{
        books[i].likes +=1
        books[i].liked = true
        
        renderBooksLibrary();
    }
    
}

function renderBooksTemplate(i){
    return /*html*/`
        <div class="books-shield" >
            <div>
              <h1>${books[i].name}</h1>
            </div>
            <div class="img-divs">
                <img class="myBook" src="img/cover-img.png">
            </div>
            <div class="prices">
                 <h2> ${books[i].price.toFixed(2)} € </h2>
                <h2> ${books[i].likes} </h2> <div id="LikeContent${i}"></div>
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

            <div>
                <input id="comment-input${i}" type="text" placeholder="Kommentar verfassen...">
                <button onclick="addComment(${i})">Absenden</button>
            </div>


        </div>

    `
}

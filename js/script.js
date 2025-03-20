function renderBooksLibrary (){
    getFromLocalStorage();
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


function addComment(i){
    let inputField = document.getElementById(`comment-input${i}`).value
    inputField.innerHTML = ""
   
    if( inputField == "" ){
        alert("bitte füge einen title und text ein")
    }else{
   books[i].comments.push({name: "guest", comment: inputField})
   document.getElementById(`comments-block${i}`).innerHTML = ""

   saveToLocalStorage();
   renderBooksLibrary();

}


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
        saveToLocalStorage();
        renderBooksLibrary();
        
    }else{
        books[i].likes +=1
        books[i].liked = true
        
        saveToLocalStorage();
        renderBooksLibrary();
        
    }
}


function saveToLocalStorage(i){
    localStorage.setItem("savings",JSON.stringify(books));

}

function getFromLocalStorage(i){
    myArrStorage = JSON.parse(localStorage.getItem("savings"));
    
    

    if(myArrStorage != null){
        books = myArrStorage;
    }
}

const livrolist = document.getElementById('book-list');

function renderBook(doc){
    let li = document.createElement('li');
    let titulo = document.createElement('span');
    let autor = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    titulo.textContent = doc.data().titulo;
    autor.textContent = doc.data().autor;
    
    li.appendChild(titulo);
    li.appendChild(autor);

    livrolist.appendChild(li);
}

db.collection('libri-firestore')
.get()
.then(
    (snapshot) =>{
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
            renderBook(doc)
        });
    }
)

const form = document.getElementById("add-book-form")

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    db.collection('libri-firestore').add({
        autor: form.autor.value,
        titulo: form.titulo.value
    }).then(() =>{
        form.autor.value = '';
        form.titulo.value = '';
        window.location.reload();
    })
});
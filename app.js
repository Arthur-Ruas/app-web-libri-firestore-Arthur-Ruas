db.collection('libri-firestore')
    .get()
    .then(
        (snapshot) =>{
            snapshot.docs.forEach(doc => {
                console.log(doc.data())
            });
        }
    )
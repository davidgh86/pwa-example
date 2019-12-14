db.enablePersistence()
  .catch(err => {
      if (err.code == 'failed-precondition'){
          // probably multiple tabs open at once
         // console.log("persistence failed") 
      } else if (err.code == 'unimplemented') {
          // lack of browser support
          // console.log("persistence is not available")
      }
    })

// real-time listener
db.collection('recipes').onSnapshot((snapshot) => {
    // console.log(snapshot.docChanges())
    snapshot.docChanges().forEach((change) => {
        // console.log(change, change.doc.data(), change.doc.id)
        if (change.type === 'added'){
            renderRecipe(change.doc.data(), change.doc.id)
        }
        if (change.type === 'removed'){
            
        }
    });
})

const form = document.querySelector("form")
form.addEventListener("submit", evt => {
    evt.preventDefault()

    const recipe = {
        title : form.title.value,
        ingredients : form.ingredients.value
    }

    db.collection('recipes').add(recipe)
      .catch(err => {
            console.log(err)
      })

    form.title.value = ''
    form.title.ingredients = ''
})
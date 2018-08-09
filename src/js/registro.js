
btnRegistrar.addEventListener('click', e => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let personVisit = document.getElementById('personVisit').value;
    let company = document.getElementById('company').value;

    if (name === '' || email === '' || personVisit === '' || company === '') {
        alert("Ingresa los datos Gracias")
    } else {
        db.collection("visitors").add({
            name: name,
            mail: email,
            personVisit: personVisit,
            company: company
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('personVisit').value = "";
                document.getElementById('company').value = "";
                window.location.href = 'camera.html';
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }
});




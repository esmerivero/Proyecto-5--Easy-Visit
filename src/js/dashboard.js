const tableBody = document.getElementById('table-body-visitors');
const visitorsRef = db.collection('visitors');

const query = visitorsRef.orderBy('createdAt', 'desc');

query.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    let name = doc.data().name;
    let mailVisitor = doc.data().mail;
    let companyVisited = doc.data().company;
    let personVisited = doc.data().personVisit;
    let date = doc.data().createdAt.getDate();
    let month = doc.data().createdAt.getMonth();
    let year = doc.data().createdAt.getFullYear();
    let hour = doc.data().createdAt.getHours();
    let min = doc.data().createdAt.getMinutes();

    tableBody.innerHTML += `<tr>
                            <td>${name}</td>
                            <td>${mailVisitor}</td>
                            <td>${date}/${month}/${year}</td>
                            <td>${hour}:${min}</td>
                            <td>${companyVisited}</td>
                            <td>${personVisited}</td>
                            </tr>`;
  });
});

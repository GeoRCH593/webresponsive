const form = document.getElementById("formSearch")
const tableU = document.getElementById("tableU")

const printUnivesrities = (universities)=> {
    const body = document.getElementById('tbody');
    var bodyhtml = "";
    universities.forEach(element => {
        const rowhtml = `<tr><td>${element.name}</td><td>
        <a href="http://${element.domains}" target="_blank">${element.domains}</a></td></tr>`;
        bodyhtml = bodyhtml + rowhtml;
    });
    body.innerHTML = bodyhtml;
}

function searchByCountry (country) {
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
    .then(res => res.json())
    .then (universities => printUnivesrities(universities) );
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const country = document.getElementById("country").value;
    searchByCountry(country);
}); 


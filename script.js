
const loadData = async (e) => {
    let response = await fetch("https://meme-api.herokuapp.com/gimme");
    let data = await response.json();
    let data1 = renderDom(data);
    console.log(data);
    return data;
};
const renderDom = (d) => {
    const { title, preview, url } = d;
    var html = "";
    html += `<div class="cases">
        <p> ${title} </p>
        <hr />
        <img class="urlimg" src="${url}" alt="img" />

    </div>`;
    document.getElementById("results").innerHTML = html;
};
window.addEventListener("load", function () {
    var btn = document
        .getElementById("btn")
        .addEventListener("click", loadData);
});

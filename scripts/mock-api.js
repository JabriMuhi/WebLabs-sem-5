let btn = document.querySelector("#btn");
let input = document.querySelector("#rm-value");

btn.addEventListener("click", () => {
    let txt = input.value.trim();
    if (txt === "") {
        alert("Укажите нормер персонажа");
    } else {
        loadData(txt);
    }
});

async function loadData(id) {
    let correct_url = "https://rickandmortyapi.com/api/character/" + id;
    let response = await fetch(correct_url)
        // .then(response => response.json())

    if (response.ok) {
        response = await response.json();

        document.getElementById("rick-morty").innerHTML = response.name;
        console.log(response.name)
    } else {
        alert("Ошибка HTTP: " + response.status);
    }


}

// loadData()
//     .then(() => {
//         let preloaderEl = document.getElementById('preloader');
//         preloaderEl.classList.add('hidden');
//         preloaderEl.classList.remove('visible');
//     });
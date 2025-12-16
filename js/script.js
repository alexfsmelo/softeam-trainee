let fotosPatos = JSON.parse(localStorage.getItem("meus-patos")) || [];

if (fotosPatos.length === 0) {
    fotosPatos = [
        {
            titulo: "Patonildo",
            descricao: "O primeiro grande pato! #patinho #patos #fyquack",
            imagem: "img/teste.jpeg"
        },
        {
            titulo: "Tio Patinhas",
            descricao: "tio ricasso e pato. viva os patos! #pataquada #fyquack",
            imagem: "img/teste2.jpeg"
        }
    ];
}

let container = document.getElementById("meus-patos");

function renderizarFotos() {
    container.innerHTML = '';

    fotosPatos.forEach(function(foto) {
        container.innerHTML += `
            <div class="card">
                <img src="${foto.imagem}" class="card-img"/>
                <div>
                    <h3>${foto.titulo}</h3>
                    <p>${foto.descricao}</p>
                </div>
            </div>`;
    });
}

renderizarFotos();

function adicionarFoto() {

    let nomeInput = document.getElementById("titulo");
    let descricaoInput = document.getElementById("descricao");
    let fotoInput = document.getElementById("link");

    if (nomeInput.value === '' || descricaoInput.value === '' || fotoInput.value === '') {
        alert("Quack! Por favor, preencha todos os campos.");
        return;
    } else {

        let novaFoto = {
            titulo: nomeInput.value,
            descricao: descricaoInput.value,
            imagem: fotoInput.value
        };

        fotosPatos.push(novaFoto);
        localStorage.setItem("meus-patos", JSON.stringify(fotosPatos));

        renderizarFotos();
        
        nomeInput.value = '';
        descricaoInput.value = '';
        fotoInput.value = '';
    }
}

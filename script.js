const fomrLogin = document.querySelector('[name="form-login"]')
const dados = {
    nome: "Ada Lovelace",
    email: "ada@email.com",
    telefones: [
        { 
            numero: "(11) 99123-4567",
            tipo: "casa"
        }
    ],
    endereco: {
        logradouro: "Rua das programadoras",
        cidade: "Vale do silício",
        estado: "Codefornia",
        cep: "10100-100",
        pais: "Programaland"
    }
}

document.getElementById("nome").value = dados.nome
document.getElementById("email").value = dados.email
document.getElementById("telefones").value = dados.telefones[0].numero
document.getElementsByName("tipo")[0].checked = true
document.getElementById("logradouro").value = dados.endereco.logradouro
document.getElementById("cidade").value = dados.endereco.cidade
document.getElementById("estado").value = dados.endereco.estado
document.getElementById("cep").value = dados.endereco.cep
document.getElementById("pais").value = dados.endereco.pais


 
fomrLogin.addEventListener('submit', (event) => {
     event.preventDefault()

     const fd = new FormData(fomrLogin)

     const entradas = Object.fromEntries(fd)
     console.log(entradas)

 })


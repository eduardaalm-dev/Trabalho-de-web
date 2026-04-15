let ja_clicou = false

function onclick_matricula() {
    if (ja_clicou) return;

    const infos_matricula = document.getElementById("lista_matricula") /* selecionando o ul do html */
    const item_matricula1 = document.createElement("li") 
    const item_matricula2 = document.createElement("li") /* criando 3 elementos li*/
    const item_matricula3 = document.createElement("li")

    item_matricula1.classList.add("info1_matricula")
    item_matricula2.classList.add("info2_matricula")
    item_matricula3.classList.add("info3_matricula")

    infos_matricula.appendChild(item_matricula1)
    infos_matricula.appendChild(item_matricula2) /* adicionando 3 li na lista */
    infos_matricula.appendChild(item_matricula3)

    let instagram = "@eplimoeiro_"

    item_matricula1.textContent = "Localização: Rua gonçalves pereira, S/N, Luíz Alves de Freitas, Limoeiro do Norte, CE."
    item_matricula2.textContent = "Documentos necessários: Cópia da certidão de nascimento ou RG do estudante. Cópia do comprovante de residência. Cópia do histórico escolar ou declaração de conclusão do ensino fundamental." /* definindo os textos que estarão dentro dos li */
    item_matricula3.innerHTML = `Mais informações: Ligue (88) 9.9972-7052 ou acesse nosso instagram <a class='link_instagram' href='https://www.instagram.com/eplimoeiro_/' target='_blank'> ${instagram} </a>`

    ja_clicou = true
}

/* Contagem dos slides,  saber qual vai estar aparecendo. */

let count = 1; /* define que o contador começa em 1, ou seja, começa pelo primeiro slide */ 
document.getElementById("radio1").checked = true; /* diz que o primeiro botao vai ser marcado quando o contador for 1 */

function next_image() {
    count = count + 1; /* diz que o contador vai aumentando de 1 em 1 */
    if (count > 4) {
        count = 1    /* se o contador for maior que 4, ou seja, se passar do slide 4, volta pro slide 1*/
    }

    document.getElementById("radio" + count).checked = true; /* diz que os botoes vao aumentando e assim que eles forem selecionados
    eles vao ser checados(marcados) */
}

setInterval ( function() {
    next_image(); /* esta criando uma função que se repete, de 15 em 15 segundos */
}, 5000)
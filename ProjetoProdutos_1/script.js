class Store {
    constructor(){
        this.nome = ''
        this.valor = ''
        this.img = ''
    }
    addProdutos(){
        
        this.nome = document.getElementById('nome').value
        this.valor = document.getElementById('valor').value
        this.img = document.getElementById('img')
        this.img.src = localStorage.setItem('img',this.img)
        const obj = 
            {
                nome:this.nome,
                valor: this.valor,
                img:localStorage.getItem('img')
            }

        let verificar = !Object.values(obj).every(x => x !== '' && x !== null)
        if(verificar){
            alert('Campo Vazio')
            return;
        }
        else{
            let save = JSON.stringify(obj)
            localStorage.setItem('salvo', save);
            console.log(save)
        }
        
}
    exibir(){
        let campo = document.getElementById('exibir')
        let data = localStorage.getItem('salvo')
        const getDados= JSON.parse(data)
        campo.innerHTML += `<div> Elementos Salvos:
        Nome:${getDados.nome}
        <br>Valor:${getDados.valor}
        <br>Imagem:${getDados.img}
        </div>`
        console.log(getDados)

    }
}
let store = new Store
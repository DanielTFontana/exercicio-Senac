let conjunto = []
class Store {
    constructor(){
        this.nome = ''
        this.valor = ''
        this.id = 0

        
    }
    addProdutos(){

        this.nome = document.getElementById('nome').value
        this.valor = document.getElementById('valor').value
        this.retorno = document.getElementById('retorno')   
        let obj =
            {
                nome:this.nome,
                valor: this.valor,
                id:this.id++,

            }

           
        let verificar = !Object.values(obj).every(x => x !== '' && x !== null)
        if(verificar){
            alert('Campo Vazio')
            return;
        }
        else{

           let save = localStorage.getItem('save')

            if(save === null || save === undefined){
                conjunto.push(obj)
                let toString = JSON.stringify(conjunto)
                localStorage.setItem('save', toString)
            }
            else{
                let addProdutos =JSON.parse(save)    
                let verificar = addProdutos.some(( i => i.nome === obj.nome))               
                if(verificar){
                    alert('Produto já cadastrado.')
                    return;
                }
            addProdutos.push(obj)
            let showArray = JSON.stringify(addProdutos)
            localStorage.setItem('save', showArray)
            console.log(addProdutos)
            this.retorno.innerHTML=`<p> ${showArray} </p>` 
            }
    
            
        }
}
excluir(){

    let pegandoArray =localStorage.getItem('save')
    let stringObj = JSON.parse(pegandoArray)
    stringObj.splice(parseInt(this.excluirPosicao),1,)   

    this.dadosAposExluir= JSON.stringify(stringObj)

    stringObj = JSON.stringify(stringObj)
    this.retorno.innerHTML =`<p> ${this.dadosAposExluir}</p>`
    localStorage.setItem("save", stringObj)
    
    console.log(this.dadosAposExluir)
}

atualizar(){
debugger
    let getArray = localStorage.getItem('save')
    let passarArray = JSON.parse(getArray)
    let titulo = document.getElementById('findNome').value
    let novoNome = document.getElementById('attNome').value
    let index = passarArray.findIndex( x => x.nome/*campo do array*/ === titulo) /*campo do getbyId*/
     if (index < 0 ){
     alert('nome não encontrado')
     return;
     }
passarArray[index].nome = novoNome

    console.log (passarArray)
    localStorage.setItem('save', JSON.stringify(passarArray))

    let mostrarNovo = localStorage.getItem('save')

    this.retorno.innerHTML=` ${mostrarNovo}`
}

gerarAleatorio(){
    let getArray = localStorage.getItem('save')
    let passarArray = JSON.parse(getArray)

    let times = 0
    while(times <= 5){
        let stringAleatoria =''
        let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVXWYYZabcdefghijklmnopqrstuvxwyz0123456789'
        for(let i = 0; i <= 5; i++){
            stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
        }
        const obj={
            'aleatorio1': stringAleatoria,
            'aleatorio2': stringAleatoria,
            'aleatorio3': stringAleatoria,
            'aleatorio4': stringAleatoria,
            'aleatorio5': stringAleatoria,
        }
        conjunto.push(obj)
        times++
    }
    console.log(conjunto)
}

}
let store = new Store

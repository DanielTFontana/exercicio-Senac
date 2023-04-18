let conjunto = []
class Store {
    constructor(){
        this.nome = ''
        this.valor = ''
        this.id = 0
        this.deletar = this.excluir()
        
    }
    addProdutos(){
debugger
        this.nome = document.getElementById('nome').value
        this.valor = document.getElementById('valor').value
        this.retorno = document.getElementById('retorno')   
        this.deletar = this.excluir
        let obj =
            {
                nome:this.nome,
                valor: this.valor,
                id:this.id++,
                deletar: this.deletar
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

encontrar(){
    let findID = document.getElementById('findId').value
    let getArray = localStorage.getItem('save')
    
    let passarArray = JSON.parse(getArray)
    console.log (passarArray)
    for(let i = 0; i <passarArray.length; i++){
        console.log(passarArray[findID])
    }


}
atualizar(){
    //encontrar o id do elemento e depois alterar

    let newNome = document.getElementById('attNome')
    let newValor = document.getElementById('attValor')

    this.nome = newNome
    this.valor = newValor
}


}
let store = new Store
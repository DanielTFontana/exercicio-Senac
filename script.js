class Store {
    constructor(){
        this.nome = ''
        this.valor = ''
        this.excluirPosicao = ''
        this.id = ''
        this.dadosAposExluir = []
    }
    addProdutos(){
        
        this.nome = document.getElementById('nome').value
        this.valor = document.getElementById('valor').value
        this.retorno = document.getElementById('retorno')        
        let conjunto = []
        this.id = conjunto.length+1
        let obj =
            {
                nome:this.nome,
                valor: this.valor,
                
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
                let addProdutos = JSON.parse(save)
                let verificar = addProdutos.some(( i => i.nome === obj.nome))               

                if(verificar){
                    alert('Produto já cadastrado.')
                    return;
                }
            addProdutos.push(obj)
            let showArray = JSON.stringify(addProdutos)
            localStorage.setItem('save', showArray)
            console.log(addProdutos)
            this.retorno.innerHTML=`<p> ${this.id} ${showArray} </p>` //só retorna o id na frente de um array, o restante vem sem            
            }//para salvar esta precisando salvar 2x. Às vezes aparece o [object, Object] igual ontem
    
            
        }
}
excluir(){


    debugger
    
    this.excluirPosicao = document.getElementById('remover').value
    let pegandoArray =localStorage.getItem('save')
    let stringObj = JSON.parse(pegandoArray)
    stringObj.splice(parseInt(this.excluirPosicao),1)


    this.dadosAposExluir=stringObj
    
   
  
    stringObj = JSON.stringify(stringObj)

    localStorage.setItem("save", stringObj)
    this.retorno.innerHTML =`<p> ${this.dadosAposExluir}</p>`
    console.log(this.dadosAposExluir)//não funciona repedidamente
}
atualizar(){

}


}
let store = new Store

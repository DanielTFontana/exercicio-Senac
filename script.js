
class Store {
    constructor(){
        this.nome = ''
        this.valor = ''
        this.excluirPosicao = ''
    }
    addProdutos(){
        
        this.nome = document.getElementById('nome').value
        this.valor = document.getElementById('valor').value
        this.retorno = document.getElementById('retorno')
        let conjunto = []
        
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
            this.retorno.innerHTML=`<p> ${showArray} </p>`               
            }
    
            
        }
        
}
excluir(){
    this.excluirPosicao = document.getElementById('remover').value
    let pegandoArray =localStorage.getItem('save')
    let stringObj = JSON.parse(pegandoArray)
    stringObj.splice(this.excluirPosicao,1)
    console.log(arrayObj)
}


}
let store = new Store
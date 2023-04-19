class Produtos{
    
    constructor(){
        
        this.id = 1
        this.arrayProdutos = []
    }
    add(){
        let produto =this.lerDados()
        console.log(produto)
    }

    lerDados(){debugger
        let obj = {}
        obj.nome= document.getElementById('nome').value
        obj.valor = document.getElementById('valor').value
        
        let verificar = !Object.values(obj).every(x => x !== '' && x !== null)
        if(verificar){
            alert('Campo Vazio')
            return;
        }
        else{
            this.arrayProdutos.push(produto)
            obj.id = this.arrayProdutos.length
            console.log(this.arrayProdutos)
        }
        return obj
    }


    excluir(){

    }
    editar(){

    }
}
let produto = new Produtos()

// {/* <tr>
// <td>1 </td>
// <td>Alface</td>
// <td>2 reais</td>
// <td>
//     <img src="./public/lixeira-removebg-preview.png" onclick="produto.excluir()" alt="">
//     <img src="./public/editar-removebg-preview.png" onclick="produto.editar()" alt="">
// </td>
// </tr> */}
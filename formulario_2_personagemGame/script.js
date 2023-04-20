class Character{
    
    constructor(){
        
        this.id = 1
        this.arrayCharacter = []
    }
    add(){
        let produto =this.lerDados()
        console.log(produto)
    }

    lerDados(){debugger
        let obj = {}
        obj.nome= document.getElementById('nome').value
        obj.profissao = document.getElementById('profissao').value
        obj.altura = parseInt(document.getElementById('altura').value)
        obj.peso = parseInt(document.getElementById('peso').value)
        
        let verificar = !Object.values(obj).every(x => x !== '' && x !== null)
        if(verificar){
            alert('Campo Vazio')
            return;
        }
        else{
            this.arrayCharacter.push(obj)
            obj.id = this.arrayCharacter.length
            let data = JSON.stringify(this.arrayCharacter)
            localStorage.setItem('save',data)
            let getDados = localStorage.getItem(('save'))
            let parse = JSON.parse(getDados)
            console.log(parse)
            console.log(this.arrayCharacter)
        }
        return obj
    }


    excluir(){

    }
    editar(){

    }
}
let produto = new Character()

// {/* <tr>
// <td>1 </td>
// <td>Alface</td>
// <td>2 reais</td>
// <td>
//     <img src="./public/lixeira-removebg-preview.png" onclick="produto.excluir()" alt="">
//     <img src="./public/editar-removebg-preview.png" onclick="produto.editar()" alt="">
// </td>
// </tr> */}
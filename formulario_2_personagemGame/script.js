class Character{
    
    constructor(){
        
        this.id = 1
        this.nome= ''
        this.profissao= ''
        this.altura = 0
        this.peso = 0
        this.img = ''
        this.arrayCharacter = []
    }
    add(){
        this.lerDados()
        console.log(char)
        this.criarChar()
        this.limpar()
        
    }

    lerDados(){
        debugger
        this.nome=document.getElementById('nome').value
        this.profissao =document.getElementById('profissao').value
        this.altura =parseInt(document.getElementById('altura').value)
        this.peso =parseInt(document.getElementById('peso').value)

        let selectValue = document.getElementById('profissao').value

        switch (selectValue){
            case 'arqueiro':
                this.img = './public/archer-removebg-preview.png';
                break
            
            case 'guerreiro':
                this.img = './public/kina-removebg-preview.png';
                break

            case 'mago':
                this.img = './public/mage-removebg-preview.png'
                break

            case 'druida':
                this.img = './public/druid-removebg-preview.png'
                break
}

        let obj = {}
        obj.nome= this.nome,
        obj.profissao = this.profissao,
        obj.altura = this.altura,
        obj.peso = this.peso,
        obj.img = this.img        
        
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
           
        }
        return obj
        
        
    }

    criarChar(){
        debugger
        let tbody= document.getElementById('tbody')
        let getData = localStorage.getItem('save')
        let obj2 = JSON.parse(getData)
        
        console.log(obj2)



        tbody.innerHTML += ` <tr id="${JSON.stringify(obj2.length)}">
        <td> <img style="width: 50px; height: 50px;" src="${JSON.stringify(obj2.img)}"></td>
        <td>${JSON.stringify(obj2.id)}</td>
        <td>${JSON.stringify(obj2.nome)}</td>
        <td>${JSON.stringify(obj2.profissao)}</td>
        <td>${JSON.stringify(obj2.altura)}</td>
        <td>${JSON.stringify(obj2.peso)}</td>
        <td>
            <img id="botaoExcluir" src="./public/remove.png" onclick="char.excluir()" alt="">
            <img id="botaoEditar" src="./public/edit.png" onclick="char.editar()" alt="">
        </td>
        </tr>`
        console.log(this.arrayCharacter)
    }
    
    limpar(){
        document.getElementById('nome').value = ''
        document.getElementById('profissao').value = ''
        document.getElementById('altura').value =''
        document.getElementById('peso').value =''

    }
        
        
        
    


    excluir(){
        let deletarId =this.arrayCharacter.length
        this.arrayCharacter.splice(parseInt(deletarId),1)
        this.criarChar()
    }
    editar(){

    }
}
let char = new Character()

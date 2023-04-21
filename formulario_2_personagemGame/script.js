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
        this.criarChar()
        this.limpar()
        
    }

    lerDados(){
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
        
        let tbody= document.getElementById('tbody')
        let getData = localStorage.getItem('save')
        let obj2 = JSON.parse(getData)
        

        tbody.innerHTML ='';
        for(let i = 0; i < obj2.length; i++){
        
        tbody.innerHTML += ` <tr id="${obj2[i].id}">
        <td> <img style="width: 50px; height: 50px;" src="${obj2[i].img}"></td>
        <td>${obj2[i].id}</td>
        <td>${obj2[i].nome}</td>
        <td>${obj2[i].profissao}</td>
        <td>${obj2[i].altura}</td>
        <td>${obj2[i].peso}</td>
        <td>
            <img id="botaoExcluir" src="./public/remove.png" onclick="char.excluir()" alt="">
            <img id="botaoEditar" src="./public/edit.png" onclick="char.editar()" alt="">
        </td>
        </tr>`
    }
        console.log(this.arrayCharacter)
    }
    
    limpar(){
        document.getElementById('nome').value = ''
        document.getElementById('profissao').value = ''
        document.getElementById('altura').value =''
        document.getElementById('peso').value =''

    }
       
    excluir(){
        debugger
        let getData = localStorage.getItem('save')
        let tbody = document.getElementById('tbody')

        let obj2 = JSON.parse(getData)
        obj2.splice()
        console.log(obj2)
        this.criarChar()
    }
    editar(){

    }
}
let char = new Character()

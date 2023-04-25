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
        <td id="tdId">${obj2[i].id}</td>
        <td id="tdNome">${obj2[i].nome}</td>
        <td id="tdProf">${obj2[i].profissao}</td>
        <td id="tdAltura">${obj2[i].altura}</td>
        <td id="tdPeso">${obj2[i].peso}</td>
        <td>
            <img id="botaoExcluir" src="./public/remove.png" onclick="char.excluir(${obj2[i].id})" alt="">
            <img id="botaoEditar" src="./public/edit.png" onclick="char.editar(${obj2[i].id})" alt="">
        </td>
        </tr>`
        
    }
    let botaoSave = document.getElementById('botaoSave')
    botaoSave.setAttribute('value', 'Adicionar')
    }
    
    limpar(){
        document.getElementById('nome').value = ''
        document.getElementById('profissao').value = ''
        document.getElementById('altura').value =''
        document.getElementById('peso').value =''

    }

    excluir(id){
        let getData = localStorage.getItem('save')
        let obj2 = JSON.parse(getData)
        
        for(let i = 0; i < obj2.length; i++){
            if(obj2[i].id == id){            
                obj2.splice(obj2[i].id-1,1)
                this.arrayCharacter = obj2

                for(let i = 0; i < obj2.length; i++){
                    obj2[i].id = i+1
                }       

            }
        }
        let data = JSON.stringify(obj2)            
            localStorage.setItem('save',data)
            this.criarChar()
        
    }
    editar(id){
        
        document.getElementById('nome').focus()
        let botaoSave = document.getElementById('botaoSave')
        botaoSave.setAttribute('value', 'Salvar')
        let getData = localStorage.getItem('save')

        let obj2 = JSON.parse(getData)

        for(let i = 0; i < obj2.length; i++){
            if(obj2[i].id == id){            
                obj2[i].nome = ''
                obj2[i].profissao = ''
                obj2[i].altura = ''
                obj2[i].peso = ''
                this.arrayCharacter = obj2
            }   
        }
            let data = JSON.stringify(obj2)            
            localStorage.setItem('save',data)
            botaoSave.removeEventListener(onclick, char.criarChar())
            botaoSave.addEventListener(onclick, char.salvar(id))
    }

    salvar(id){

        debugger
        let getData = localStorage.getItem('save')
        let botaoSave = document.getElementById('botaoSave')
        let obj2 = JSON.parse(getData)
        
        for(let i = 0; i < obj2.length; i++){
                        
                obj2[i].nome = document.getElementById('nome').value     
                obj2[i].profissao = document.getElementById('profissao').value
                obj2[i].altura = parseInt(document.getElementById('altura').value)
                obj2[i].peso =  parseInt(document.getElementById('peso').value)
                
              
        }
        this.arrayCharacter = obj2
        botaoSave.removeEventListener(onclick, char.salvar(id))
        botaoSave.addEventListener(onclick, char.criarChar())
        this.criarChar()
    }

}
let char = new Character()

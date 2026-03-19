// O fetch => busca o arquivo
//.json() =>  transforma o json em objeto  
// data.roupasMasc => acessa o produto 
// forEach => percorre o produtos

fetch("/data/produtos.json") 
.then( response => response.json()) 
.then( data => (
    data.roupasMasc.forEach( element => {
        console.log(element)
    })


));

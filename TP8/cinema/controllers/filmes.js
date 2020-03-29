var Filmes = module.exports
const axios = require('axios')

var prefixes = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX noInferences: <http://www.ontotext.com/explicit>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX c: <http://www.di.uminho.pt/prc2020/2020/2/cinema#>
`

var getLink = "http://localhost:7200/repositories/cinema2020" + "?query=" 


Filmes.getLista = async function(req){
    var query = `select ?f ?titulo ?duracao ?data ?lingua ?pais ?realizador ?rnome where {
        ?f a c:Filme .
        ?f c:título ?titulo .
        ?f c:duração ?duracao .
        ?f c:dataLançamento ?data .
        ?f c:temLíngua ?l .
        bind(strafter(str(?l),"cinema#") as ?lingua) .
        filter(?lingua = 'English') .
        ?f c:temPaísOrigem ?p . 
        bind(replace(strafter(str(?p),"cinema#"),"_"," ") as ?pais) .
        ?f c:temRealizador ?realizador .
        ?realizador c:nome ?rnome .
    } ` 
    var encoded = encodeURIComponent(prefixes + query)

    try{
        var response = await axios.get(getLink + encoded)
        return response.data
    }
    catch(e){
        throw(e)
    } 
}

Filmes.getFilme = async function(id){
    var query = `select ?titulo ?duracao ?data ?pais ?realizador where {
        c:${id} rdf:type c:Filme . 
        c:${id} c:título ?titulo .
    	c:${id} c:duração ?duracao .
    	c:${id} c:dataLançamento ?data .
        c:${id} c:temPaísOrigem ?p .
        bind(replace(strafter(str(?p),"cinema#"),"_", " ") as ?pais).
    	c:${id} c:temRealizador ?realizador
    } ` 
    var encoded = encodeURIComponent(prefixes + query)

    try{
        var response = await axios.get(getLink + encoded)
        return response.data
    }
    catch(e){
        throw(e)
    } 
}


Filmes.getAtores = async function(req){
    var query = `select distinct ?nome where {
        ?id rdf:type c:Ator .
        ?id c:nome ?nome .
    } ` 
    var encoded = encodeURIComponent(prefixes + query)

    try{
        var response = await axios.get(getLink + encoded)
        return response.data
    }
    catch(e){
        throw(e)
    } 
}

Filmes.getPersonagens = async function(req){
    var query = `select distinct ?p ?nome ?ator where {
        ?p rdf:type :Personagem.
    	?p :nome ?nome .
		?p :éRepresentadoPor ?a.
    	?a rdf:type :Ator.
    	?a :nome ?ator
    }` 
    var encoded = encodeURIComponent(prefixes + query)

    try{
        var response = await axios.get(getLink + encoded)
        return response.data
    }
    catch(e){
        throw(e)
    } 
}

Filmes.getPersonagem = async function(id){
    var query = `select  ?p ?nome ?ator where {
        ?${id} rdf:type :Personagem.
    	?${id} :nome ?nome .
		?${id} :éRepresentadoPor ?a.
    	?a rdf:type :Ator.
    	?a :nome ?ator
    }` 
    var encoded = encodeURIComponent(prefixes + query)

    try{
        var response = await axios.get(getLink + encoded)
        return response.data
    }
    catch(e){
        throw(e)
    } 
}

Filmes.getPaises = async function(req){
    var query = `select distinct ?pais where {
        ?p rdf:type c:País.
        bind(replace(strafter(str(?p),"cinema#"),"_", " ") as ?pais).
    
    }` 
    var encoded = encodeURIComponent(prefixes + query)

    try{
        var response = await axios.get(getLink + encoded)
        return response.data
    }
    catch(e){
        throw(e)
    } 
}

Filmes.getLinguas = async function(req){
    var query = `select distinct ?lingua where {
        ?l rdf:type c:Lingua.
        bind(replace(strafter(str(?l),"cinema#"),"_", " ") as ?lingua).
    
    }` 
    var encoded = encodeURIComponent(prefixes + query)

    try{
        var response = await axios.get(getLink + encoded)
        return response.data
    }
    catch(e){
        throw(e)
    } 
}

Filmes.getGeneros = async function(req){
    var query = `select distinct ?genero where {
        ?g rdf:type :Género.
        bind(replace(strafter(str(?g),"cinema#"),"_", " ") as ?genero).
}` 
    var encoded = encodeURIComponent(prefixes + query)

    try{
        var response = await axios.get(getLink + encoded)
        return response.data
    }
    catch(e){
        throw(e)
    } 
}
BEGIN{
  FS = ",";
  RS = "\n";
 url ="http://www.semanticweb.org/pedro/ontologies/2020/1/untitled-ontology-2";
}
$2  { alunos[tolower($1)] = $2;}

END {
    file = "individuals.ttl"
    for (numero in alunos){
      printf("### %s#%s\n", url, numero) > file
      printf(":%s rdf:type owl:NamedIndividual ,\n\t\t :Pessoa ;\n",numero)  > file
      printf("\t :frequenta :prc ;\n")  > file
      printf("\t :ident \"%s\"^^xsd:string ;\n",numero)  > file
      printf("\t :nome \"%s\"^^xsd:string .",alunos[numero])  > file
      print("\n")  > file
    }
}

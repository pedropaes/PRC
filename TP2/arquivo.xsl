<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="text"/>
	
	<xsl:template match="obra">
		###  http://www.semanticweb.org/pedro/ontologies/2020/1/arquivo#<xsl:value-of select="@id"/>
		:<xsl:value-of select="@id"/> rdf:type owl:NamedIndividual ,
		:compositor "<xsl:value-of select="compositor"/>"^^xsd:string ;
		:tipo "<xsl:value-of select="tipo"/>"^^xsd:string ;
		:título "<xsl:value-of select="titulo"/>"^^xsd:string .
		 <xsl:apply-templates select="instrumentos" />
	</xsl:template>
	
	<xsl:template match="instrumento">
		###  http://www.semanticweb.org/pedro/ontologies/2020/1/arquivo#<xsl:value-of select="@id"/>
		:compõe :m2 <xsl:value-of select="../../../@id"/>; 
		:temDestino "<xsl:value-of select="destino/@cidade"/>"^^xsd:string ;
		:designacao "<xsl:value-of select="designacao"/>"^^xsd:string ;
		:partitura "<xsl:value-of select="@path"/>"^^xsd:string .
	</xsl:template>
	
</xsl:stylesheet>

<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title><xsl:value-of select="pr/meta/keyname"/></title>
                <style>
                    table, th, td {
                    border: 1px solid black;
                    width: 40%;
                    }
                    
                    th {
                    text-align: center;
                    }
                </style>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="meta">
        <div>
        <table><xsl:apply-templates/></table>
        </div>
    </xsl:template>
    
    <xsl:template match="keyname">
        <h1>
           Project Record: <xsl:value-of select="."/>
        </h1>
    </xsl:template>
    <xsl:template match="title">
        <tr>
            <th>Título</th>
            <td><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="subtitle">
        <tr>
            <th>Sub-Título</th>
            <td><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="bdate">
        <tr>
            <th>Data Início</th>
            <td><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="edate">
        <tr>
            <th>Data Fim</th>
            <td><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    <xsl:template match="supervisor">
        
        <table>
            <tr>
                <th colspan="2"><h5>Supervisor</h5></th>    
            </tr>
            
        <xsl:apply-templates/>
        </table>
    </xsl:template>
    
    <xsl:template match="supervisor/name">
        <tr>
            <th>Nome</th>
            <td><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    <xsl:template match="supervisor/email">
        <tr>
            <th>E-mail</th>
            <td><a href="mailto:{.}"><xsl:value-of select="."/></a></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="supervisor/homepage">
        <tr>
            <th>Homepage</th>
            <td><a href="{.}"><xsl:value-of select="."/></a></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="abstract">
        <h3>Abstract</h3>
        <table>
        <tr>
            <td>
                <xsl:apply-templates/>
            </td>
        </tr>
            
        </table>
    </xsl:template>
    
    <xsl:template match="workteam">
        <table>
        <h3>Workteam</h3>
           <xsl:apply-templates/>
              
        </table>
    </xsl:template>
    
    <xsl:template match="member">
        <tr>
            <th><xsl:value-of select="identifier"/></th>
            <td><xsl:value-of select="name"/></td>
            <td><xsl:value-of select="email"/></td>
            <td><img src="{photo/@path}" alt="{name}" height="70" width="70"/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="b">
        <b><xsl:apply-templates/></b>
    </xsl:template>
    
    <xsl:template match="u">
        <u><xsl:apply-templates/></u>
    </xsl:template>
    
    <xsl:template match="i">
        <i><xsl:apply-templates/></i>
    </xsl:template>
    
    <xsl:template match="p">
        <p><xsl:apply-templates/></p>
    </xsl:template>
    
    <xsl:template match="deliverables">
        <div>
        <h3>Deliverables</h3>
        <table><xsl:apply-templates/></table>
        </div>
    </xsl:template>
    
    <xsl:template match="deliverable">
        <tr>
            <td><a href="{@path}"><xsl:value-of select="."/></a></td>
        </tr>
    </xsl:template>     
</xsl:stylesheet>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link type="text/css" media="screen" rel="stylesheet" href="{themepath}/style.css" />
<title>{site_name} : {site_section}</title>

{site_scripts}

</head>

<body  {bodytags} id="{bodyclass}">

<div id="container">
	<div id="header">
		{site_name} 
		<br> <font size=-1>{site_section}</font>
	</div>

	<ul id="tabnav">
{ulmenu}
	</ul> 
	
	<div id="sidebar">
{sidebar1}
	</div>
	<div id="content">
<h3><font color="#0077AA">{site_subsection} </font></h3>

{content}
<p>

{content2}
<p>
{sidebar2}


	</div>
<p>

	<div id="footer">
	</div>

</div>
<div align=center>
		<p><a href="http://validator.w3.org/check?uri=referer">Valid XHTML 1.0</a> | Copyright &copy; <a href="./">{site_copyright}</a> | Design by <a href="http://www.jdavidmacor.com">super j man</a></p>
</div>
</body>
</html>

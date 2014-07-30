<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
{site_scripts}
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link href="{themepath}/style.css" rel="stylesheet" type="text/css" />
<title>{site_name} : {site_motto} </title>


</head>

<body {bodytags}>

<div id="container">

<div id="header">
	<form id="form1" method="post" action="/search">
	  <img src="{themepath}/search.png" alt="Search" />
	  <input type="text" name="token" value="" />
	  <input class=" button" type="submit" value="GO" />
	</form>
	
	<h1>{site_name}</h1>
	<h2>  <div align=center>{site_motto} </div></h2>
</div>

<div id="menu_container">
	<div id="menu">
		<ul>
{ulmenu}
		</ul>
	</div>
</div>

<div id="content">

<div id="sidebar">
	<div>
	<b class="sidebar_content">
	<b class="sidebar_content1"><b></b></b>
	<b class="sidebar_content2"><b></b></b>
	<b class="sidebar_content3"></b>
	<b class="sidebar_content4"></b>
	<b class="sidebar_content5"></b>
	</b> <div class="sidebar_content_content">
	<span class="side_content_header">{sidebar1_title}</span><br />
{sidebar1}
<hr />
{adsense_script}
	</div>
{sidebar2}
	</b>
	</div> 
</div>

<div id="posts">


{content}

</div>

</div>

<div id="footer">

	<p>{site_copyright} | | DESIGN BY <a href="http://www.jdavidmacor.com">SUPER J MAN</a> | <a href="http://validator.w3.org/check?uri=referer">XHTML</a> 1.0 TRANSITIONAL</p>

</div>

</div>

</body>
</html>

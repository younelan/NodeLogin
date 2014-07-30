<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="content-type" content="text/html; charset={charset} />
<meta name="description" content="{site_description}" />
<meta name="keywords" content="{keywords}" />
<meta name="author" content="{site_name}" />
<link rel="stylesheet" type="text/css" href="{themepath}/doctors_office.css" media="screen" />
<title>{site_name} - {site_motto} (c) {copyright}</title>
{site_scripts}
</head>
<body>
<div id="banner">
  <div class="top_links clearfix" id="topnav">
    <ul>
      <li><a href="http://jigsaw.w3.org/css-validator/validator-uri.html">CSS</a></li>
	  <li><a href="http://validator.w3.org/">XHTML</a></li>
      <li><a href="http://www.oswd.org/">OSWD</a></li>
    </ul>
  </div>
  <img alt="Acrostiches en folie" src="{themepath}/header_logo.jpg" />
  <div class="page_title"><span id="page_title">{site_name}</span><br />
   {site_motto}<br /></div>
</div>
<div class="leftcontent" id="nav"> <img alt="bg image" src="{themepath}/left_bg_top.gif" />
  <ul>
 {ulmenu}
   </ul>
  <div class="left_news">
    <p>&nbsp;</p>
    <p><span class="news_title">{sidebar1_title}</span><br />
 {sidebar1}
	
  </div>
</div>
<div id="centercontent">
  <p><span class="squares"><span>&#8250;&#8250;</span></span> <span class="news_title_grn">{site_subsection}</span></p>
  {site_description}<blockquote><p>{content}</p>
</blockquote>
  <div class="footer" id="footer">
	Copyright &copy; {site_copyright}, all rights reserved&nbsp;|
	Design by <a href="#">pogy366</a> 
	
	</div>


</div>
<div id="rightcontent">
  <div class="right_news">
    <p><b>{sidebar2_title}</b><br>{sidebar2}. </p>
    {adsense_script}
  </div>
</div>
</body>
</html>

<!DOCTYPE html>
<head>
<title>{site_name}</title>
<link href='http://fonts.googleapis.com/css?family=Alfa+Slab+One|Headland+One|Gilda+Display|Noto+Serif|Merriweather+Sans|Tauri|Monda|Trocchi|Merriweather+Sans|Scada&subset=latin,latin-ext' rel='stylesheet' type='text/css'><link rel='stylesheet' href='{themepath}/index.css'>

</head>
<html>
<body>
<div id='wrapper'>
	<div class=header>
		<div class=nav>
			<ul>
			{utility_menu}
			</ul>
		</div>

		<div class=leftnav>
			<ul>
			{main_menu}
			</ul>
		</div>
	</div>
	<div class=topdiv>
		<div id='banner'>
			<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
			<script src='/res/jquery.cycle.all.min.js'></script>
			<img  src=/res/sfbanner.jpg><br/>
			<div id="slideshow">
				<div style='background-color:red;color:white'>
					Find lost friends
				</div>
				<div style='background-color:green;color:white'>
					Stay in touch
				</div>
				<div style='background-color:blue;color:white'>
					Play with others
				</div>
				<div style='background-color:orange;color:white'>
					Reinvent the world
				</div>
				<div style='background-color:black;color:white'>
					Do Something fun
				</div>	
				<div style='background-color:purple;color:white'>
					Share with others
				</div>	
			</div>

			<script>
			$(function() {

			    $('#slideshow').cycle({ fx:'fade',timeout: 3000, cleartype: 1, speed: 1400, width:540,height:40 });

			});

			</script>
			<br/>

	</div>

		<div class=topdivText>
			<a href='/'><div class=siteTitle>{site_name}
				</div>
				<div class=siteMotto>
			{site_motto} 
				</div>
			</a>
		</div>
	</div>

<!--showSlideshow('slideshow.php');-->
	<div id='content'>
		{content}
	</div>
	<div class='sidebarDiv'>
<!--
		    <div class=floatPic>
		    	<img src='/res/people.gif' style='width:30px;height:auto;'>
		    </div>
		    Social Fun Zone
-->
		<div class=sidebartitleWrapper>
		    <div class=sidebarTitle>
		 		Menu
		    </div>

		  </div>
		{sidebar1}
		<div>
		<div class=sidebartitleWrapper>
		    <div class=sidebarTitle>
		 		Theme
		    </div>

		  </div>
		{sidebar2}
	</div>
		<!--  <?php echo $slideshow; ?> -->
	</div>
</div>

</body>
</html>


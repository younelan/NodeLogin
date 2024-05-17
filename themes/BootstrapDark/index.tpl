<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{site_name}</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Alfa+Slab+One|Headland+One|Gilda+Display|Noto+Serif|Merriweather+Sans|Tauri|Monda|Trocchi|Merriweather+Sans|Scada&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
    <link rel='stylesheet' href='{themepath}/index.css'>

    <style>
/* Custom CSS goes here */
body {
    font-family: 'Arial', sans-serif;
    background-color: #1e1e1e; /* Dark background */
    color: #fff; /* White text */
    padding-top: 20px;
    padding-bottom: 20px;
}

.navbar {
  background-color: #557;
  color: #e8e0e0;
    border-radius: 0; /* Remove rounded corners */
}

.navbar-brand {
    color: #fff; /* White */
    font-size: 1.5rem;
}

.navbar-nav .nav-link {
    color: #fff !important; /* White */
    font-size: 1.1rem;
}

.navbar-nav .nav-item {
    padding-left: 15px;
    padding-right: 15px;
}

#navbarNav li {
  padding: 10px;
  background-color: #486f98;
  color: #fff;
  margin-right: 5px;
  border-radius: 0;
  margin-bottom: 10px;
}

#navbarNav li a {
    color: #fff !important; /* White */
    display: block;
    font-weight: bold;
}

#navbarNav li a:hover {
    color: #ffc107; /* Yellow */
    text-decoration: none;
}

.topdivText {
    float: right;
    vertical-align: center;
    margin: 30px;
}

.header {
        background-color: #404453; /* Dark gray */
        color: #fff; /* White */
    padding: 20px;
    margin-bottom: 20px;
}

.sidebar {
    background-color: #355691; /* Primary blue */
    color: #fff; /* White */
    padding: 15px;
    margin-bottom: 20px;
    height: 100%;
}
body a {
  padding: 2px;
  padding-right:20px;
  padding-left:20px;
  color: #ffbadd;    
}
.sidebar a:hover {
  background-color: navy;
  color: #dd8855;    
}

.container-row {
    background-color: #fff; /* White */
    color: #333; /* Dark gray */
    padding: 20px;
}

.container {
  background-color: #282a3aa6;
  color: #e8e0e0;
  padding-top: 10px;
}

.navbar-dark, .navbar-dark .container {
    background-color: #343a40; /* Dark gray */
    color: #fff; /* White */
    margin-bottom: 15px;
}

    </style>

</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-blue">
        <div class="container">
            <a class="navbar-brand" href="/">{site_name}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    {utility_menu}
                </ul>
                <ul class="navbar-nav">
                    {main_menu}
                </ul>
            </div>
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="header">
                    <div id='banner'>

                    <div class="topdivText">
                        <a href="/">
                            <div class="siteTitle">{site_name}</div>
                            <div class="siteMotto">{site_motto}</div>
                        </a>
                    </div>
                        <img src="/res/sfbanner.jpg" class="img-fluid" alt="Banner Image">
                        <br>
                        <div id="slideshow" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" style="background-color:red;color:white">
                                    Find lost friends
                                </div>
                                <div class="carousel-item" style="background-color:green;color:white">
                                    Stay in touch
                                </div>
                                <div class="carousel-item" style="background-color:blue;color:white">
                                    Play with others
                                </div>
                                <div class="carousel-item" style="background-color:orange;color:white">
                                    Reinvent the world
                                </div>
                                <div class="carousel-item" style="background-color:black;color:white">
                                    Do Something fun
                                </div>
                                <div class="carousel-item" style="background-color:purple;color:white">
                                    Share with others
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="container" id="content">
            <div class="row">

                <div class="col-md-8">

                        <div class="content">
                            {content}
                        </div>
                </div>

                <div class="col-md-4">
                    <div class="sidebar">
                        <div class="sidebartitleWrapper">
                            <div class="sidebarTitle">Menu</div>
                        </div>
                        {sidebar1}
                        <div>
                            <div class="sidebartitleWrapper">
                                <div class="sidebarTitle">Theme</div>
                            </div>
                            {sidebar2}
                        </div>
                    </div>
                </div>
            </div>
    </div>
    

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#slideshow').carousel({
                interval: 3000,
                pause: false
            });
        });
    </script>
</body>

</html>

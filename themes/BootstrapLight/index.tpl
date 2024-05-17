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
            background-color: #f8f9fa;
            padding-top: 20px;
            padding-bottom: 20px;
            background: url({themepath}/bgblue.gif);

        }

        .navbar {
            background-color: #343a40; /* Dark gray */
        }

        .navbar-brand {
            color: #fff; /* White */
            font-size: 1.5rem;
        }

        .navbar-nav .nav-link {
            color: #fff; /* White */
            font-size: 1.1rem;
        }

        .navbar-nav .nav-item {
            padding-left: 15px;
            padding-right: 15px;
        }
        #navbarNav li {
            padding: 10px;
            background-color: navy;
            color: white;
            margin-right: 5px;
            border-radius:5px;
        }
    #navbarNav li a {
        color:white;
        display:block;
        font-weight: bold;
    }
    #navbarNav li a:hover {
        color: #ffc;
        display:block;
        text-decoration: none;        
    }
    .topdivText {
        float: right;
        vertical-align: center;
        margin: 30px;
    }
    .header {
        background-color: #194d6c;
        color: white;
    }
    .sidebar {
    background-color: #edf0e0;
    color: #2c1a54;
    padding: 5px;
    padding-left: 20px;
    height: 100%;
    margin-bottom: 20px;
    }
    .container row {
        background-color:white;
        color: navy;
    }
    .container {
        background-color: white;
        color: navy;
        padding-top: 10px;
    }

    .navbar-blue, .navbar-blue .container {
        background-color: navy;
        color: white;
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

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
	<head>
		<title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex,nofollow">
        <!-- <script src='playerjs.js' type='text/javascript'></script> -->
	</head>
	<body>
    <style>
        html,body{
            margin:0;padding:0;width:100%;height: 100%;
        }
    </style>
    <?php if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    
    ?> 
    <?php  # if ($ip == '109.86.216.202'): ?>
        <center class="player-center" style="height: 100vh;">
            <iframe src="playerjs.html" type="text/html" frameborder="0" allowfullscreen style="width: 100%;height: 100vh;"></iframe>
        </center>
    <?php # else: ?>
        <!--Произошла ошибка-->
    <?php # endif ?>

   <!-- <iframe width="560" height="400" src="https://tortuga.wtf/embed/51" frameborder="0" allowfullscreen=""></iframe> -->
</body>
</html>
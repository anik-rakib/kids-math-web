<?php
include('include/conndb.php');

$uid = "";
$uemail="";

// generate randon trangaction number

// function generate_uuid() {
//     return sprintf( '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
//         mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ),
//         mt_rand( 0, 0xffff ),
//         mt_rand( 0, 0x0C2f ) | 0x4000,
//         mt_rand( 0, 0x3fff ) | 0x8000,
//         mt_rand( 0, 0x2Aff ), mt_rand( 0, 0xffD3 ), mt_rand( 0, 0xff4B )
//     );

// }
// $transationID = generate_uuid();

function generate_uuid() {
    return sprintf( '%04x%04x',
        mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff )
    );

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Log In</title>
    <link rel="stylesheet" href="assets/css/login.css" type="text/css">
    <link rel="stylesheet" href="https://fonts.googleeapis.com/css?family=play" rel="stylesheet">
</head>
<center>
    <img src="image/ab.jpg">
</center>
<body>

<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#" method="POST">
            <h1>Create Account</h1>
            
			<input type="text" name="name" placeholder="Name" />
			<input type="email" name="email" placeholder="Email" />
			<input type="password" name="pass" placeholder="Password" />
            <button name="signup">Sign Up</button>
            
            <?php
            
            //include('server.php');
            session_start();
            if (isset($_POST['signup'])) {
                if (!empty($_POST['email']) && !empty($_POST['pass'])) {

                    $name = $_POST['name'];
                    $pass = $_POST['pass'];
                    $email = $_POST['email'];
                    //$errors = array();

                    $transationID = generate_uuid();

                    $_SESSION['user_id'] = $transationID;
                    //echo $transationID;
                    $uid=$transationID;



                    $sql = "INSERT INTO `user_information` (`uid`, `name`, `email`, `password` )
                    VALUES ('$transationID','$name', '$email', '$pass')";
                    $sql1 ="INSERT INTO `career_result`(`uid`) VALUES ('$transationID')";
                        $run = mysqli_query($conn,$sql);
                        $run1 = mysqli_query($conn,$sql1);
                        if ($run == true) {
                            
                            header("location: login.php");
                        } 
                    } else {
                        array_push($errors,"Username is required");
                    }
            } 

         ?>




		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="login.php" method="POST">
			<h1>Sign in</h1>
			<input type="email" name="email_signin" placeholder="Email" />
			<input type="password" name="pass_signin" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button type="submit" name="signin">Sign In</button>
            <?php
                include('include/conndb.php');

                if(isset($_POST['signin'])){
                    $email_signin = ($_POST['email_signin']);
                    $pass_signin = ($_POST['pass_signin']);
                    
                    //$pass_signin = md5($pass_signin);
                    $sql_signin = "SELECT * FROM user_information WHERE `email` = '$email_signin' AND `password`= '$pass_signin'";
                    $result = mysqli_query($conn,$sql_signin);

                    if(mysqli_num_rows($result) == 1){
                        $_SESSION['message'] = 'You are logged in';
                        $_SESSION['email'] = $email_signin; 
                        $_SESSION['uid'] = $uid; 
                        header("location: index.php");
                    }else{
                        $_SESSION['message'] = 'user name and Password are Incorrect';

                    }
                }
            ?>



		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To playing this game please login with your gmail and password!!</p><button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello!!<p>&#x1F60A</p></h1>
				<p>If you don't have an account,enter your personal details and start journey with us.</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.11.0/firebase-analytics.js"></script>

<!--
<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCcYIFUf8cDWApgi19DrrLuilIsAPM2z0w",
    authDomain: "kids-math-c5a86.firebaseapp.com",
    databaseURL: "https://kids-math-c5a86.firebaseio.com",
    projectId: "kids-math-c5a86",
    storageBucket: "kids-math-c5a86.appspot.com",
    messagingSenderId: "562734290094",
    appId: "1:562734290094:web:452a102fce533c5700493f",
    measurementId: "G-2BCM20SD96"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
-->
<script src="assets/js/login.js"></script>

</body>
</html>

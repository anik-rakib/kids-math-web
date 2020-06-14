<?php 
    include('include/conndb.php');
    session_start(); 
    $user_email = $_SESSION['email']; 
    $user_data = mysqli_query($conn,"SELECT * FROM `user_information` WHERE `email` = '$user_email'");
    //$result = mysqli_query($conn,$user_data);
    $user_row = mysqli_fetch_assoc($user_data);
    
    // print_r($user_row);

    $name = $user_row['name']; 
    $uid = $user_row['uid'];
    $phone = $user_row['phone'];
    $age = $user_row['age'];
    $email = $user_row['email'];
    $password = $user_row['password'];
    
    $career_result = mysqli_query($conn,"SELECT * FROM `career_result` WHERE `uid` = '$uid'");
    $user_row1 = mysqli_fetch_assoc($career_result);
    $total_coin = $user_row1['total_coin'];
    $total_match = $user_row1['total_match'];
    $best_score = $user_row1['best_score'];
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />

        <title>Maths Game</title>

        <link rel="stylesheet" href="assets/css/mathgame.css" />
    </head>

    <body>
<!--                <img src="image/circle-cropped.png">-->
           <div id="type">
               Addition
           </div>
            <div id="container">
                <div id="score">Score:
                <span class="scorevalue" id="scorevalue"><?php echo "".$uid; ?>00</span>
                </div>
                <div id="correct">
                   Correct &#128525; 
                </div>
                <div id="wrong">
                   Try Again &#128523;
                </div>
                <div id="question">
                Start Game 
                </div>
                <div id="instruction">
                   Click on the correct answer
                </div>
                <div id="choices">
                   <div id="box1" class="box">&#128522;</div>
                   <div id="box2" class="box">&#128522;</div>
                   <div id="box3" class="box">&#128522;</div>
                   <div id="box4" class="box">&#128522;</div>
                </div>
                <div id="startreset">
                    Start Game
                </div>
                <div id="time">
                    Time Remaining: 
                <span id="timeremaining">60</span> sec
                </div>
                <div id="gameover">
                    
                </div>
            </div>
                <script src="assets/js/addition.js"></script>
                <script>
                    var mysql = require('mysql');

                    var con = mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: "",
                    database: "kids_math"
                    });

                    con.connect(function(err) {
                    if (err) throw err;
                    var sql = "UPDATE `career_result` SET best_score = '1000' WHERE uid = 'fb93d115'";
                    con.query(sql, function (err, result) {
                        if (err) throw err;
                        console.log(result.affectedRows + " record(s) updated");
                    });
                    });

                </script>
    </body>
</html>

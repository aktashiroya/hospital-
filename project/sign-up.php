<?php
    $con = mysqli_connect('localhost','root','','hospital');
        
    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: *');
    $data=json_decode(file_get_contents('php://input'),true);

    if($data)
    {
        $name = $data['name'];
        $email = $data['email'];
        $password = $data['password'];

        $insert_data = "INSERT INTO `sign-up`(name,email,password) VALUES ('$name','$email','$password')";
        mysqli_query($con,$insert_data);
    }
    $select_data = "select * from sign-up";
    $data1 = mysqli_query($con, $select_data);
    
    
    $rows = array();
    while($r = mysqli_fetch_assoc($data1)) 
    {
        $rows[] = $r;
    }
    print json_encode($rows)
?>
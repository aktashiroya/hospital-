<?php
    $con = mysqli_connect('localhost','root','','hospital');
    
	header("Access-Control-Allow-Origin: http://localhost:3000");
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Headers: *');
	header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
	header("Access-Control-Allow-Headers: Content-Type");

    $data = json_decode(file_get_contents('php://input'), true);
	if($data)
{
        $name = $data['name'];
       	$password = $data['password'];	

        $select_data = "select * from `sign-up` where name='$name' and password='$password'";
        $execute = mysqli_query($con,$select_data);

        if(mysqli_num_rows($execute)==1){
            $fetch = mysqli_fetch_assoc($execute);
            echo json_encode($fetch);
        }
	}
?>
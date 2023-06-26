<?php 
		$con = mysqli_connect('localhost','root','','hospital');

		header('Content-type: application/json');
		header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Headers: *');

	$data = json_decode(file_get_contents('php://input'), true);

	if(isset($data))
	{
		$u_id=$data['id'];
		$status= $data['status'];
			if($status == 0)
			{
				$update = "UPDATE add_appoin SET status = '1' where id=$u_id";
				mysqli_query($con,$update);
			}
			else if($status == 1)
			{
				$update = "UPDATE add_appoin SET status = '0' where id=$u_id";
				mysqli_query($con,$update);
			}
	}

?>
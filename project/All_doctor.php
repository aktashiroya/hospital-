<?php 
	$con = mysqli_connect('localhost','root','','hospital');
	header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Headers: *');

	$data = json_decode(file_get_contents('php://input'), true);

	$select_query = "select * from add_doctor";
	$sel_data = mysqli_query($con, $select_query);
	$arr = array();
	while ($row = mysqli_fetch_assoc($sel_data)) {
		$arr[] = $row;
	}
	
	print_r(json_encode($arr));
?>
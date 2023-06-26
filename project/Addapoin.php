<?php 

$con = mysqli_connect('localhost','root','','hospital');

	header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Headers: *');
	header('Access-Control-Allow-Methods: *');
    $data = json_decode(file_get_contents('php://input'), true);

	if (isset($_POST['fname'])) {
		$fname = $_POST['fname'];
		$lname = $_POST['lname'];
		$dob = $_POST['dob'];
		$email = $_POST['email'];
		$gender = $_POST['gender'];
		$phone = $_POST['phone'];
		$service = $_POST['service'];
		$date = $_POST['date'];
		$description = $_POST['description'];
		$edit_id=$_POST['edit_id'];
		

		if (isset($edit_id)) {
			$upadate_query = "update add_appoin set fname='$fname', lname='$lname', 
            dob='$dob', email='$email',gender='$gender',service='$service',phone='$phone',
			,date='$date',
            ,description='$description'
		
			where id = '$edit_id' ";
			mysqli_query($con,$upadate_query);
			$arr = array('fname' => $fname,'lname' => $lname,'dob' => $dob
			,'email'=>$email
			,'date'=>$date,
			'gender'=>$gender
			,'service'=>$service,'phone'=>$phone,'description'=>$description);
			print_r(json_encode($arr));
		}
		else
		{
			$insert_query = "insert into add_appoin 
			(fname,lname,dob,email,gender,service,phone,description,date,edit_id) values 
			('$fname','$lname','$dob','$email','$gender','$service','$phone','$description','$date','$edit_id')";
			mysqli_query($con,$insert_query);	
			$arr = array('fname' => $fname,'lname' => $lname,'dob' => $dob,'email'=>$email,'gender'=>$gender,'service'=>$service,'phone'=>$phone,
			'description'=>$description,
			'date'=>$date

        );
			print_r(json_encode($arr));
		}
	}
		$select_data = "select * from add_appoin";
$data1 = mysqli_query($con, $select_data);


$rows = array();
while($r = mysqli_fetch_assoc($data1)) {
    $rows[] = $r;
}
print json_encode($rows)
	
?>
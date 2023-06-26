<?php 

$con = mysqli_connect('localhost','root','','hospital');

	header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Headers: *');
	header('Access-Control-Allow-Methods: *');
    $data=json_decode(file_get_contents('php://input'),true);

	if (isset($_POST['fname'])) {
		$fname = $_POST['fname'];
		$lname = $_POST['lname'];
		$dob = $_POST['dob'];
		$email = $_POST['email'];
		$gender = $_POST['gender'];
		$speciality = $_POST['speciality'];
		$phone = $_POST['phone'];
		$description = $_POST['description'];
		$wurl = $_POST['wurl'];
		$edit_id = $_POST['edit_id'];
		$username = $_POST['username'];
		$password = $_POST['password'];
		
		if($_FILES['img']!='') {
			$image = $_FILES['img']['name'];
		} else {
			$image = $_POST["img"];
		}
		$path = "img/".$image;
		move_uploaded_file($_FILES['img']['tmp_name'], $path);

		if (isset($edit_id)) {
			$upadate_query = "update add_doctor set fname='$fname', lname='$lname', dob='$dob', email='$email',gender='$gender',speciality='$speciality',phone='$phone',wurl='$wurl'
			,description='$description' 
			,username='$username' 
			,password='$password' 
			where id = '$edit_id' ";
			mysqli_query($con,$upadate_query);
			$arr = array('fname' => $fname,'lname' => $lname,'dob' => $dob
			,'img' => $image,'email'=>$email,
			'gender'=>$gender
			,'username'=>$username
			,'password'=>$password
			,'speciality'=>$speciality,'phone'=>$phone,'wurl'=>$wurl,'description'=>$description);
			print_r(json_encode($arr));
		}
		else
		{
			$insert_query = "insert into add_doctor 
			(fname,lname,dob,img,email,gender,speciality,phone,wurl,description,edit_id,username,password) values 
			('$fname','$lname','$dob','$image','$email','$gender','$speciality','$phone','$wurl','$description','$edit_id','$username','$password')";
			mysqli_query($con,$insert_query);	
			$arr = array('fname' => $fname,'lname' => $lname,'dob' => $dob,'img' => $image,'email'=>$email,'gender'=>$gender,'speciality'=>$speciality,'phone'=>$phone,'wurl'=>$wurl
			,'description'=>$description
			,'username'=>$username
			,'password'=>$password
		);
			print_r(json_encode($arr));
		}
	}
		$select_data = "select * from add_doctor";
$data1 = mysqli_query($con, $select_data);


$rows = array();
while($r = mysqli_fetch_assoc($data1)) {
    $rows[] = $r;
}
print json_encode($rows)
	
?>
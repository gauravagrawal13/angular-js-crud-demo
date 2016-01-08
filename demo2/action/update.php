<?php  
   	// check username or password from database
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
   	
	// set up the connection variables

    $servername = "localhost";
	$username = "root";
	$msql_password = "";
	$dbname = "angular";

	// Create connection
	$conn = new mysqli($servername, $username, $mysql_password, $dbname);

	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}

	// set parameters and execute
	$id = $request->id;
	$name = $request->name;
    $city = $request->city;
	
	// sql to delete a record
	$sql = "Update person set name='$name', city='$city' WHERE id=$id";

	if ($conn->query($sql) === TRUE) {
    	echo "Record Updated successfully";
	} else {
    	echo "Error deleting record: " . $conn->error;
	}

	$conn->close();


    
?>

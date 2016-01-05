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

	// prepare and bind
	$stmt = $conn->prepare("INSERT INTO person (name, city) VALUES (?, ?)");
	$stmt->bind_param("ss", $name, $city);

	// set parameters and execute
	$name = $request->name;
    $city = $request->city;
	$stmt->execute();

	$stmt->close();
	$conn->close();


    
?>

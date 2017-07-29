<?php
$id=$_GET['id'];
$con = mysqli_connect('localhost', 'root', '', 'gis');
if (!$con) {
    die('you are wrong!!!!');
}
$sql = "select `name` from `user` where `id`=$id";
$result = mysqli_query($con, $sql);
if($result){
    echo json_encode($result->fetch_array());
}else{
    echo 0;
}
mysqli_close($con);

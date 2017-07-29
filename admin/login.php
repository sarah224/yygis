<?php
//$name = $_POST['name'];
//$pwd = md5($_POST['pwd']);
$name = 'admin';
$pwd = md5('admin');
$con = mysqli_connect('localhost', 'root', '', 'gis');
if (!$con) {
    die('you are wrong!!!!');
}
$sql = "select id from `user` where `name`='$name' and `pwd`='$pwd'";
$result = mysqli_query($con, $sql);
echo $result->fetch_array()[0];
mysqli_close($con);
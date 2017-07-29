<?php
$name= $_POST['name'];
$pwd= $_POST['pwd'];
if($name=="admin"&&$pwd=="123"){
	echo '登录成功,欢迎'.$name;
}
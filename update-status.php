<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$id = $data['id'];
$status = $data['status'];

$sql = "UPDATE books SET status='$status' WHERE id=$id";
$conn->query($sql);
?>


<?php
 $path = 'data.txt';
 if (isset($_POST['field1']) && isset($_POST['field2'])) {
    $fh = fopen($path,"a+");
    $string = $_POST['asunto'].' - '.$_POST['msg'];
    fwrite($fh,$string); // Write information to the file
    fclose($fh); // Close the file
 }
?>

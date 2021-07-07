
<?php
    extract($_REQUEST);
    $file=fopen("data.txt","a");

    fwrite($file,"Asunto :");
    fwrite($file, $Asunto ."\n");
    fwrite($file, $Mensaje ."\n\n");
    fclose($file);
    header("location: HOME.html");
 ?>

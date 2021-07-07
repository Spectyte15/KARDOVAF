
<?php
    $asunto = $_POST['Asunto'];
    $mensaje = $_POST['Mensaje'];

    $message .= "Mensaje: " . $_POST['message'] . " \r\n";
    $message .= "Enviado el: " . date('d/m/Y', time());

    $para = 'spectyte.15@gmail.com';
    
    mail($para, $asunto, utf8_decode($message));

    header("Location:HOME.html");
?>

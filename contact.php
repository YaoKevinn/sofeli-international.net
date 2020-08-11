<?php

// get posted data into local variables
$Nombre = Trim(stripslashes($_POST['Nombre']));
$Email = Trim(stripslashes($_POST['Email']));
$Direccion = Trim(stripslashes($_POST['Direccion']));
$Consulta = Trim(stripslashes($_POST['Consulta']));
$EmailFrom = "$Email";
$EmailTo = "vasty85817@gmail.com";
$Subject = "Contacto desde la web Sofeli-International";
$file = 'people.txt';

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Formulario completado de Sofeli-International
Nombre: ";
$Body .= $Nombre;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Dirección: ";
$Body .= $Direccion;
$Body .= "\n";
$Body .= "Consulta: ";
$Body .= $Consulta;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");
file_put_contents($file, $Email . ";\n", FILE_APPEND | LOCK_EX);

// redirect to success page
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=ok.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
}
?>

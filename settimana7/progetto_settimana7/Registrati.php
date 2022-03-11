<?php
    require'connect.php';
    
    $pdo = connect();
    $queryReg = $pdo->query('INSERT INTO users (email, password, first_name, last_name;') 
    VALUES ('$email', '$password', '$nome', '$cognome');
    
    $email = $_POST['email'];
    $password = $_POST['password'];
    $nome = $_POST['nome'];
    $cognome = $_POST['cognome'];
    $btn = $_POST['btn'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="post">
        <label for="">Email:</label>
        <input type="email" name="email" id="email">
        <label for="">Password:</label>
        <input type="text" name="password" id="password">
        <label for="">Nome:</label>
        <input type="text" name="nome" id="nome">
        <label for="">Cognome:</label>
        <input type="text" name="cognome" id="cognome">
        <button value="ok" name="btn" id="btn">Registrati</button>
    </form>
</body>
</html>
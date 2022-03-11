<?php
?>
https://google.com?p=value&p2=otherValue = query params

Verbi HTTP:
GET => Richiedere informazioni
POST => Salvare informazioni
PUT => Modificare informazioni e pretende l'intero oggetto
PATCH => Modificare informazioni ma permette di comunicare solo la parte che subisce la modifica
DELETE => Eliminare informazioni

// Informazioni transitano sull'indirizzo
- GET
- DELETE

https://miosito.com/products/65
https://miosito.com/products?price=49.99

// Informazioni transitano nel body della richiesta
- POST
- PUT
- PATCH
{
    email: 'asd@lol.com',
    password: 'la password',
}



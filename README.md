# ANTES DE ENTRAR AL LINK DEL SITIO LEER EL SIGUIENTE PARRAFO

Toda la app la desarrolle obviamente de manera local. Y cumple con todos los requirimientos y funciona tambien bien. Pero cuando la deploye en netlify y obtuve la url del sitio al intentar hacer el login me da el siguiente error en consola: \
![imagen](./errorAlkemy.jpeg).\
Me puse a buscar en internet la forma de solucionarlo y vi que muchos usuarios ponian que habia que agregar la siguiente etiqueta meta en el header de HTML:\
\
**meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"** 

Lo hice. Actualice la pagina y ahora me sale el siguiente error:\
![imagen](./errorPost.jpeg)\
No encontre la forma de solucionarlo.


### vuelvo a repetir de manera local el sitio funciona bien cumpliendo todos los requisitos. 



***la unica forma que encontre de que funcione la app en vivo es copiendo este token en el localstorage***
token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE

[sitio web](https://hopeful-johnson-5772a3.netlify.app/#/login)



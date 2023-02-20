# AppTrainingModules
<h1>App Training Modules  - Sofka Cantera 2 Uy</h1>
Trabajando con los módulos:
En esta lección sigue todos los pasos y complenta por tu cuenta, al final entrega el resultado del este Training.

-Paso#1
Crear un aplicativo nuevo en NestJS con la bandera --strict. El nombre del proyecto será AppTrainingModules
-Paso#2
Una vez se haya creado el proyecto, crear por consola, tres módulos: Users, Tasks y Contacts, Cada uno deberá estar en una carpeta independiente.
-Paso#3
En cada carpeta de cada módulo, se debe crear una carpeta llamada controller, en esta carpeta crear un controlador, por consola, con el mismo nombre del módulo. No olvide agregar controlador en su respectivo módulo.
-Paso#4
Ahora vas a crear, por medio de la consola, un servicio en cada módulo e importarlo respectivamente.
  El servicio de Users debe de traer como resultado el siguiente mensaje: Hola desde el servicio de Users
  El servicio de Tasks debe de traer como resultado el siguiente mensaje: Hola desde el servicio de Tasks
  El servicio de Contacts debe de traer como resultado el siguiente mensaje: Hola desde el servicio de Contacts
-Paso#5
Los servicios creados en el punto anterior, deben de ser inyectados en los controladores de sus respectivos módulos. También deben de ser usados cumpliendo las siguientes direcciones:
  Users (GET users/message)
  Tasks (GET tasks/message)
  Contacts (GET contacts/message)
-Paso#6
En cada módulo, tanto sus servicios como sus controladores, deben de quedar exportados.

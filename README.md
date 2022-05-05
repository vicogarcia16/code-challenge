# Practica 5 code-challenge

# Requerimientos

* Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
* Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
* Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.

# Dependencias

* Express: Se usa para trabajar con un servidor web.
* Jest: Para la realización de pruebas de funcionalidades.
* Eslint: Realizar un acomodo y revisión del código.

# Diseño de componentes

# Ejecución de la API

* npm run server
* Utilizar Postman o acceder a la dirección web de tu navegador
* Los siguientes endpoints son los ofrecidos:  
http://127.0.0.1:3000/v1/students/  
http://127.0.0.1:3000/v1/students/emails  
http://127.0.0.1:3000/v1/students/credits

# Ejemplo de respuesta

* Se devuelve un JSON para la respuesta a la consulta de los emails de todos los estudiantes que tengan certificación haveCertification y la cantidad.  
{"emails":["Todd@visualpartnership.xyz","Sexton@visualpartnership.xyz","Sharlene@visualpartnership.xyz","Howell@visualpartnership.xyz","Haynes@visualpartnership.xyz","Montoya@visualpartnership.xyz","Benton@visualpartnership.xyz","Dionne@visualpartnership.xyz","Mcpherson@visualpartnership.xyz","Gracie@visualpartnership.xyz","Ila@visualpartnership.xyz","Dorthy@visualpartnership.xyz","Mcfarland@visualpartnership.xyz","Maryann@visualpartnership.xyz","Alana@visualpartnership.xyz","Rosemary@visualpartnership.xyz","Keith@visualpartnership.xyz","Delaney@visualpartnership.xyz","Ball@visualpartnership.xyz","Sally@visualpartnership.xyz","Antoinette@visualpartnership.xyz","Juliette@visualpartnership.xyz","Harding@visualpartnership.xyz","Dixon@visualpartnership.xyz","Beulah@visualpartnership.xyz","Moses@visualpartnership.xyz","Shields@visualpartnership.xyz","Jewell@visualpartnership.xyz","Hays@visualpartnership.xyz"],"cantidad":29}

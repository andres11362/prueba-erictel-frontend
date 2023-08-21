
# Prueba erictel fronted

A continuacion se muestra el proceso de instalación y configuración del proyecto.




## Herramientas usadas

- Vue js 3
- Vuex
- Vue router
- Tailwind CSS
- axios
- firebase

## Instalación

1. Descargar el repositorio.
2. Usar el comando:
```bash
   npm install
```
3. Copiar el archivo .env.example y darle nombre de .env o usar el siguiente comando:.
```bash
   cp .env.example .env
```

4. Editar el archivo .env en los siguientes parametros:

Parametros para obtención de recursos del servidor
---------------
- `VUE_APP_TEST_ERICTEL_API`: Url del api del proyecto, usar la que se instale en local o usar la siguiente: https://pruebaerictel.us/api/v1
- `VUE_APP_TEST_ERICTE_STG`: url donde deben estar almacenadas las imagenes.

    * si se implementa en un entorno local usar la siguiente: http://localhost/prueba-erictel-backend/public/storage/

    * Si se usa la del entorno productivo usar: https://pruebaerictel.us/storage/ 






## Correr localmente

Usar el siguiente comando:

```bash
  npm run serve
```
Se inicializa en la siguiente dirección: http://localhost:8080/prueba-erictel-front

En caso de presentar problemas con los estilos de la pagina usar el siguiente comando:

```bash
  npm uninstall tailwindcss postcss autoprefixer
```
Y despues usar este:

```bash
 npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

Reiniciar el servidor.


## Miscelaneos

El sitio se puede consultar en un ambiente de pruebas en la siguiente dirección: https://prueba-erictel-front.web.app/

Para la consulta de la api con esta direccion: https://pruebaerictel.us/api/v1

Contacto
---------------

Cualquier duda o sugerencia a los siguientes correos:

- agongorita@outlook.com
- agongora@ditech.es



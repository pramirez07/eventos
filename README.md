# API Events

## Recuperar todos los eventos

URL: /api/events
MÉTODO: GET
HEADERS: X
BODY: X

Respuesta:
- Un array con todos los eventos

## Creación de un evento

URL: /api/events
MÉTODO: POST
HEADERS: <TOKEN>
BODY: nombre, descripcion, fecha, ubicacion, tipoDeporte, organizador

Respuesta:
- El nuevo evento creado

## Actualización de evento

URL: /api/event/<EVENTID>
MÉTODO: PUT
HEADERS: <TOKEN>
BODY: aquellos campos que necesitemos modificar

Respuesta: 
- El evento actualizado

## Borrado de un evento

URL: /api/events/<EVENTID>
MÉTODO: DELETE
HEADERS: <TOKEN>
BODY: X

Respuesta:
- El evento borrado

## Recuperar evento por ID

URL: /api/events/<EVENTID>
MÉTODO: GET
HEADERS: X
BODY: X

Respuesta:
- Un evento a partir de su id

## Recuperar eventos por tipo de deporte

URL: /api/events?type=<TIPODEPORTE>
MÉTODO: GET
HEADERS: X
BODY: X

Respuesta:
- Todos los eventos con el tipo de deporte que se filtró

## Recuperar los próximos evento

URL: /api/events/upcoming
MÉTODO: GET
HEADERS: X
BODY: X

Respuesta:
- Todos los eventos próximos, ordenados por fecha.


## Recuperar los eventos dentro de un rango de fechas

URL: /api/events/date?from=<FECHAINICIO>&to=<FECHAFIN>
MÉTODO: GET
HEADERS: X
BODY: X

Respuesta:
- Todos los eventos dentro del rango de fechas especificado.

# API USERS

## Registro
POST /api/users/register
Body: username, password

## Login
POST /api/users/login
Body: username, password
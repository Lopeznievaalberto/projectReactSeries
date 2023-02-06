
# PROYECTO FRONT #

PROYECTO 
-Este proyecto se basa en la conexión entre la API llamada "themovie2.0" y este frontend, es una página SPA que almacena datos como las credenciales de usuario en REDUX, esto le da una funcionalidad básica simulando una web de alquiler de series.
-Se compone de dos vistas reactivas, Header y Body, respectivamente.
-Ambas vistas contienen elementos separadps en common y pages, los cuales contienen los elementos usuario, caratula de la serie, y barra de búsqueda.

-Se conecta con los diferentes endpoints:

router.get('/getAll', rentalControllers.getAll)
router.post('/newrental', auth, rentalControllers.newrental)
router.get("/", auth, usersControllers.getAllUsers);
router.post("/", usersControllers.newUser);
router.put("/update", auth, usersControllers.updateUser);
router.delete("/delete", auth, usersControllers.deleteUser);
router.post("/login", usersControllers.loginUser);
router.post("/byName", auth, usersControllers.getUsersByName);
router.get("/getAll", seriesControllers.getAllSeries);
router.post("/newSerie", seriesControllers.newSerie);
router.put("/updateSerie", seriesControllers.updateSerie);
router.delete("/deleteSerie", seriesControllers.deleteSerie);
router.post("/rating", seriesControllers.postSeriesByRating);
router.post("/id", seriesControllers.postSeriesById);
router.get("/", seriesControllers.postSeriesBytittle);
router.post("/genre", seriesControllers.postSeriesByGenre);








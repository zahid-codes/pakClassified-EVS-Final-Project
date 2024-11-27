require("dotenv").config();
const cors = require('cors');
const express = require('express')
const app = express()
app.use(cors());
const ConnectDB = require("./util/db");
const UserRouter = require("./routes/users.routes");
const AdvertisementCategoriesRouter = require("./routes/AdvertisementCategories.routes");
const AdvertisementStatusRouter = require("./routes/AdvertisementStatus.routes");
const ContriesRouter = require("./routes/Contry.routes");
const ProvincesRouter = require("./routes/Province.routes");
const CitiesRouter = require("./routes/Cities.routes");
const CityAreasRouter = require("./routes/CitiesAreas.routes");
const AdvertisementTypesRouter = require("./routes/AdvertisementTypes.routes");
const RolesRouter = require("./routes/Role.routes");
const AdvertisementsRouter = require("./routes/Advertisements.routes");
const SubCategoryRouter = require("./routes/subcategories.routes");
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/uploads', express.static("uploads"))
app.use('/api/user', UserRouter)
app.use('/api/categories', AdvertisementCategoriesRouter)
app.use('/api/status', AdvertisementStatusRouter)
app.use('/api/countries', ContriesRouter)
app.use('/api/provience', ProvincesRouter)
app.use('/api/cities', CitiesRouter)
app.use('/api/cityareas', CityAreasRouter)
app.use('/api/advertisementtypes', AdvertisementTypesRouter)
app.use('/api/roles', RolesRouter)
app.use('/api/advertisements', AdvertisementsRouter)
app.use('/api/subcategory', SubCategoryRouter)
app.get('/', (req, res) => {
    res.send("server is running")
})

app.listen(process.env.PORT, () => {
    ConnectDB();
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})

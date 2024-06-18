const router = require("express").Router();

const analysisUrlHandler =require("../controllers/private/analysis_Controller");
const createShortUrlHandler =require("../controllers/private/createShortUrl_controller");
const getAllUrlHandler =require("../controllers/private/getAll_controller");

const autherizationMiddleWareFunc = require("../middleware/authorizationMiddleware");

router.get("/getAll",autherizationMiddleWareFunc,getAllUrlHandler);

router.get("/analysis",autherizationMiddleWareFunc,analysisUrlHandler);

router.post(
    "/createShortUrl",
    autherizationMiddleWareFunc,
    createShortUrlHandler
);

module.exports = router;
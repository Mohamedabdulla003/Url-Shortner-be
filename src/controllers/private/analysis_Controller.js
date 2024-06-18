const SuperUrlz = require("../../models/urlModel");

const analysisUrlHandler =async (req,res) =>{
    const { id } =req.userObj;
    try{
       if (!req.userObj) {
         res
         .status(401)
         .send({ msg: "Only authorized users allowed",type: "error" });
        } 
        const allUrls =await SuperUrlz.find({ user:id });


        const dataArray =await allUrls.map((doc) =>{
            const createdDateFn =doc.createdAt.toISOstring().split("T")[0];
            const dateArray = createdDateFn.split("-");
            return {
                urlName: doc.originalUrl,
                shortUrl: doc.doc.shortUrlId,
                day: dateArray[2],
                month:dateArray[1],
                year: dateArray[0],
            };
        });
        res.send({
            msg: "Date a successfully modified for analysis",
            type: "success",
            dataArray,
        });
    }catch (e) {
        console.log(e.message, "err-in analysisController");
        res
        .status(500)
        .send({ msg: "internal server error,try again", type: "error"})
    }
};
module.exports =analysisUrlHandler;
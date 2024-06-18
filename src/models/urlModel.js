const mongoose =require("mongoose");
const Schema =mongoose.Schema;

const SuperUrlzSchema =Schema(
    {
       originalUrl:{
         type:String,
         requried:true,
        },
        shortUrlId: {
            type:String,
            requried:true,
        },
        hitCount: {
            type:Number,
            default:0,
        },
        User: {
            type:mongoose.Types.ObjectId,
            ref:"User",
        },
    },
    { timestamps: true }
       
);

const SuperUrlz =mongoose.model(
    "SuperUrlz",
    SuperUrlzSchema,
    "SuperUrlCollection"
);

module.exports = SuperUrlz;
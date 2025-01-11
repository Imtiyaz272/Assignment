import mongoose from "mongoose";

const cryptoSchema = mongoose.Schema(
    {
        coin:{
            type: String,
            required: true
        },
        price:{
            type:Number,
            required:true
        },
        marketCap:{
            type:Number,
            required:true
        },
        change24h:{
            type:Number,
            required:true
        }
    },
    {
        timeStamps:true
    }
);

export const Crypto = mongoose.model('Crypto', cryptoSchema);
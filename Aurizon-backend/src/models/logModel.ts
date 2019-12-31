import { Schema } from "mongoose";
import * as mongoose from 'mongoose';

const  logSchema = new Schema({
    message: {
        type: String,
        required: true 
     },
    description: {
        type: String,
        required: false  
    },
    status: {
        type: String,
        required: true 
     },
    created_date_Time: {
        type: Date,
        default: Date.now
    } 
});

let logModel = mongoose.model('log', logSchema);
export {logModel}
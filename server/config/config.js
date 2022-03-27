import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname,`${process.env.NODE_ENV}.env`)
});
const config= {
    NODE_ENV : process.env.NODE_ENV || 'development',
    DB: process.env.DB || "mongodb+srv://Emaan:Fareeda143@cluster0.m8l7a.mongodb.net/Se_proj?retryWrites=true&w=majority",
    PORT : process.env.PORT || 8080
}
export default config
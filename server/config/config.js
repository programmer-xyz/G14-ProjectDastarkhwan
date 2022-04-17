import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname,`${process.env.NODE_ENV}.env`)
});
const config= {
    NODE_ENV : process.env.NODE_ENV || 'development',
    DB: process.env.DB || "mongodb+srv://Emaan:Fareeda143@cluster0.m8l7a.mongodb.net/Se_proj?retryWrites=true&w=majority",
    PORT : process.env.PORT || 8080,
    JWT_SECRET: process.env.JWT_SECRET|| "3717e97bef1cce9db952141417a7e96813db410bf221e18dc6acb3a7d2d93197211a490a900075a0b17c39f29356ba806a6a1b07c461eda8e6fabaaa13f98bd4",
    JWT_EXPIRE: process.env.JWT_EXPIRE || "1200s"
}
export default config
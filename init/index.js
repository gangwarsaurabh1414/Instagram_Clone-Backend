const mongoose = require('mongoose')
const initData = require('./init.js')
const Post = require('../models/post.js')


const MONGO_URL = 'mongodb+srv://gangwarsaurabh1414_db_user:9ioyt4JiHwoSRLII@mycluster.zr5gtea.mongodb.net/instagram'

main()
    .then(() => console.log("Successfully connected to mongoDB"))
    .catch((err) => console.log(err))

async function main() {
    await mongoose.connect(MONGO_URL)
}


const initDB = async () => {
    await Post.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, postedBy: "6927465b1e1a2f1b746964b3" }));
    await Post.insertMany(initData.data)
    console.log("Data was initialized");
}
initDB();

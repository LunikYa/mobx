const clientDb     = require('../../db/db');
const { ObjectId } = require('mongodb');

module.exports.getUsers = async function (ctx) {
    const db = clientDb.getDB();

    const lessons = await db.collection('lessons').find({profession: ctx.params.profession}).toArray();

}

module.exports = async function (ctx, next) {
    const jwt = require('jsonwebtoken');
    const token = ctx.request.header['authorization'];
    let isUser = false;

    if (!token) {
        ctx.response.status = 403;
        ctx.response.body = {auth: false, message: 'No token provided.'};
    } else {
        jwt.verify(token, "js-key", (err, decoded) => {
            if (err) {
                ctx.response.status = 403;
                ctx.response.body = {auth: false, message: 'Failed to authenticate token.'};
            } else {
                ctx.request.user = decoded;
                isUser = true;
            }
        });
        if (isUser)
            await next()
    }
}
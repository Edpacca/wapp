import jwt from 'jsonwebtoken';

export function verifyUserToken(request, result, next) {
    const token = request.cookies.token;
    
    if (!token) {
        return result.status(403).send("A token is required for authentication");
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        request.user = decoded;
    } catch (error) {
        return result.status(401).send("Invalid Token");
    }

    return next();
};

export function verifyAdminToken(request, result, next) {
    const token = request.cookies.token;
    
    if (!token) {
        return result.status(403).send("A token is required for authentication");
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        request.admin = decoded;
    } catch (error) {
        return result.status(401).send("Invalid Token");
    }

    return next();
};

export function verifyClientToken(request, result, next) {
    const token =
        request.body.token || request.query.token || request.headers["x-access-token"];
    
    if (!token) {
        return result.status(403).send("A token is required for authentication");
    }

    try {
        const decoded = jwt.verify(token, process.env.CLIENT_SECRET);
        request.client = decoded;
    } catch (error) {
        return result.status(401).send("Invalid Token");
    }

    return next();
};

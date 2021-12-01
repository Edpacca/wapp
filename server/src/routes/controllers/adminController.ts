import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../../models/adminModel';
import { ObfuscatedAdminModel } from '../../models/ObfuscatedAdminModel';
import cookieParser from 'cookie-parser';

export async function RegisterAdmin() {

    const existingAdmin = await Admin.findOne({name: "AdmiralAdmin"});
    if (existingAdmin) {
        return;
    }

    const encryptedPassword = await bcrypt.hash("adminpassword", 10);

    const admin = await Admin.create(
        {
            name: "AdmiralAdmin",
            password: encryptedPassword
        }
    );
        
    const token = jwt.sign(
        { admin_id: admin._id, name: admin.name },
        process.env.ADMIN_TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );

    admin.token = token;

    return token;
}

export async function LoginAdmin(request, result) {
    try {
        const { name, password } = request.body;

        if (!(name && password)) {
            return result.status(400).send("All input required");
        }

        const admin = await Admin.findOne({name});

        if (admin && (await bcrypt.compare(password, admin.password))) {
            const token = jwt.sign(
                { admin_id: admin._id, name: admin.name },
                process.env.ADMIN_TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            admin.token = token;

            const obfsAdmin: ObfuscatedAdminModel = {
                id: admin._id,
                name: admin.name,
                token: admin.token,
            }
            
            return result.cookie('token', token, {httpOnly: true}).status(200).send(obfsAdmin);
        }

        return result.status(400).send("Invalid Credentials");

    } catch (error) {
        console.log(error)
    }
}

async function GenerateToken() {
    const token = jwt.sign(
        { client: "wapp" },
        process.env.CLIENT_SECRET
    );

    console.log(token);
}
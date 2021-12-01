import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../../models/adminModel';
import { ObfuscatedAdminModel } from '../../models/ObfuscatedAdminModel';

export async function RegisterAdmin(request, result) {

    const encryptedPassword = await bcrypt.hash("adminpassword", 10);

    const admin = await Admin.create(
        {
            name: "AdmiralAdmin",
            password: encryptedPassword
        }
    );
        
    const token = jwt.sign(
        { admin_id: admin._id, name: admin.name },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );

    admin.token = token;

    return result.status(200).json(admin);
}

export async function LoginAdmin(request, result) {
    try {
        const { name, password } = request.body;

        if (!(name && password)) {
            result.status(400).send("All input required");
        }

        const admin = await Admin.findOne({name});

        if (admin && (await bcrypt.compare(password, admin.password))) {
            const token = jwt.sign(
                { admin_id: admin._id, name: admin.name },
                process.env.TOKEN_KEY,
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
            
            return result.status(200).json(obfsAdmin);
        }

        result.status(400).send("Invalid Credentials");

    } catch (error) {
        console.log(error)
    }
}
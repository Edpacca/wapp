import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../../models/schema/adminModelSchema';

export async function registerAdmin() {

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
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );

    admin.token = token;

    return token;
}



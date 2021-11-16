import { Error, NativeError } from 'mongoose'
import User from '../../models/userModel'

export function CreateUser(req: any, res: any): any {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Provide user data'
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({
            success: false,
            error: 'invalid user model provided'
        })
    }

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: `Create user ${user.name} of ${user.family} group`
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created',
            })
        })
}
import User from '../../models/userModel';
import { v4 as uuid } from 'uuid';

export async function CreateUser(request, result) {

    const user = await User.findOne({family: request.body.family});
    let familyId;
    if (user) {
        familyId = user.familyId
    } else {
        familyId = uuid();
    }

    try {
        const user = new User({
            name: request.body.name,
            family: request.body.family,
            familyId: familyId,
            passcode: request.body.passcode,
            starter: null,
            main: null,
            dessert: null,
            diet: null
        });

        user
        .save()
        .then(() => {
            return result.status(201).json({
                success: true,
                id: user._id,
                message: `Create user ${user.name} of ${user.family} group`
            });
        });
    } catch (error) {
        return result.status(400).json({
            error,
            message: 'User not created',
        })
    }
}

export async function GetUser(request, result) {

    User.findById({_id: request.query.id}, (err, user) => {
        
        if (!user) {
            return result.status(404).json({
                success: false,
                error: 'User not found',
            })
        }

        return result.status(200).json({
            id: user._id,
            name: user.name,
            family: user.family,
            starter: user.starter,
            main: user.main,
            dessert: user.dessert
        })
    })
}

export function GetUsers(request, result) {

    User.find({}, function(err, users) {
        return result.status(200).json(users)
    })
}

export async function GetUsersByFamily(request, result) {
    const users = await User.find({ 'family' : request.body.family})

    if (!users || users.length === 0){
        return result.status(400).json({
            success: false,
            error: 'No family found'
        })
    }

    return result.status(200).json(users);
}

export async function UpdateMealChoices(request, result) {

    const body = request.body

    if (!body) {
        return result.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    console.log(body);

    User.findByIdAndUpdate({_id: request.query.id}, { "starter": body.starter, "main": body.main, "dessert": body.dessert, "diet": body.diet }, (err, user) => {
        
        if (!user) {
            return result.status(404).json({
                success: false,
                error: 'User not found',
            })
        }

        if (err) {
            return result.status(500).send(err)
        }

        return result.status(200).json({
            success: true,
            id: user._id,
            message: `meal choices updated for ${user.name}`,
            starter: body.starter,
            main: body.main,
            dessert: body.dessert,
            diet: body.diet
        })
    })
}
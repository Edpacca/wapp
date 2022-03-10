import Room from '../../models/schema/roomModelSchema';
import { RoomResponse } from '../../models/responses/roomResponse';

export async function getRooms() {

    const rooms = await Room.find({});
    if (!rooms || rooms.length === 0) {
        return [];
    }

    const roomResponse: RoomResponse[] = [];

    rooms.forEach(room => {
        roomResponse.push({
            id: room._id,
            roomNumber: room.roomNumber,
            guestNames: room.guestNames,
        });
    })

    return roomResponse;
}

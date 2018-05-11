import Service from '../utils/service';

export default class BookingService extends Service {
    static async add(booking) {
        return await super.__POST('/api/v3/booking/admin/add', booking);
    }

    static async editRequest(id, booking) {
        return await super.__PUT(`/api/v3/booking/update/${id}/passengers`, booking);
    }

    static async get(id) {
        return await super.__GET(`/api/v3/booking/get/${id}`);
    }
}

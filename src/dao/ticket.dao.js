import Ticket from "../models/ticket.model.js";

class TicketDAO {
  async create(ticketData) {
    return await Ticket.create(ticketData);
  }

  async getByCode(code) {
    return await Ticket.findOne({ code });
  }
}

export default TicketDAO;

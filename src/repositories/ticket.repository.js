import TicketDAO from "../dao/ticket.dao.js";

class TicketRepository {
  constructor() {
    this.ticketDAO = new TicketDAO();
  }

  async create(ticketData) {
    return await this.ticketDAO.create(ticketData);
  }

  async getByCode(code) {
    return await this.ticketDAO.getByCode(code);
  }
}

export default TicketRepository;

import TicketRepository from "../repositories/ticket.repository.js";
import { v4 as uuidv4 } from "uuid";

class TicketService {
  constructor() {
    this.ticketRepository = new TicketRepository();
  }

  async createTicket(purchaser, amount) {
    const ticketData = {
      code: uuidv4(),
      amount,
      purchaser,
    };
    return await this.ticketRepository.create(ticketData);
  }
}

export default TicketService;

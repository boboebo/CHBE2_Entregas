import TicketService from "../services/ticket.service.js";

const ticketService = new TicketService();

export const createTicket = async (req, res) => {
  try {
    const { amount } = req.body;
    const ticket = await ticketService.createTicket(req.user.email, amount);
    res.status(201).json({ message: "Ticket created", ticket });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

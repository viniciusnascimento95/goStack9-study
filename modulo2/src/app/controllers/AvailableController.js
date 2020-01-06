import {
  startOfDay,
  endOfDay,
  setHours,
  setMinutes,
  setSeconds,
  format,
  isAfter,
} from 'date-fns';
import Appointment from '../models/Appointment';
import { Op } from 'sequelize';

class AvailableController {
  async index(req, res) {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ error: 'Invalid date' });
    }

    const searchDate = Number(date);

    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.params.providerId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
        },
      },
    });

    // Horários disponiveis no dia
    const schedule = [
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
    ];

    // Checa se já passou do horário e se não há nenhum appointment para certo horário
    const available = schedule.map(time => {
      // Designa variáveis para Hora e Minuto do schedule
      const [hour, minute] = time.split(':');

      // Transforma as horas do searchDate (data do Query) para o formato do schedule
      const value = setSeconds(
        setMinutes(setHours(searchDate, hour), minute),
        0
      );

      return {
        time,
        // Formata para o formato ANO-MES-DIA HORA-MINUTOS-SEGUNDOS-UTC
        value: format(value, "yyyy-MM-dd'T'HH:mm:ssxxx"),
        // Verifica se o horário já passou e se não tem nenhum appointment agendado
        available:
          isAfter(value, new Date()) &&
          !appointments.find(a => format(a.date, 'HH:mm') === time),
      };
    });

    return res.json(available);
  }
}

export default new AvailableController();

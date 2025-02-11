import {
  add,
  format,
  formatDistance,
  type Month,
  parseISO as parseISOFns,
  toDate as toDateFns,
} from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

export class DateFnsHelper {
  private static readonly DEFAULT_FORMAT = "d 'de' MMMM 'de' yyyy";

  static formatDistance(date: Date, baseDate: Date = new Date()): string {
    return formatDistance(date, baseDate, {
      addSuffix: true,
      locale: ptBR,
    });
  }

  static parseISO(argument: string): Date | null {
    try {
      return parseISOFns(argument);
    } catch (error) {
      console.error(`Erro ao converter string para data: ${argument}`, error);
      return null;
    }
  }
  static toDate(argument: string | number | Date): Date | string {
    try {
      return toDateFns(argument);
    } catch {
      console.error(`Erro ao converter argumento para data: ${argument}`);
      return '';
    }
  }

  static format(
    date: Date | string | number,
    formatStr: string = DateFnsHelper.DEFAULT_FORMAT
  ): string {
    if (!date) {
      console.warn('Data inválida fornecida para formatação');
      return 'Data inválida';
    }

    return format(date, formatStr, {
      locale: ptBR,
    });
  }

  static addTime(
    date: Date,
    amount: number,
    unit: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'
  ): Date {
    return add(date, { [unit]: amount });
  }

  static getMonthNamesFromMonthNumber(number: number): string {
    if (!Number.isInteger(number) || number < 0 || number > 11) {
      console.warn(`Número do mês inválido: ${number}`);
      return 'Mês desconhecido';
    }

    const monthName = ptBR.localize.month(number as Month, { width: 'wide' });

    return monthName.charAt(0).toUpperCase() + monthName.slice(1).toLowerCase();
  }
}

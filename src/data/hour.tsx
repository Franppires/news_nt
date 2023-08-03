//função para pegar horario 
export default function hourFormatter(date: Date, locale = 'pt-BR') { 
  return new Intl.DateTimeFormat(locale, {
    hour: "numeric", 
    minute: "numeric", 
    second: "numeric"
  }).format(date);
}

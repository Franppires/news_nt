//função para formatar data
export default function dateFormatter(date: Date, locale = 'en') {
  return new Intl.DateTimeFormat(locale, { 
    weekday: "long",
    day: '2-digit',
    month: "long",
    year: 'numeric',

  }).format(date);
}


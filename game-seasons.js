function quessTimeOfYear() {
  let montNumber = prompt('Введите номер месяца');

  switch (montNumber) {
      case '1':
    return('зима');
      case '2':
    return('зима');
      case '3':
    return('весна');
      case '4':
    return('весна');
      case '5':
    return('весна');
      case '6':
    return('лето');
      case '7':
    return('лето');
      case '8':
    return('лето');
        case '9':
    return('осень');
        case '10':
    return('осень');
        case '11':
    return('осень');
        case '12':
    return('зима');
        default:
    return('такого месяца не существует');
  }
  
}


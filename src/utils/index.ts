export function getColorsByPokemonType(type: string) {
  switch (type) {
    case 'normal':
      return {
        background: 'linear-gradient(180deg, #A8A878 0%, #C6C6A7 100%)',
        backgroundColor: '#9099A1',
        color: '#FFF',
      };

    case 'fire':
      return {
        background: 'linear-gradient(180deg, #F08030 0%, #F5AC78 100%)',
        backgroundColor: '#FF9C54',
        color: '#FFF',
      };

    case 'water':
      return {
        background: 'linear-gradient(180deg, #6890F0 0%, #9DB7F5 100%)',
        backgroundColor: '#4D90D5',
        color: '#FFF',
      };

    case 'electric':
      return {
        background: 'linear-gradient(180deg, #F8D030 0%, #FAE078 100%)',
        backgroundColor: '#F3D23B',
        color: '#FFF',
      };

    case 'grass':
      return {
        background: 'linear-gradient(180deg, #78C850 0%, #A7DB8D 100%)',
        backgroundColor: '#63BB5B',
        color: '#FFF',
      };

    case 'ice':
      return {
        background: 'linear-gradient(180deg, #98D8D8 0%, #BCE6E6 100%)',
        backgroundColor: '#74CEC0',
        color: '#FFF',
      };

    case 'fighting':
      return {
        background: 'linear-gradient(180deg, #C03028 0%, #D67873 100%)',
        backgroundColor: '#CE4069',
        color: '#FFF',
      };

    case 'poison':
      return {
        background: 'linear-gradient(180deg, #A040A0 0%, #C183C1 100%)',
        backgroundColor: '#AB6AC8',
        color: '#FFF',
      };

    case 'ground':
      return {
        background: 'linear-gradient(180deg, #E0C068 0%, #EBD69D 100%)',
        backgroundColor: '#D97746',
        color: '#FFF',
      };

    case 'flying':
      return {
        background: 'linear-gradient(180deg, #A890F0 0%, #C6B7F5 100%)',
        backgroundColor: '#92AADE',
        color: '#FFF',
      };

    case 'psychic':
      return {
        background: 'linear-gradient(180deg, #F85888 0%, #FA92B2 100%)',
        backgroundColor: '#F97176',
        color: '#FFF',
      };

    case 'bug':
      return {
        background: 'linear-gradient(180deg, #A8B820 0%, #C6D16E 100%)',
        backgroundColor: '#90C12C',
        color: '#FFF',
      };

    case 'rock':
      return {
        background: 'linear-gradient(180deg, #B8A038 0%, #D1C17D 100%)',
        backgroundColor: '#C7B78B',
        color: '#FFF',
      };

    case 'ghost':
      return {
        background: 'linear-gradient(180deg, #705898 0%, #9181A1 100%)',
        backgroundColor: '#5269AC',
        color: '#FFF',
      };

    case 'dragon':
      return {
        background: 'linear-gradient(180deg, #7038F8 0%, #A27DFA 100%)',
        backgroundColor: '#096DC4',
        color: '#FFF',
      };

    case 'dark':
      return {
        background: 'linear-gradient(180deg, #705848 0%, #A29288 100%)',
        backgroundColor: '#5A5366',
        color: '#FFF',
      };

    case 'steel':
      return {
        background: 'linear-gradient(180deg, #B8B8D0 0%, #D1D1E0 100%)',
        backgroundColor: '#5A8EA1',
        color: '#FFF',
      };

    case 'fairy':
      return {
        background: 'linear-gradient(180deg, #EE99AC 0%, #F4BDC9 100%)',
        backgroundColor: '#EC8FE6',
        color: '#FFF',
      };

    default:
      return {
        background: 'linear-gradient(180deg, #9099A1 50%, #9099A1 50%)',
        backgroundColor: '#9099A1',
        color: '#FFF',
      };
  }
}

export function convertPokemonSize({
  height,
  weight,
}: {
  height: number;
  weight: number;
}) {
  const heightInMeters = height / 10;
  const heightInFeet = heightInMeters * 3.281; // 1 meter = 3.281 feet
  const feet = Math.floor(heightInFeet);
  const inches = Math.round((heightInFeet - feet) * 12);

  const weightInKg = weight / 10;
  const weightInLbs = (weightInKg * 2.205).toFixed(2); // 1 kilogram = 2.205 pounds

  return {
    height: { feet, inches },
    weight: { kg: weightInKg, lbs: weightInLbs },
  };
}

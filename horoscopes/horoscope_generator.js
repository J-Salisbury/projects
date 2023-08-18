//Random number determines their horoscope for the day
const randomNumber = () => {
    return Math.floor(Math.random()*12);
}

const getHoroscope = num => {
    let horoscope = '';
    switch (num) {
        case 0:
            horoscope = 'You should buy a puppy.';
            break;
        case 1:
            horoscope = 'A change of career is in the cards.'
            break;
        case 2:
            horoscope = 'Create a new philosophy on life with new ideas and theories.'
            break;
        case 3:
            horoscope = 'You will gain money today.'
            break;
        case 4:
            horoscope = 'You will get in a fight with someone today. Watchout!'
            break;
        case 5:
            horoscope = 'Someone you find very attractive will compliment you today'
            break;
        case 6:
            horoscope = 'Take a risk.'
            break;
        case 7:
            horoscope = 'Call your mom today.'
            break;
        case 8:
            horoscope = 'You will meet the love of your life today.'
            break;
        case 9:
            horoscope = 'If someone offers you a donut, you should eat that donut.'
            break;
        case 10:
            horoscope = 'Turn off the news and go touch grass.'
            break;
        case 11:
            horoscope = 'Being kind to strangers will grant you good cosmic karma.'
            break;
        case 12:
            horoscope = 'Reach out to an old friend. They are waiting to hear from you.'
            break;
    }
    console.log(horoscope);
}
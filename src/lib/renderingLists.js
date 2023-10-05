
const navbarList = ["Dane Klienta", "Produkty/Zamówienie", "Płatności", "Logistyka", "Dokumenty", "Załączniki", /* "EMAIL", "Reklamacje", "KosztWys.", "Odp.(Magazyn)", "Eksport", */ "Zapisz"];

const countryList = ["PL", "CZ", "DE", "ES"];

const orderNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const test = {
    1: {
        id: 1,
        name: 'Janusz',
        country: 'PL',
        zipcode: '90-999',
        city: 'Tg',
        phone: 123456789,
        email: 'janusz@gm.pl'
    },
    2: {
        id: 2,
        name: 'Jan',
        country: 'CZ',
        zipcode: '09-321',
        city: 'Praha',
        phone: 843764364,
        email: 'jan@gm.cz'
    }
}

export { countryList, navbarList, orderNumberList };
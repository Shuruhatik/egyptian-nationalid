import arabic_codes from './arabic.json'
import english_codes from './english.json'
interface LangWords {
    arabic: [string, string, any]
    english: [string, string, any]
}
const words: LangWords = { "arabic": ["ذكر", "أنثى", arabic_codes], "english": ["Male", "Female", english_codes] }

function isValid(national_id: string = "0"): boolean {
    let data = getInformation(national_id)
    if ([data.type, data.century, data.birthday?.day, data.birthday?.year, data.birthday?.month, data.governorate].some(v => !v)) return false
    if (data.age && data.age < 0) return false;
    if (data.birthday && data.birthday.date && (Date.now() - (+new Date(data.birthday.date))) < 0) return false;

    else return true
}

/*
    If you find it difficult to understand, please see me
    https://ar.wikipedia.org/wiki/%D8%A8%D8%B7%D8%A7%D9%82%D8%A9_%D8%A7%D9%84%D8%B1%D9%82%D9%85_%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A_%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9#%D9%88%D8%B5%D9%81_%D8%A7%D9%84%D8%B1%D9%82%D9%85_%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A
*/ 
function getInformation(national_id: string = "0", lang: ("english" | "arabic") = "english"): {
    error: string;
    type?: undefined;
    century?: undefined;
    age?: undefined;
    national_id?: undefined;
    birthday?: undefined;
    governorate?: undefined;
} | {
    type: string;
    century: string | undefined;
    age: number;
    national_id: string;
    birthday: {
        text: string;
        date: Date;
        day: string;
        month: string;
        year: string;
    };
    governorate: string;
    error?: undefined;
} {
    let governorate: string = words[lang][2][Number(national_id.slice(7, 9))]
    let century: (string | undefined) = national_id.slice(0, 1) === "2" ? "19" : national_id.slice(0, 1) === "3" ? "20" : undefined
    let year: string = century + national_id.slice(1, 3)
    let month: string = national_id.slice(3, 5)
    let day: string = national_id.slice(5, 7)
    let type: string = +national_id.slice(9, 13) % 2 == 0 ? words[lang][1] : words[lang][0]
    if ([type, day, year, month, governorate, century].some(v => !v)) return { error: `Invalid national ID number: ${national_id}. Please enter the correct one` }
    return { type, century, age: new Date().getFullYear() - Number(year), national_id, birthday: { text: `${year}/${month}/${day}`, date: new Date(+day, +month, +year), day, month, year }, governorate }
}


export { getInformation, isValid }
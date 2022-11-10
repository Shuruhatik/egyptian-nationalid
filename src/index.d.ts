declare function isValid(national_id?: string): boolean;
declare function getInformation(national_id?: string, lang?: ("english" | "arabic")): {
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
};
export { getInformation, isValid };

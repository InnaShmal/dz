'use strict';

function ageValidation(birthDateString) {
    const birthDate = new Date(birthDateString);

    
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasNotHadBirthdayThisYear =
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
            today.getDate() < birthDate.getDate());

    if (hasNotHadBirthdayThisYear) {
        age--;
    }

    return age >= 14;
}

console.log(ageValidation('2010-5-27'));

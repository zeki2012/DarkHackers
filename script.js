let hesab = document.getElementById('hesab');
let bmi;
let netice;

let bmiMore;
let bmiLess;

let resultCox;
let resultAz;

let azCox;

hesab.onclick = () => {
    bmi = (ceki.value / (boy.value ** 2)) * 10000;
    bmiMore = (26 * (boy.value ** 2)) / 10000;
    bmiLess = (20 * (boy.value ** 2)) / 10000;
    resultCox = ceki.value - bmiMore;
    resultAz = bmiLess - ceki.value;

    if (bmi < 20) {
        azCox = 'az';
    } else {
        azCox = 'artıq';
    }

    if (bmi < 18) {
        netice = `Siz çəki azlığından əziyyət çəkirsiniz. ${resultAz.toFixed(2)} kq ${azCox} cekiniz var`;
    } else if (bmi < 20) {
        netice = `Sizin çəkiniz azdır. Lakin sağlamlıq üçün zərəli deyil. ${resultAz.toFixed(2)} kq ${azCox} cekiniz var`;
    } else if (bmi < 26) {
        netice = 'Sizin çəkiniz normaldır. Təbriklər';
    } else if (bmi < 28) {
        netice = `Sizin artıq çəkiniz var. ${resultCox.toFixed(2)} kq ${azCox} cekiniz var`;
    } else if (bmi < 31) {
        netice = `Siz 1-ci dərəcəli artıq çəkidən əziyyət çəkirsiniz. ${resultCox.toFixed(2)} kq ${azCox} cekiniz var`;
    } else if (bmi < 36) {
        netice = `Siz 2-ci dərəcəli artıq çəkidən əziyyət çəkirsiniz. ${resultCox.toFixed(2)} kq ${azCox} cekiniz var`;
    } else if (bmi < 41) {
        netice = `Siz 3-cü dərəcəli artıq çəkidən əziyyət çəkirsiniz. ${resultCox.toFixed(2)} kq ${azCox} cekiniz var`;
    } else if (bmi >= 41) {
        netice = `Siz 4-cü dərəcəli artıq çəkidən əziyyət çəkirsiniz. ${resultCox.toFixed(2)} kq ${azCox} cekiniz var`;
    } else {
        netice = 'Xanaları düzgün doldurun';
    }
    document.getElementById('zeki').innerHTML = netice;
}
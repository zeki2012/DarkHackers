let hesabla = document.getElementById('hesab');
let bmi;

hesabla.onclick = () => {
    bmi = (ceki.value / (boy.value ** 2)) * 10000 ;

if (bmi < 18) {
    netice = 'Siz çəki azlığından əziyyət çəkirsiniz.';
} else if (bmi < 20) {
  netice = 'Sizin, çəkiniz azdır. Lakin sağlamlıq üçün zərərli deyil.';
} else if (bmi < 26) {
  netice = 'Sizin, çəkiniz normaldır. Təbriklər !!!';
} else if (bmi < 28) {
  netice = 'Sizin artıq çəkiniz var.';
} else if (bmi < 31) {
  netice = 'Siz, 1-ci dərəcəli artıq çəkidən əziyyət çəkirsiniz.';
} else if (bmi < 36) {
  netice = 'Siz, 2-ci dərəcəli artıq çəkidən əziyyət çəkirsiniz.';
} else if (bmi < 41) {
  netice = 'Siz, 3-cü dərəcəli artıq çəkidən əziyyət çəkirsiniz.';
} else {
  netice = 'Siz, 4-cü dərəcəli artıq çəkidən əziyyət çəkirsiniz.';
}


    document.getElementById('zeki').innerHTML = netice
}
function validDevelopers(autoFocus) {
    let errorCount = 0;
    let developersInput = document.forms.validForm.developers;
    let developersValue = developersInput.value;
    let developersError = document.querySelector('.developersError');

    if(developersValue == '') {
        developersError.innerHTML = 'Введите разработчиков';
        errorCount++;
    } else {
        developersError.innerHTML = '';
    }

    if(errorCount && autoFocus) {
        developersInput.focus();
    }

    return errorCount;
}
document.forms.validForm.developers.onblur = function() {
    validDevelopers(false);
}

function validTitle(autoFocus) {
    let errorCount = 0;
    let titleInput = document.forms.validForm.title;
    let titleValue = titleInput.value;
    let titleError = document.querySelector('.titleError');

    if(titleValue == '') {
        titleError.innerHTML = 'Введите название сайта';
        errorCount++;
    } else {
        titleError.innerHTML = '';
    }

    if(errorCount && autoFocus) {
        titleInput.focus();
    }

    return errorCount;

}
document.forms.validForm.title.onblur = function() {
    validTitle(false);
}

function validUrl(autoFocus) {
    let errorCount = 0;
    let urlInput = document.forms.validForm.url;
    let urlValue = urlInput.value;
    let urlError = document.querySelector('.urlError');

    if(urlValue == '') {
        urlError.innerHTML = 'Введите URL сайта';
        errorCount++;
    } else {
        urlError.innerHTML = '';
    }

    if(errorCount && autoFocus) {
        urlInput.focus();
    }

    return errorCount;

}
document.forms.validForm.url.onblur = function() {
    validUrl(false);
}

function validStartDate(autoFocus) {
    let errorCount = 0;
    let startDateInput = document.forms.validForm.startDate;
    let startDateValue = startDateInput.value;
    let startDateError = document.querySelector('.startDateError');

    if(startDateValue == '') {
        startDateError.innerHTML = 'Выберите дату запуска сайта';
        errorCount++;
    } else {
        startDateError.innerHTML = '';
    }

    if(errorCount && autoFocus) {
        startDateInput.focus();
    }

    return errorCount;

}
document.forms.validForm.startDate.onblur = function() {
    validStartDate(false);
}

function validPersons(autoFocus) {
    let errorCount = 0;
    let personsInput = document.forms.validForm.persons;
    let personsValue = personsInput.value;
    let personsError = document.querySelector('.personsError');

    if(personsValue == '') {
        personsError.innerHTML = 'Введите количество посетителей в сутки';
        errorCount++;
    } else {
        personsError.innerHTML = '';
    }

    if(errorCount && autoFocus) {
        personsInput.focus();
    }

    return errorCount;

}
document.forms.validForm.persons.onblur = function() {
    validPersons(false);
}

function validMail(autoFocus) {
    let errorCount = 0;
    let eMailInput = document.forms.validForm.eMail;
    let eMailValue = eMailInput.value;
    let eMailError = document.querySelector('.eMailError');

    if(eMailValue == '') {
        eMailError.innerHTML = 'Введите e-mail для связи';
        errorCount++;
    } else {
        eMailError.innerHTML = '';
    }

    if(errorCount && autoFocus) {
        eMailInput.focus();
    }

    return errorCount;

}
document.forms.validForm.eMail.onblur = function() {
    validMail(false);
}

function validRubric(autoFocus) {
    let errorCount = 0;
    let rubricSelect = document.forms.validForm.rubric;
    let rubricValue = rubricSelect.value;
    let rubricError = document.querySelector('.rubricError');

    if(rubricValue == '0') {
        rubricError.innerHTML = 'Выберите рубрику сайта';
        errorCount++;
    } else {
        rubricError.innerHTML = '';
    }

    if(errorCount && autoFocus) {
        rubricSelect.focus();
    }

    return errorCount;

}
document.forms.validForm.rubric.onchange = function() {
    validRubric(false);
}

function validPlacement(autoFocus) {
    let errorCount = 0;
    let placementRadioBtn = document.forms.validForm.placement;
    let placementRadioBtnValue = placementRadioBtn.value;
    let placementRadioBtnError = document.querySelector('.placementError');

    if(placementRadioBtnValue == '') {
        placementRadioBtnError.innerHTML = 'Вы ничего не выбрали';
        errorCount++;
    } else {
        placementRadioBtnError.innerHTML = '';
    }

    if(errorCount && autoFocus) {
        placementRadioBtn[0].focus();
    }

    return errorCount;

}
document.forms.validForm.placement[0].onchange = function() {
    validPlacement(false);
}
document.forms.validForm.placement[1].onchange = function() {
    validPlacement(false);
}
document.forms.validForm.placement[2].onchange = function() {
    validPlacement(false);
}

function validComments(autoFocus) {
    let errorCount = 0;
    let commentsCheckbox = document.forms.validForm.comments;
    let commentsCheckboxValue = commentsCheckbox.value;
    let commentsCheckboxError = document.querySelector('.commentsError');

    if(!commentsCheckbox.checked) {
        commentsCheckboxError.innerHTML = 'Разрешите отзывы';
        errorCount++;
    } else {
        commentsCheckboxError.innerHTML = '';
    }

    if(errorCount && autoFocus) {
        commentsCheckbox.focus();
    }

    return errorCount;

}
document.forms.validForm.comments.onchange = function() {
    validComments(false);
}

function validDescription(autoFocus) {
    let errorCount = 0;
    let descriptionTextarea = document.forms.validForm.description;
    let descriptionTextareaValue = descriptionTextarea.value;
    let descriptionTextareaError = document.querySelector('.descriptionError');

    if(descriptionTextareaValue == '') {
        descriptionTextareaError.innerHTML = 'Введите описание сайта';
        errorCount++;
    } else {
        descriptionTextareaError.innerHTML = '';
    }

    if(errorCount && autoFocus) {
        descriptionTextarea.focus();
    }

    return errorCount;
}
document.forms.validForm.description.onblur = function() {
    validDescription(false);
}

function validAll(e) {
    try {
        let totalErrorCount = 0;
        totalErrorCount += validDevelopers(!totalErrorCount);
        totalErrorCount += validTitle(!totalErrorCount);
        totalErrorCount += validUrl(!totalErrorCount);
        totalErrorCount += validStartDate(!totalErrorCount);
        totalErrorCount += validPersons(!totalErrorCount);
        totalErrorCount += validMail(!totalErrorCount);
        totalErrorCount += validRubric(!totalErrorCount);
        totalErrorCount += validPlacement(!totalErrorCount);
        totalErrorCount += validComments(!totalErrorCount);
        totalErrorCount += validDescription(!totalErrorCount);

        if(totalErrorCount) {
            e.preventDefault();
        }

    } catch(err) {
        e.preventDefault(); // Останавливает отправку формы если что-то пошло не так 
    }
}

document.forms.validForm.addEventListener('submit', validAll);


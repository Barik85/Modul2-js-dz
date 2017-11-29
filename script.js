const GUEST_QUANTITY = prompt('Введите количество участников в группе', ' ')

let sharm = 15;
let hurgada = 25;
let taba = 6;
if(!GUEST_QUANTITY){
    alert(`Вы не ввели количество участников. Для того чтобы повторить обновите страницу!`)
}

else if( (parseInt(GUEST_QUANTITY) != GUEST_QUANTITY) || (GUEST_QUANTITY <= 0) ){
    alert(`Введите целое число больше 0`);
}

//Checking for 3 variant
else if ( (GUEST_QUANTITY <= taba) && (GUEST_QUANTITY <= sharm) && (GUEST_QUANTITY <= hurgada) ) {
    let tabaReservation = confirm(`Для вашей группы доступно 3 тура: Шарм, Хургада, Таба.
    Нажмите "ок" если хотите поехать в Табу. Нажмите "отмена" если хотите выбрать другой тур`)
    if(tabaReservation) {
        taba = taba - GUEST_QUANTITY;
        alert(`Выбран тур в Табу. Осталось ${taba} мест(а) в Табу`);
    }
    else {
        let sharmReservation = confirm(`Хотите поехать в Шарм. Нажмите "ок" для подтверждения 
        или "отмена" для выбора другого тура`)
        if(sharmReservation){
            sharm = sharm - GUEST_QUANTITY;
            alert(`Выбран тур в Шарм Эль Шейх. Осталось ${sharm} мест(а) Шарм Эль Шейх`);
        }
        else {
            let hurgadaReservation = confirm(`Хотите поехать в Хургаду? 
            Для подтверждения нажмите "ок". Для выхода нажмите "отмена" `)
            if(hurgadaReservation) {
                hurgada = hurgada - GUEST_QUANTITY;
                alert(`Выбран тур в Хургаду. Осталось ${hurgada} мест(а) в Хурагду`);
            }
            else {
                alert(`Вы не выбрали не одного тура. Чтобы начать с начала обновите страницу!`)
            }
        }
    }
}

//checking for first pair of 3 ways
else if( (GUEST_QUANTITY <= taba) && (GUEST_QUANTITY <= sharm) ){
    let tabaReservation = confirm(`Для вашей группы доступно 2 тура: Шарм Эль Шейх, Таба.
    Нажмите "ок" если хотите поехать в Табу. Нажмите "отмена" если хотите выбрать другой тур`)
    if(tabaReservation) {
        taba = taba - GUEST_QUANTITY;
        alert(`Выбран тур в Табу. Осталось ${taba} мест(а) в Табу`);
    }
    else {
        let sharmReservation = confirm(`Хотите поехать в Шарм? Нажмите "ок" для подтверждения 
        или "отмена" для выбора другого тура`)
        if(sharmReservation){
            sharm = sharm - GUEST_QUANTITY;
            alert(`Выбран тур в Шарм Эль Шейх. Осталось ${sharm} мест(а) Шарм Эль Шейх`);
        }
        else {
            alert(`Вы не выбрали не одного тура. Чтобы начать с начала обновите страницу!`);
        }
    }
}

//checking for second pair of 3 ways
else if( (GUEST_QUANTITY <= sharm) && (GUEST_QUANTITY <= hurgada) ) {
    let sharmReservation = confirm(`Для вас доступно 2 тура.
    Хотите поехать в Шарм? Нажмите "ок" для подтверждения 
    или "отмена" для выбора другого тура`)
    if(sharmReservation){
        sharm = sharm - GUEST_QUANTITY;
        alert(`Выбран тур в Шарм Эль Шейх. Осталось ${sharm} мест(а) Шарм Эль Шейх`);
    }
    else {
        let hurgadaReservation = confirm(`Хотите поехать в Хургаду? 
        Для подтверждения нажмите "ок". Для выхода нажмите "отмена" `)
        if(hurgadaReservation) {
            hurgada = hurgada - GUEST_QUANTITY;
            alert(`Выбран тур в Хургаду. Осталось ${hurgada} мест(а) в Хурагду`);
        }
        else {
            alert(`Вы не выбрали не одного тура. Чтобы начать с начала обновите страницу!`)
        }
    }
}

//checking for third pair of 3 ways
else if ( (GUEST_QUANTITY <= taba) && (GUEST_QUANTITY <= hurgada) ) {
    let tabaReservation = confirm(`Для вашей группы доступно 2 тура: Хургада, Таба.
    Нажмите "ок" если хотите поехать в Табу. Нажмите "отмена" если хотите выбрать другой тур`)
    if(tabaReservation) {
        taba = taba - GUEST_QUANTITY;
        alert(`Выбран тур в Табу. Осталось ${taba} мест(а) в Табу`);
    }
    else {
        let hurgadaReservation = confirm(`Хотите поехать в Хургаду? 
        Для подтверждения нажмите "ок". Для выхода нажмите "отмена" `)
        if(hurgadaReservation) {
            hurgada = hurgada - GUEST_QUANTITY;
            alert(`Выбран тур в Хургаду. Осталось ${hurgada} мест(а) в Хурагду`);
        }
        else {
            alert(`Вы не выбрали не одного тура. Чтобы начать с начала обновите страницу!`);
        }
    }
}

//cheking for saparate variant first
else if(GUEST_QUANTITY <= taba) {
    let tabaReservation = confirm(`Для вашей группы доступен 1 тур: Таба.
    Нажмите "ок" если хотите поехать в Табу. Нажмите "отмена" для выхода`)
    if(tabaReservation) {
        taba = taba - GUEST_QUANTITY;
        alert(`Выбран тур в Табу. Осталось ${taba} мест(а) в Табу`);
    }
    else {
        alert(`Вы не выбрали не одного тура. Чтобы начать с начала обновите страницу!`);
        
    }
}

//cheking for saparate variant second
else if(GUEST_QUANTITY <= sharm){
    let sharmReservation = confirm(`Для вас доступен 1 тур.
    Хотите поехать в Шарм? Нажмите "ок" для подтверждения 
    или "отмена" для выхода`)
    if(sharmReservation){
        sharm = sharm - GUEST_QUANTITY;
        alert(`Выбран тур в Шарм Эль Шейх. Осталось ${sharm} мест(а) Шарм Эль Шейх`);
    }
    else {
        alert(`Вы не выбрали не одного тура. Чтобы начать с начала обновите страницу!`);
        
    }
}

//cheking for saparate variant third

else if(GUEST_QUANTITY <= hurgada){
    let hurgadaReservation = confirm(`Для вас доступен 1 тур. Хотите поехать в Хургаду? 
    Для подтверждения нажмите "ок". Для выхода нажмите "отмена" `)
    if(hurgadaReservation) {
        hurgada = hurgada - GUEST_QUANTITY;
        alert(`Выбран тур в Хургаду. Осталось ${hurgada} мест(а) в Хурагду`);
    }
    else {
        alert(`Вы не выбрали не одного тура. Чтобы начать с начала обновите страницу!`);
    }
}

else {
    alert(`Вас слишком много. Кто-то останется дома. Когда решите кто - обновите страницу!
    Максимальное число участников ${hurgada}`);
}

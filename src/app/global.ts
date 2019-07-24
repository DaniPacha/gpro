export let Global = {
    url : 'http://pachamora.develop/academico/gpro-api/v1/',
    settingDatePicker: {
        autoClose: true,
        format: 'dd/mm/yyyy',
        showClearBtn: true,
        yearRange: 2,
        i18n: {
            cancel: 'Cancelar',
            clear: 'Borrar',
            months: [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Setiembre',
                'Octubre',
                'Noviembre',
                'Diciembre'
            ],
            monthsShort: [
                'Ene',
                'Feb',
                'Mar',
                'Abr',
                'May',
                'Jun',
                'Jul',
                'Ago',
                'Set',
                'Oct',
                'Nov',
                'Dic'
            ],
            weekdays: [
                'Domingo',
                'Lunes',
                'Martes',
                'Miércoles',
                'Jueves',
                'Viernes',
                'Sábado'
            ],
            weekdaysShort: [
                'Dom',
                'Lun',
                'Mar',
                'Mié',
                'Jue',
                'Vie',
                'Sáb'
            ],
            weekdaysAbbrev: [ 'D', 'L', 'M', 'M', 'J', 'V', 'S' ]


        }
    },
    stringToDate (fechaString: string) {
        const myDate: any = fechaString.split('/');
        return new Date(myDate[2], myDate[1] - 1, myDate[0]);
    },
    anioActual: new Date().getFullYear(),
};

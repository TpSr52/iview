import setLang from '../lang';

const lang = {
    i: {
        locale: 'he-IL',
        select: {
            placeholder: 'בחר',
            noMatch: 'אין מידע תואם',
            loading: 'טוען'
        },
        table: {
            noDataText: 'אין מידע',
            noFilteredDataText: 'No filter data',
            confirmFilter: 'אשר',
            resetFilter: 'אפס',
            clearFilter: 'הכול'
        },
        datepicker: {
            selectDate: 'בחר תאריך',
            selectTime: 'בחר שעה',
            startTime: 'שעת התחלה',
            endTime: 'שעת סיום',
            clear: 'מחק',
            ok: 'אשר',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'חודש',
            month1: 'ינואר',
            month2: 'פברואר',
            month3: 'מרץ',
            month4: 'אפריל',
            month5: 'מאי',
            month6: 'יוני',
            month7: 'יולי',
            month8: 'אוגוסט',
            month9: 'ספטמבר',
            month10: 'אוקטובר',
            month11: 'נובמבר',
            month12: 'דצמבר',
            year: 'שנה',
            weekStartDay: '0',
            weeks: {
                sun: 'ראשון',
                mon: 'שני',
                tue: 'שלישי',
                wed: 'רביעי',
                thu: 'חמישי',
                fri: 'שישי',
                sat: 'שבת'
            },
            months: {
                m1: 'ינואר',
                m2: 'פברואר',
                m3: 'מרץ',
                m4: 'אפריל',
                m5: 'מאי',
                m6: 'יוני',
                m7: 'יולי',
                m8: 'אוגוסט',
                m9: 'ספטמבר',
                m10: 'אוקטובר',
                m11: 'נובמבר',
                m12: 'דצמבר'
            }
        },
        transfer: {
            titles: {
                source: 'מקור',
                target: 'יעד'
            },
            filterPlaceholder: 'חפש כאן',
            notFoundText: 'לא נמצא'
        },
        modal: {
            okText: 'אשר',
            cancelText: 'בטל'
        },
        poptip: {
            okText: 'אשר',
            cancelText: 'בטל'
        },
        page: {
            prev: 'עמוד קודם',
            next: 'עמוד הבא',
            total: 'Total',
            item: 'item',
            items: 'items',
            prev5: '5 עמודים קודמים',
            next5: '5 עמודים הבאים',
            page: '/עמוד',
            goto: 'עבור לעמוד',
            p: ''
        },
        rate: {
            star: 'כוכב',
            stars: 'כוכבים'
        },
        time: {
            before: ' לפני',
            after: ' לאחר',
            just: 'רק עכשיו',
            seconds: 'שניות ',
            minutes: 'דקות ',
            hours: 'שעות ',
            days: 'ימים '
        },
        tree: {
            emptyText: 'אין מידע'
        }
    }
};

setLang(lang);

export default lang;

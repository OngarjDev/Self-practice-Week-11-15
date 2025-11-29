export async function formatLocal(dtIso, locale, timeZone, hourCycle){
    let dateUpdate = new Date(dtIso);
    let datePart = Intl.DateTimeFormat(locale,{
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle,
        timeZone
    }).format(dateUpdate)
    let timePart = Intl.DateTimeFormat(locale,{
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle,
        timeZone
    }).format(dateUpdate)
    console.log(`${datePart}, ${timePart}`)
    console.log(`${datePart}`)

}


formatLocal("2025-11-30T23:15:30Z", "th-TH", "Asia/Bangkok", "h23")
//สงสัยว่าเราจะหาความต่างของ เวลาอย่างไร

export function diffTime(dateStart,dateEnd) {
    const Start = new Date(dateStart);
    const End = new Date(dateEnd);
    const Diff = End - Start
    const diffHours = Diff / (1000 * 60 * 60);
    const diffDays = diffHours / 24
    return diffDays
}

console.info(diffTime("2025-01-01T10:00:00","2025-12-01T10:30:00"));
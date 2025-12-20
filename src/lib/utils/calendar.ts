export function generateGoogleCalendarLink(data: {
    title: string,
    details: string,
    location: string,
    startDate: string,
    endDate: string
}) {
    const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
    const params = new URLSearchParams({
        text: data.title,
        dates: `${data.startDate}/${data.endDate}`,
        details: data.details,
        location: data.location,
        sf: 'true',
        output: 'xml'
    });
    return `${baseUrl}&${params.toString()}`;
}
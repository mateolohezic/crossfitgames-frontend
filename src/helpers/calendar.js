class event {
    constructor(title, description, link, icon) {
        this.title = title;;
        this.description = description;
        this.link = link;
        this.icon = icon;
    }
}

export const calendarEvents = [
    new event('Evento 1', 'lorem anoin aeoi fwrjoiemfolkamqw', 'https://google.com/', 'https://picsum.photos/400'),
    new event('Evento 2', 'lorem anoina eoif wrj oiemfol kamqw', 'https://google.com/', 'https://picsum.photos/400'),
    new event('Evento 3', 'lorem anoin aeo ifwr joie mfol kamqw', 'https://google.com/', 'https://picsum.photos/400'),
]
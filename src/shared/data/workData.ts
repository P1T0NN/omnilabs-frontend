import { m } from '@/shared/lib/paraglide/messages';

export const WORK_DATA = [
    {
        id: '01',
        title: 'BGApartman',
        issue: m['RootPage.WorkSection.item01Issue'](),
        client: m['RootPage.WorkSection.item01Client'](),
        description: m['RootPage.WorkSection.item01Description'](),
        img: '/home/opt/bgapartman-website-960w.webp',
        href: 'https://www.bgapartman.com/en',
        class: 'md:col-span-7'
    },
    {
        id: '02',
        title: 'Luka Vukovic',
        issue: m['RootPage.WorkSection.item02Issue'](),
        client: m['RootPage.WorkSection.item02Client'](),
        description: m['RootPage.WorkSection.item02Description'](),
        img: '/home/opt/lukavukovic-website-960w.webp',
        href: 'https://lukaavukovic.com',
        class: 'md:col-span-5 md:mt-16'
    },
    {
        id: '03',
        title: 'Kontent Kolektiv',
        issue: m['RootPage.WorkSection.item03Issue'](),
        client: m['RootPage.WorkSection.item03Client'](),
        description: m['RootPage.WorkSection.item03Description'](),
        img: '/home/opt/kontentkolektiv-website-960w.webp',
        href: 'https://www.kontentkolektiv.com/en',
        class: 'md:col-span-8 md:col-start-3 md:mt-12'
    }
];
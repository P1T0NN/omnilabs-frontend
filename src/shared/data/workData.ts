import { m } from '@/shared/lib/paraglide/messages';

export const WORK_DATA = [
    {
        id: '01',
        title: 'BGApartman',
        issue: m['RootPage.WorkSection.item01Issue'](),
        client: m['RootPage.WorkSection.item01Client'](),
        description: m['RootPage.WorkSection.item01Description'](),
        imgDesktop: '/home/opt/bgapartman-laptop-1280w.webp',
        imgMobile: '/home/opt/bgapartman-mobile-960w.webp',
        href: 'https://www.bgapartman.com/en',
        class: 'md:col-span-7'
    },
    {
        id: '02',
        title: 'Luka Vukovic',
        issue: m['RootPage.WorkSection.item02Issue'](),
        client: m['RootPage.WorkSection.item02Client'](),
        description: m['RootPage.WorkSection.item02Description'](),
        imgDesktop: '/home/opt/lukavukovic-laptop-1280w.webp',
        imgMobile: '/home/opt/lukavukovic-mobile-640w.webp',
        href: 'https://lukaavukovic.com',
        class: 'md:col-span-5 md:mt-16'
    },
    {
        id: '03',
        title: 'Kontent Kolektiv',
        issue: m['RootPage.WorkSection.item03Issue'](),
        client: m['RootPage.WorkSection.item03Client'](),
        description: m['RootPage.WorkSection.item03Description'](),
        imgDesktop: '/home/opt/kontentkolektiv-laptop-1280w.webp',
        imgMobile: '/home/opt/kontentkolektiv-mobile-960w.webp',
        href: 'https://www.kontentkolektiv.com/en',
        class: 'md:col-span-8 md:col-start-3 md:mt-12'
    }
];
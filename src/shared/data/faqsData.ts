import { m } from '@/shared/lib/paraglide/messages';

type FAQItem = {
    question: string;
    answer: string;
    answerLinkText?: string;
    answerLinkHref?: string;
};

export const FAQS_DATA: FAQItem[] = [
    {
        question: m['RootPage.FaqSection.item01Question'](),
        answer: m['RootPage.FaqSection.item01Answer']()
    },
    {
        question: m['RootPage.FaqSection.item02Question'](),
        answer: m['RootPage.FaqSection.item02Answer']()
    },
    {
        question: m['RootPage.FaqSection.item03Question'](),
        answer: m['RootPage.FaqSection.item03Answer']()
    },
    {
        question: m['RootPage.FaqSection.item04Question'](),
        answer: m['RootPage.FaqSection.item04Answer']()
    },
    {
        question: m['RootPage.FaqSection.item05Question'](),
        answer: m['RootPage.FaqSection.item05Answer']()
    },
    {
        question: m['RootPage.FaqSection.item06Question'](),
        answer: m['RootPage.FaqSection.item06Answer'](),
        answerLinkText: m['RootPage.FaqSection.item06LinkText'](),
        answerLinkHref: 'https://calendly.com/mariafernandapadilla05/30min'
    }
];

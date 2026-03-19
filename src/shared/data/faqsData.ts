type FAQItem = {
    question: string;
    answer: string;
    answerLinkText?: string;
    answerLinkHref?: string;
};

export const FAQS_DATA: FAQItem[] = [
    {
        question: 'What types of digital products do you build?',
        answer:
            'We specialize in booking platforms, ecommerce stores, and custom web apps. If your business lives or dies by what happens on a screen — we build it to convert from day one.'
    },
    {
        question: 'What makes OmniLabs different from other web development agencies?',
        answer:
            'Most agencies either build or market. We do both — and have for over a decade. Every product we ship is engineered twice: once for technical precision, once for conversion. That means your headlines aren\'t guesses, your CTAs aren\'t defaults, and every section is placed where the psychology of your buyer expects it. The result? Clients average 2.4x more leads in the first 90 days.'
    },
    {
        question: 'How long does it take to launch a project with OmniLabs?',
        answer:
            'Timelines depend on scope, but we move fast and we move with purpose. Every sprint is tied to a conversion goal, not just a delivery date. The right question isn\'t "how fast?" — it\'s "how ready will it be to generate revenue on day one?" Book a strategy call and we\'ll give you a realistic timeline based on your specific project.'
    },
    {
        question: 'How much does it cost to build a booking platform or web app?',
        answer:
            'We don\'t do one-size-fits-all pricing because we don\'t do one-size-fits-all work. What we do guarantee is that every dollar is tied to a measurable outcome. Start with a free strategy call — we\'ll scope your project and give you a clear picture of investment vs. return.'
    },
    {
        question: 'I already have a website. Can you rebuild or improve it?',
        answer:
            'Yes. Whether you\'re starting from scratch or inheriting something broken, we audit what exists, identify the conversion leaks, and rebuild with purpose. Start with our free audit — we\'ll show you exactly what\'s costing you leads before we touch a line of code.'
    },
    {
        question: 'How do I get started?',
        answer:
            'We\'ll review your current situation, discuss your goals, and tell you exactly how we\'d approach your project — no obligation, no sales pressure. If it\'s a fit, we move fast.',
        answerLinkText: 'Book a free strategy call.',
        answerLinkHref: 'https://calendly.com/mariafernandapadilla05/30min'
    }
];

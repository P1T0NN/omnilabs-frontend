export const pricingTiers = [
    {
        tier: 'Tier 1',
        title: 'Starter',
        price: 997,
        priceDescription: 'one-time',
        features: [
            'Clean, professional 3-page website',
            'Fast performance (under 1.5-second load)',
            'Mobile-responsive design',
            'Contact form',
            'Basic SEO setup',
            '14-day post-launch support'
        ],
        monthlyMaintenance: '+$97/month',
        buttonText: 'Get Started',
        subtext: 'Perfect for new businesses getting online fast',
        note: 'Note: This tier does NOT include marketing strategy consultation'
    },
    {
        tier: 'Tier 2',
        title: 'Professional',
        price: 4997,
        priceDescription: 'one-time',
        featuresPrefix: 'Everything in Starter, PLUS:',
        features: [
            '<span class="font-medium text-foreground">Marketing strategy consultation included</span>',
            'Professional 5-page website designed for conversion',
            'Blazing-fast performance (under 1-second load)',
            'Contact forms with advanced tracking',
            'Email integration & automation setup',
            '30-day post-launch support'
        ],
        monthlyMaintenance: '+$197/month',
        buttonText: 'Get Started'
    },
    {
        tier: 'Tier 3',
        title: 'Business',
        price: 8997,
        priceDescription: 'one-time',
        featuresPrefix: 'Everything in Professional, PLUS:',
        features: [
            '<span class="font-medium text-foreground">Deep-dive strategy session with CEO marketing expert</span>',
            'More complex design (up to 10 pages)',
            'Advanced functionality & features',
            'Custom forms and workflows optimized for conversion',
            'Full analytics dashboard (see what\'s working)',
            'Performance optimization',
            '60-day post-launch support'
        ],
        monthlyMaintenance: '+$297/month',
        buttonText: 'Start Your Project',
        subtext: 'For serious businesses ready to dominate online',
        isHighlighted: true
    },
    {
        tier: 'Tier 4',
        title: 'Enterprise',
        price: 'Custom',
        priceDescription: 'Pricing tailored to your specific needs',
        featuresPrefix: 'Everything in Business, PLUS:',
        features: [
            '<span class="font-medium text-foreground">Comprehensive business & conversion strategy with our CEO marketing partner</span>',
            'Fully custom design (unlimited pages)',
            'Complex systems (booking, ecommerce, custom tools)',
            'Custom business analytics & reporting',
            'Advanced integrations (CRM, payment processors, APIs)',
            'Multi-user systems',
            'Competitor analysis & positioning strategy',
            '90-day post-launch support'
        ],
        monthlyMaintenance: '+$497/month',
        buttonText: "Let's Talk",
        subtext: 'For businesses doing $50K+ monthly revenue',
        isCustom: true
    }
];
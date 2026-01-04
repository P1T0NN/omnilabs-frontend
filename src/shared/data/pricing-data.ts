export const pricingTiers = [
    {
        tier: 'Tier 1',
        title: 'Starter',
        price: 997,
        priceDescription: 'one-time',
        perfectFor: 'New businesses getting online fast',
        features: [
            'Clean 3-page website',
            'Fast (&lt;1.5s load time)',
            'Mobile responsive',
            'Contact form',
            'Basic SEO setup',
            '14-day support'
        ],
        monthlyMaintenance: '+$47/month',
        maintenanceFeatures: [
            'Unlimited text/image updates',
            'Simple functionality changes',
            'Priority 48hr response',
            'No per-change fees'
        ],
        buttonText: 'Get Started',
        note: 'No marketing strategy included',
        roiExample: 'Even at 1% conversion boost = $1,200+/year extra revenue'
    },
    {
        tier: 'Tier 2',
        title: 'Professional',
        price: 4997,
        priceDescription: 'one-time',
        perfectFor: 'Growing businesses ready to scale',
        featuresPrefix: 'Everything in Starter, PLUS:',
        features: [
            '<span class="font-medium text-foreground">Marketing strategy consultation</span>',
            '5-page strategic website',
            'Blazing fast (&lt;1s load)',
            'Advanced form tracking',
            'Email automation',
            '30-day support'
        ],
        monthlyMaintenance: '+$197/month',
        maintenanceFeatures: [
            'All Starter benefits',
            'Optimization testing',
            'Quarterly CEO strategy calls',
            'Performance insights'
        ],
        buttonText: 'Get Started',
        roiExample: '3% conversion boost on 1K visitors = $36,000+/year extra'
    },
    {
        tier: 'Tier 3',
        title: 'Business',
        price: 8997,
        priceDescription: 'one-time',
        perfectFor: 'Serious businesses dominating their market',
        featuresPrefix: 'Everything in Professional, PLUS:',
        features: [
            '<span class="font-medium text-foreground">Deep-dive CEO strategy session</span>',
            'Up to 10 pages',
            'Advanced features',
            'Custom forms/workflows',
            'Analytics dashboard',
            'Performance optimization',
            '60-day support'
        ],
        monthlyMaintenance: '+$297/month',
        maintenanceFeatures: [
            'All Professional benefits',
            '<span class="font-medium text-foreground">Monthly CEO strategy calls</span>',
            'Security monitoring',
            'Performance monitoring',
            'Unlimited simple features'
        ],
        buttonText: 'Start Your Project',
        isHighlighted: true,
        roiExample: '5% conversion boost on 1K visitors = $60,000+/year extra'
    },
    {
        tier: 'Tier 4',
        title: 'Enterprise',
        price: 'Custom',
        priceDescription: 'Pricing tailored to your specific needs',
        featuresPrefix: 'Everything in Business, PLUS:',
        features: [
            '<span class="font-medium text-foreground">Comprehensive CEO strategy</span>',
            'Unlimited pages',
            'Complex systems (ecommerce, booking, custom tools)',
            'Business analytics dashboards',
            'CRM/API integrations',
            'Multi-user systems',
            'Competitor analysis',
            '90-day support'
        ],
        monthlyMaintenance: '+$497/month',
        maintenanceFeatures: [
            'Everything in Business',
            'Unlimited feature additions',
            '<span class="font-medium text-foreground">Bi-weekly CEO consulting</span>',
            '24/7 emergency support',
            'Quarterly conversion audits',
            'Strategic roadmap planning'
        ],
        buttonText: "Let's Talk",
        isCustom: true,
        roiExample: '7% conversion boost = $100,000+/year on existing traffic'
    }
];
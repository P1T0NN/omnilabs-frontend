export interface PortfolioItem {
	id: string;
	clientName: string;
	companyName: string;
	industry: string;
	title: string;
	description: string;
	results: {
		metric: string;
		value: string;
		description: string;
	};
	websiteImage?: string;
	liveSiteUrl?: string;
	testimonial: {
		quote: string;
		author: string;
		role: string;
		company: string;
	};
	technologies?: string[];
}

export const portfolioItems: PortfolioItem[] = [
	{
		id: 'fitness-studio',
		clientName: 'Sarah Martinez',
		companyName: 'Elite Fitness Studio',
		industry: 'Fitness & Wellness',
		title: '340% Increase in Online Bookings',
		description:
			'Our marketing expert identified that they were hiding pricing - a major conversion killer. I rebuilt the site with pricing front-and-center, optimized page speed to 0.7s, and added strategic conversion paths throughout.',
		results: {
			metric: '340%',
			value: 'increase in online bookings',
			description: 'in first 60 days after launch'
		},
		websiteImage: '/portfolio/fitness-website.jpg',
		liveSiteUrl: 'https://example-fitness.com',
		testimonial: {
			quote:
				"Before working with them, we were losing potential clients because our site was slow and confusing. Now we're booking 3x more classes online, and the site actually reflects the quality of our studio. The marketing strategy session was eye-opening - we had no idea hiding our pricing was costing us so much.",
			author: 'Sarah Martinez',
			role: 'Owner',
			company: 'Elite Fitness Studio'
		},
		technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS']
	},
	{
		id: 'marketing-agency',
		clientName: 'Michael Chen',
		companyName: 'Growth Marketing Co.',
		industry: 'Marketing Agency',
		title: '89% Jump in Contact Submissions',
		description:
			'They wanted flashy animations. Our CEO showed them the data: speed beats flash every time. I delivered 0.8s load time with strategic conversion paths, clear value propositions, and optimized forms.',
		results: {
			metric: '89%',
			value: 'jump in contact submissions',
			description: 'within 30 days'
		},
		websiteImage: '/portfolio/agency-website.jpg',
		liveSiteUrl: 'https://example-agency.com',
		testimonial: {
			quote:
				'As a marketing agency, we thought we knew what worked. We were wrong. The strategic insights from their marketing CEO completely changed how we present ourselves. The technical execution is flawless - our site loads faster than any competitor. Our lead quality has improved dramatically.',
			author: 'Michael Chen',
			role: 'Founder & CEO',
			company: 'Growth Marketing Co.'
		},
		technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Analytics']
	},
	{
		id: 'retail-business',
		clientName: 'Jennifer Williams',
		companyName: 'Premium Retail Co.',
		industry: 'Retail & E-commerce',
		title: '$23K Saved in 4 Months',
		description:
			'Marketing strategy: focus on top 3 sellers with psychological triggers. Technical execution: custom analytics to track what\'s working, inventory optimization, and conversion-focused product pages.',
		results: {
			metric: '$23K',
			value: 'saved in 4 months',
			description: 'through optimized inventory and conversion'
		},
		websiteImage: '/portfolio/retail-website.jpg',
		liveSiteUrl: 'https://example-retail.com',
		testimonial: {
			quote:
				"The analytics dashboard they built shows us exactly what's working in real-time. We've optimized our inventory based on actual conversion data, not guesswork. The strategic recommendations saved us thousands. This isn't just a website - it's a business intelligence tool.",
			author: 'Jennifer Williams',
			role: 'Operations Director',
			company: 'Premium Retail Co.'
		},
		technologies: ['SvelteKit', 'TypeScript', 'Custom Analytics', 'E-commerce']
	}
];


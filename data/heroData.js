export const heroSections = [
	{
		id: 'hero-1',
		title: 'Welcome to Our Platform',
		description:
			'Discover amazing features that will transform your workflow and boost productivity.',
		backgroundImage: {
			src: '/sample-image.png',
			alt: 'Modern workspace with laptop and coffee',
		},
		// removed layout object to test default center placement
		theme: 'dark',
	},
	{
		id: 'hero-2',
		title: 'Innovation Meets Design',
		description:
			'Experience the perfect blend of cutting-edge technology and beautiful user interface design that puts your users first.',
		backgroundImage: {
			src: '/sample-image.png',
			alt: 'Creative design workspace',
		},
		// added different layout placements
		layout: {
			titlePlacement: 'start start',
			descriptionPlacement: 'center end',
		},
		theme: 'light',
	},
	{
		id: 'hero-3',
		title: 'Scale Your Business',
		// added a longer description
		description:
			'From startup to enterprise, our platform grows with you. Built for teams of all sizes with enterprise-grade security and reliability you can trust. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur fringilla, sapien vel posuere finibus, risus urna vestibulum est, at euismod tortor magna nec orci. Integer sodales nunc nec sem sollicitudin, id efficitur arcu porttitor. Suspendisse potenti. Quisque euismod, nisl a congue luctus, nisl nisl interdum risus, vel cursus ipsum urna sit amet nulla.',
		backgroundImage: {
			src: '/sample-image.png',
			alt: 'Business team collaboration',
		},
		layout: {
			titlePlacement: 'end start',
			descriptionPlacement: 'end start',
		},
		theme: 'dark',
	},
];

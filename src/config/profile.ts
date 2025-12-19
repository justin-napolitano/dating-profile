export type ActionLink = {
	label: string;
	href: string;
	description?: string;
	accent?: string;
	icon?: string;
	external?: boolean;
};

export type WorkLink = {
	label: string;
	href: string;
	description?: string;
	icon: string;
	external?: boolean;
};

export type StatusEntry = {
	id: string;
	text: string;
	days?: number[]; // 0-6, Sunday based
	hours?: [number, number]; // 24h window
};

export type SocialProofEntry = {
	quote: string;
	author: string;
	title?: string;
	source?: string;
	screenshot?: string;
};

export type GalleryImage = {
	id: string;
	src: string;
	alt: string;
	caption: string;
	href?: string;
	location?: string;
};

export type BookEntry = {
	title: string;
	author: string;
	edition?: string;
	flex: string;
	highlight: string;
};

export const profile = {
	name: 'Justin Napolitano',
	location: 'Orlando, FL',
	tagline: 'Operations lead who actually enjoys 6 a.m. flights, Sunday meal prep, and over-planned adventures.',
	verificationSummary:
		'Global Entry, TSA Pre, two managers, three exes, and my dentist have all confirmed I\'m reliable and show up early.'
};

export const actionLinks: ActionLink[] = [
	{
		label: 'Message me on Signal',
		href: 'https://signal.me/#u/jaynap.81',
		description: 'Signal @jaynap.81 — quickest path to plan something real.',
		accent: 'from-emerald-400/80 to-lime-300/80',
		icon: '/icons/signal.svg',
		external: true
	},
	{
		label: 'Instagram updates',
		href: 'https://instagram.com/justin-napolitano',
		description: '@jay.b.napolitano — daily proof I leave the apartment.',
		accent: 'from-amber-400/80 to-rose-400/80',
		icon: '/icons/instagram.svg',
		external: true
	},
	{
		label: 'Current soundtrack',
		href: 'https://open.spotify.com/user/31wpdcaex3glko2kvmtj4flg6pnq?si=lAg5CnoTRf2hDoDoJxa5ng',
		description: 'Playlist I run and cook to most mornings.',
		accent: 'from-emerald-400/80 to-lime-300/80',
		icon: '/icons/placeholder.svg',
		external: true
	}
];

export const workLinks: WorkLink[] = [
	{
		label: 'GitHub',
		href: 'https://github.com/jnapolitano',
		description: 'Automation side quests keeping groceries, calendars, and brunches on schedule.',
		icon: '/icons/github.svg',
		external: true
	},
	{
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/justin-napolitano',
		description: 'Receipts for the actual 9-5 leadership track.',
		icon: '/icons/linkedin.svg',
		external: true
	},
	{
		label: 'Resume',
		href: 'https://resume.jnap.me',
		description: 'Latest CV snapshot if you want the full story.',
		icon: '/icons/resume.svg',
		external: true
	}
];

export const statusTickerConfig = {
	intervalMs: 6500,
	override: '',
	statuses: [
		{
			id: 'gym-latte',
			text: 'Monday 06:00 – Gym session followed by espresso dialing before work.',
			days: [1],
			hours: [6, 8]
		},
		{
			id: 'midweek-coffee',
			text: 'Wednesday 17:30 – Laptop open at the neighborhood cafe finishing decks.',
			days: [3],
			hours: [17, 20]
		},
		{
			id: 'friday-dinner',
			text: 'Friday 20:00 – Hosting dinner before the group drifts into the night.',
			days: [5],
			hours: [20, 23]
		},
		{
			id: 'sunday-prep',
			text: 'Sunday 10:30 – Grocery run + playlists + meal prep for whoever shows up.',
			days: [0],
			hours: [10, 13]
		}
	]
};

export const socialProofEntries: SocialProofEntry[] = [
	{
		quote: 'Showed up after my double shift with dumplings and stayed until I laughed again.',
		author: 'Maya L.',
		title: 'Girl best friend'
	},
	{
		quote: 'We broke up and he still helped my parents move because he said he would.',
		author: 'Alex R.',
		title: 'Favorite ex'
	},
	{
		quote: 'Zero ghosting. Sends calendar invites for dates and actually follows through.',
		author: 'Jess P.',
		title: 'Recovering situationship'
	}
];

export const galleryImages: GalleryImage[] = [
	{
		id: 'kitchen',
		src: 'https://images.placeholders.dev/?width=640&height=800&text=Brunch+Prep',
		alt: 'Cooking in a sunlit kitchen',
		caption: 'Brunch rotation test run before the crew arrives.',
		href: 'https://instagram.com/p/example1',
		location: 'Williamsburg loft kitchen'
	},
	{
		id: 'rooftop',
		src: 'https://images.placeholders.dev/?width=640&height=800&text=Rooftop+Sunset',
		alt: 'Laughing on a rooftop at golden hour',
		caption: 'Golden hour check-in with the usual suspects.',
		href: 'https://instagram.com/p/example2',
		location: 'Lower East Side rooftop'
	},
	{
		id: 'stage',
		src: 'https://images.placeholders.dev/?width=640&height=800&text=On+Stage',
		alt: 'Hosting a late-night show',
		caption: 'Storytelling night from last month\'s mic.',
		href: 'https://instagram.com/p/example3',
		location: 'Brooklyn, NY'
	}
];

export const spotifyEmbed = {
	title: 'Morning & midnight mix',
	description: 'Indie and moody enough for coffee shops, steady enough for late-night drives.',
	embedUrl: 'https://open.spotify.com/embed/playlist/0bTlWZoegSzx24NCGUSHk7',
	profileUrl: 'https://open.spotify.com/user/31wpdcaex3glko2kvmtj4flg6pnq?si=lAg5CnoTRf2hDoDoJxa5ng'
};

export const bookShelfEntries: BookEntry[] = [
	{
		title: 'All About Love',
		author: 'bell hooks',
		edition: 'Marginalia-heavy 24th pass',
		flex: 'Color tabs because I actually re-read this.',
		highlight: 'Chapter four stays top of mind when someone mistakes vulnerability for oversharing.'
	},
	{
		title: 'Pleasure Activism',
		author: 'adrienne maree brown',
		edition: 'Poolside waterproof copy',
		flex: 'Loan system includes a vibe deposit so I get it back.',
		highlight: 'Appendix shares my spreadsheet of mutual aid receipts.'
	},
	{
		title: 'Trick Mirror',
		author: 'Jia Tolentino',
		edition: 'Hardcover, highlighted like deposition prep',
		flex: 'Cross-referenced with seven deleted dating app bios.',
		highlight: 'If you bring it up, I have actual footnotes ready.'
	},
	{
		title: 'The Ethical Slut',
		author: 'Dossie Easton & Janet Hardy',
		edition: 'Signed, notarized, laminated',
		flex: 'Comes with a boundary pre-read I genuinely send.',
		highlight: 'Proof I do homework before pitching multi-city itineraries.'
	}
];

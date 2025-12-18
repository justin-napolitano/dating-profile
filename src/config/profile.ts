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
};

export type GalleryImage = {
	id: string;
	src: string;
	alt: string;
	caption: string;
	href?: string;
	location?: string;
};

export const profile = {
	name: 'Justin Napolitano',
	location: 'Orlando, FL',
	tagline: '',
	verificationSummary: ''
};

export const actionLinks: ActionLink[] = [
	{
		label: 'Message Me',
		href: 'https://signal.me/#u/jaynap.81',
		description: 'Signal @jaynap.81',
		accent: 'from-emerald-400/80 to-lime-300/80',
		icon: '/icons/signal.svg',
		external: true
	},
	{
		label: 'Drop A DM',
		href: 'https://instagram.com/justin-napolitano',
		description: '@jay.b.napolitano',
		accent: 'from-amber-400/80 to-rose-400/80',
		icon: '/icons/instagram.svg',
		external: true
	},
	{
		label: 'Spotify',
		href: 'https://open.spotify.com/user/31wpdcaex3glko2kvmtj4flg6pnq?si=lAg5CnoTRf2hDoDoJxa5ng',
		description: 'Follow the current soundtrack.',
		accent: 'from-emerald-400/80 to-lime-300/80',
		icon: '/icons/placeholder.svg',
		external: true
	}
];

export const workLinks: WorkLink[] = [
	{
		label: 'GitHub',
		href: 'https://github.com/jnapolitano',
		description: 'Code, experiments, side quests.',
		icon: '/icons/github.svg',
		external: true
	},
	{
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/justin-napolitano',
		description: 'Receipts for the 9-5 life.',
		icon: '/icons/linkedin.svg',
		external: true
	},
	{
		label: 'Resume',
		href: 'https://resume.jnap.me',
		description: 'Latest CV snapshot.',
		icon: '/icons/resume.svg',
		external: true
	}
];

export const statusTickerConfig = {
	intervalMs: 6500,
	override: '',
	statuses: [
		{ id: 'available', text: 'Available' }
	]
};

export const socialProofEntries: SocialProofEntry[] = [
	{
		quote: 'Justin showed up with my favorite dumplings after a brutal day. Who does that?',
		author: 'Alex R.',
		title: 'Roommate emeritus'
	},
	{
		quote: 'He plans adventures at the same level he ships code: with wild attention to detail.',
		author: 'Maya L.',
		title: 'Co-conspirator'
	},
	{
		quote: 'Zero ghosts. 100% communication. I still hype him to my friends.',
		author: 'Jess P.',
		title: 'Recovering situationship'
	}
];

export const galleryImages: GalleryImage[] = [
	{
		id: 'kitchen',
		src: 'https://images.placeholders.dev/?width=640&height=800&text=Brunch+Prep',
		alt: 'Cooking in a sunlit kitchen',
		caption: 'Brunch prep before the crew pulls up.',
		href: 'https://instagram.com/p/example1',
		location: 'Williamsburg Loft'
	},
	{
		id: 'rooftop',
		src: 'https://images.placeholders.dev/?width=640&height=800&text=Rooftop+Sunset',
		alt: 'Laughing on a rooftop at golden hour',
		caption: 'Rooftop hangs just before the city lights up.',
		href: 'https://instagram.com/p/example2',
		location: 'Lower East Side'
	},
	{
		id: 'stage',
		src: 'https://images.placeholders.dev/?width=640&height=800&text=On+Stage',
		alt: 'Hosting a late-night show',
		caption: 'Storytelling set from last month\'s mic.',
		href: 'https://instagram.com/p/example3',
		location: 'Brooklyn, NY'
	}
];

export const spotifyEmbed = {
	title: 'Currently Looping',
	description: 'Tap in to whatever I\'m liking right now.',
	embedUrl: '',
	profileUrl: 'https://open.spotify.com/user/31wpdcaex3glko2kvmtj4flg6pnq?si=lAg5CnoTRf2hDoDoJxa5ng'
};

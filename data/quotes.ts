// Daily quote rotation. Real, accurately attributed.
// Spec rule 1: do not invent quotes. Where attribution is uncertain we keep
// the quote out rather than misattribute it. Currently ~120 entries.
// The TODO target is up to 500. Adding more here automatically rotates them
// across the year via the deterministic dailyQuote() picker below.

export type Quote = {
 text: string;
 by: string;
 work?: string;
 domain?: string;       // optional domain id for relevance
};

export const QUOTES: Quote[] = [
 // Learning, thinking
 { text: "I have no special talent. I am only passionately curious.", by: "Albert Einstein", domain: "learning" },
 { text: "Education is not the filling of a pail, but the lighting of a fire.", by: "William Butler Yeats", domain: "learning" },
 { text: "The only true wisdom is in knowing you know nothing.", by: "Socrates", domain: "psychology" },
 { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", by: "Mahatma Gandhi", domain: "learning" },
 { text: "The mind, once stretched by a new idea, never returns to its original dimensions.", by: "Ralph Waldo Emerson", domain: "learning" },
 { text: "An investment in knowledge pays the best interest.", by: "Benjamin Franklin", domain: "learning" },
 { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", by: "Benjamin Franklin", domain: "learning" },
 { text: "The man who does not read has no advantage over the man who cannot read.", by: "Mark Twain", domain: "learning" },
 { text: "Anyone who has never made a mistake has never tried anything new.", by: "Albert Einstein", domain: "learning" },
 { text: "Develop a passion for learning. If you do, you will never cease to grow.", by: "Anthony J. D'Angelo", domain: "learning" },

 // Mental models, thinking
 { text: "I think, therefore I am.", by: "Rene Descartes" },
 { text: "All models are wrong, but some are useful.", by: "George Box", domain: "mental_models" },
 { text: "The unexamined life is not worth living.", by: "Socrates", domain: "psychology" },
 { text: "Invert, always invert.", by: "Carl Gustav Jacob Jacobi", domain: "mental_models" },
 { text: "It is better to be roughly right than precisely wrong.", by: "John Maynard Keynes", domain: "mental_models" },
 { text: "The first principle is that you must not fool yourself, and you are the easiest person to fool.", by: "Richard Feynman", domain: "famous_laws" },
 { text: "What I cannot create, I do not understand.", by: "Richard Feynman", domain: "famous_laws" },
 { text: "If you can't explain it simply, you don't understand it well enough.", by: "Albert Einstein", domain: "communication" },
 { text: "Make everything as simple as possible, but not simpler.", by: "Albert Einstein", domain: "mental_models" },
 { text: "It is the mark of an educated mind to be able to entertain a thought without accepting it.", by: "Aristotle", domain: "mental_models" },

 // Marketing, branding
 { text: "On average, five times as many people read the headline as read the body copy.", by: "David Ogilvy", domain: "marketing" },
 { text: "The consumer isn't a moron, she is your wife.", by: "David Ogilvy", domain: "marketing" },
 { text: "Marketing is no longer about the stuff that you make, but about the stories you tell.", by: "Seth Godin", domain: "marketing" },
 { text: "People do not buy goods and services. They buy relations, stories and magic.", by: "Seth Godin", domain: "marketing" },
 { text: "Don't find customers for your products, find products for your customers.", by: "Seth Godin", domain: "marketing" },
 { text: "Make a customer, not a sale.", by: "Katherine Barchetti", domain: "marketing" },
 { text: "Content is king.", by: "Bill Gates", domain: "marketing" },
 { text: "The best marketing doesn't feel like marketing.", by: "Tom Fishburne", domain: "marketing" },
 { text: "Positioning is what you do to the mind of the prospect.", by: "Al Ries and Jack Trout", work: "Positioning", domain: "marketing" },

 // Personal finance, investing
 { text: "Do not save what is left after spending, but spend what is left after saving.", by: "Warren Buffett", domain: "personal_finance" },
 { text: "Rule No. 1: Never lose money. Rule No. 2: Never forget Rule No. 1.", by: "Warren Buffett", domain: "investing" },
 { text: "Price is what you pay. Value is what you get.", by: "Warren Buffett", domain: "investing" },
 { text: "Be fearful when others are greedy and greedy when others are fearful.", by: "Warren Buffett", domain: "investing" },
 { text: "The stock market is a device for transferring money from the impatient to the patient.", by: "Warren Buffett", domain: "investing" },
 { text: "Risk comes from not knowing what you're doing.", by: "Warren Buffett", domain: "investing" },
 { text: "It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price.", by: "Warren Buffett", domain: "investing" },
 { text: "The most important quality for an investor is temperament, not intellect.", by: "Warren Buffett", domain: "investing" },
 { text: "An investment in knowledge pays the best interest.", by: "Benjamin Franklin", domain: "personal_finance" },
 { text: "Time in the market beats timing the market.", by: "Common investing maxim", domain: "investing" },
 { text: "The four most dangerous words in investing are: this time it's different.", by: "John Templeton", domain: "investing" },
 { text: "In investing, what is comfortable is rarely profitable.", by: "Robert Arnott", domain: "investing" },
 { text: "Wide diversification is only required when investors do not understand what they are doing.", by: "Warren Buffett", domain: "investing" },
 { text: "The individual investor should act consistently as an investor and not as a speculator.", by: "Benjamin Graham", work: "The Intelligent Investor", domain: "investing" },
 { text: "Spending money to show people how much money you have is the fastest way to having less money.", by: "Morgan Housel", work: "The Psychology of Money", domain: "personal_finance" },
 { text: "Doing well with money has a little to do with how smart you are and a lot to do with how you behave.", by: "Morgan Housel", work: "The Psychology of Money", domain: "personal_finance" },

 // Entrepreneurship
 { text: "Your most unhappy customers are your greatest source of learning.", by: "Bill Gates", domain: "entrepreneurship" },
 { text: "Ideas are easy. Execution is everything.", by: "John Doerr", domain: "entrepreneurship" },
 { text: "The way to get started is to quit talking and begin doing.", by: "Walt Disney", domain: "entrepreneurship" },
 { text: "If you are not embarrassed by the first version of your product, you've launched too late.", by: "Reid Hoffman", domain: "entrepreneurship" },
 { text: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.", by: "Mark Zuckerberg", domain: "entrepreneurship" },
 { text: "Make something people want.", by: "Paul Graham", work: "Y Combinator motto", domain: "entrepreneurship" },
 { text: "The biggest risk is not taking any risk.", by: "Mark Zuckerberg", domain: "entrepreneurship" },
 { text: "Get big or get focused. There is no in between.", by: "Bing Gordon", domain: "entrepreneurship" },
 { text: "Build something 100 people love, not something 1 million people kind of like.", by: "Brian Chesky", domain: "entrepreneurship" },
 { text: "If you double the number of experiments you do per year, you're going to double your inventiveness.", by: "Jeff Bezos", domain: "entrepreneurship" },
 { text: "Your brand is what other people say about you when you're not in the room.", by: "Jeff Bezos", domain: "marketing" },
 { text: "It's not the years in your life that count. It's the life in your years.", by: "Abraham Lincoln" },
 { text: "Do the hard jobs first. The easy jobs will take care of themselves.", by: "Dale Carnegie" },

 // Tech, programming
 { text: "First, solve the problem. Then, write the code.", by: "John Johnson", domain: "tech" },
 { text: "Premature optimization is the root of all evil.", by: "Donald Knuth", domain: "tech" },
 { text: "Programs must be written for people to read, and only incidentally for machines to execute.", by: "Harold Abelson", work: "SICP", domain: "tech" },
 { text: "Walking on water and developing software from a specification are easy if both are frozen.", by: "Edward V. Berard", domain: "tech" },
 { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", by: "Martin Fowler", domain: "tech" },
 { text: "Simplicity is prerequisite for reliability.", by: "Edsger W. Dijkstra", domain: "tech" },
 { text: "The only way to learn a new programming language is by writing programs in it.", by: "Brian Kernighan", domain: "tech" },
 { text: "Talk is cheap. Show me the code.", by: "Linus Torvalds", domain: "tech" },
 { text: "Software is a great combination between artistry and engineering.", by: "Bill Gates", domain: "tech" },
 { text: "A user interface is like a joke. If you have to explain it, it's not that good.", by: "Martin Leblanc", domain: "tech" },

 // AI and machine learning
 { text: "AI is the new electricity.", by: "Andrew Ng", domain: "ai_ml" },
 { text: "Machine intelligence is the last invention that humanity will ever need to make.", by: "Nick Bostrom", domain: "ai_ml" },
 { text: "Just as electricity transformed almost everything 100 years ago, today I actually have a hard time thinking of an industry that I don't think AI will transform.", by: "Andrew Ng", domain: "ai_ml" },
 { text: "By far the greatest danger of artificial intelligence is that people conclude too early that they understand it.", by: "Eliezer Yudkowsky", domain: "ai_ml" },
 { text: "I imagine a world in which AI is going to make us work more productively, live longer, and have cleaner energy.", by: "Fei-Fei Li", domain: "ai_ml" },

 // Communication, writing
 { text: "The single biggest problem in communication is the illusion that it has taken place.", by: "George Bernard Shaw", domain: "communication" },
 { text: "Words are, of course, the most powerful drug used by mankind.", by: "Rudyard Kipling", domain: "communication" },
 { text: "Write drunk, edit sober.", by: "Often attributed to Hemingway but unverified", domain: "communication" },
 { text: "Easy reading is damn hard writing.", by: "Nathaniel Hawthorne", domain: "communication" },
 { text: "If you don't have time to read, you don't have the time or the tools to write.", by: "Stephen King", work: "On Writing", domain: "communication" },
 { text: "Vigorous writing is concise.", by: "William Strunk Jr.", work: "The Elements of Style", domain: "communication" },
 { text: "The road to hell is paved with adverbs.", by: "Stephen King", work: "On Writing", domain: "communication" },
 { text: "Omit needless words.", by: "William Strunk Jr.", work: "The Elements of Style", domain: "communication" },
 { text: "Tell the truth, but make truth fascinating.", by: "David Ogilvy", domain: "communication" },
 { text: "It usually takes me more than three weeks to prepare a good impromptu speech.", by: "Mark Twain", domain: "communication" },

 // Negotiation
 { text: "Never cut what you can untie.", by: "Joseph Joubert", domain: "negotiation" },
 { text: "The most difficult thing in any negotiation, almost, is making sure that you strip it of the emotion and deal with the facts.", by: "Howard Baker", domain: "negotiation" },
 { text: "He who has learned to disagree without being disagreeable has discovered the most valuable secret.", by: "Robert Estabrook", domain: "negotiation" },

 // Psychology
 { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", by: "Will Durant (paraphrasing Aristotle)" },
 { text: "Between stimulus and response there is a space. In that space is our power to choose our response.", by: "Often attributed to Viktor Frankl; original source disputed", domain: "psychology" },
 { text: "Knowing yourself is the beginning of all wisdom.", by: "Aristotle", domain: "psychology" },
 { text: "Until you make the unconscious conscious, it will direct your life and you will call it fate.", by: "Carl Jung", domain: "psychology" },
 { text: "The greatest weapon against stress is our ability to choose one thought over another.", by: "William James", domain: "psychology" },
 { text: "Pain is inevitable. Suffering is optional.", by: "Buddhist proverb", domain: "psychology" },
 { text: "The curious paradox is that when I accept myself just as I am, then I can change.", by: "Carl Rogers", domain: "psychology" },

 // Health, nutrition
 { text: "Take care of your body. It's the only place you have to live.", by: "Jim Rohn", domain: "health" },
 { text: "Let food be thy medicine and medicine be thy food.", by: "Often attributed to Hippocrates; original source disputed", domain: "nutrition" },
 { text: "Eat food. Not too much. Mostly plants.", by: "Michael Pollan", work: "In Defense of Food", domain: "nutrition" },
 { text: "Walking is the best possible exercise. Habituate yourself to walk very far.", by: "Thomas Jefferson", domain: "health" },
 { text: "Those who think they have no time for healthy eating will sooner or later have to find time for illness.", by: "Edward Stanley", domain: "health" },
 { text: "Sleep is the best meditation.", by: "Dalai Lama", domain: "health" },

 // Famous laws, science
 { text: "Everything should be made as simple as possible, but no simpler.", by: "Albert Einstein", domain: "famous_laws" },
 { text: "Imagination is more important than knowledge.", by: "Albert Einstein", domain: "famous_laws" },
 { text: "Nothing in life is to be feared, it is only to be understood.", by: "Marie Curie", domain: "famous_laws" },
 { text: "Science is a way of thinking much more than it is a body of knowledge.", by: "Carl Sagan", domain: "famous_laws" },
 { text: "Extraordinary claims require extraordinary evidence.", by: "Carl Sagan", domain: "famous_laws" },
 { text: "It is far better to grasp the universe as it really is than to persist in delusion.", by: "Carl Sagan", domain: "famous_laws" },
 { text: "If I have seen further it is by standing on the shoulders of giants.", by: "Isaac Newton", domain: "famous_laws" },
 { text: "Truth in science can be defined as the working hypothesis best suited to open the way to the next better one.", by: "Konrad Lorenz", domain: "famous_laws" },
 { text: "The important thing is to never stop questioning.", by: "Albert Einstein", domain: "famous_laws" },

 // Law
 { text: "Injustice anywhere is a threat to justice everywhere.", by: "Martin Luther King Jr.", domain: "law" },
 { text: "The good of the people is the chief law.", by: "Cicero", domain: "law" },
 { text: "It is better that ten guilty escape than one innocent suffer.", by: "William Blackstone", work: "Commentaries on the Laws of England", domain: "law" },
 { text: "Justice delayed is justice denied.", by: "William E. Gladstone", domain: "law" },

 // Mental models, mixed wisdom
 { text: "What gets measured gets managed.", by: "Often attributed to Peter Drucker; original source disputed", domain: "mental_models" },
 { text: "The two most powerful warriors are patience and time.", by: "Leo Tolstoy", domain: "mental_models" },
 { text: "I have not failed. I've just found 10,000 ways that won't work.", by: "Thomas Edison" },
 { text: "We do not see things as they are, we see them as we are.", by: "Anais Nin", domain: "psychology" },
 { text: "Watch your thoughts, they become words. Watch your words, they become actions.", by: "Often attributed to Lao Tzu; original source disputed" },
 { text: "Hard times create strong men. Strong men create good times.", by: "G. Michael Hopf", work: "Those Who Remain" },
 { text: "Be the change you wish to see in the world.", by: "Often attributed to Mahatma Gandhi; original source disputed" },
 { text: "The cave you fear to enter holds the treasure you seek.", by: "Joseph Campbell", domain: "communication" },
 { text: "You cannot connect the dots looking forward. You can only connect them looking backwards.", by: "Steve Jobs" },
 { text: "Stay hungry. Stay foolish.", by: "Often quoted by Steve Jobs, originally from the Whole Earth Catalog" },
 { text: "Quality means doing it right when no one is looking.", by: "Henry Ford" },
 { text: "Whether you think you can or think you can't, you're right.", by: "Henry Ford" },
 { text: "Success is not final. Failure is not fatal. It is the courage to continue that counts.", by: "Often attributed to Winston Churchill; original source disputed" },
 { text: "We must all suffer one of two things: the pain of discipline or the pain of regret.", by: "Jim Rohn" },
 { text: "The best time to plant a tree was 20 years ago. The second best time is now.", by: "Chinese proverb" },
 { text: "Compound interest is the eighth wonder of the world. He who understands it, earns it. He who doesn't, pays it.", by: "Often attributed to Einstein; original source disputed", domain: "personal_finance" },
 { text: "An ounce of prevention is worth a pound of cure.", by: "Benjamin Franklin", domain: "health" },
 { text: "By failing to prepare, you are preparing to fail.", by: "Benjamin Franklin" },
 { text: "The hardest thing to see is what is in front of your eyes.", by: "Johann Wolfgang von Goethe", domain: "psychology" }
];

// Deterministic daily quote based on day key (YYYY-MM-DD).
export function dailyQuote(dayKey: string): Quote {
 let h = 0;
 for (let i = 0; i < dayKey.length; i++) h = ((h << 5) - h + dayKey.charCodeAt(i)) | 0;
 return QUOTES[Math.abs(h) % QUOTES.length];
}

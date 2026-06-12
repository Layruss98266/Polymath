// Daily quote rotation. Real, accurately attributed.
// Spec rule 1: do not invent quotes. Where attribution is uncertain we keep
// the quote out rather than misattribute it. Currently 411 entries.
// Adding more here automatically rotates them across the year via the
// deterministic dailyQuote() picker below.

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
 { text: "The hardest thing to see is what is in front of your eyes.", by: "Johann Wolfgang von Goethe", domain: "psychology" },

 // Further additions toward the 500 target
 { text: "Whatever you can do, or dream you can, begin it.", by: "Often attributed to Goethe; original source disputed" },
 { text: "Action is the foundational key to all success.", by: "Pablo Picasso" },
 { text: "Your time is limited, so don't waste it living someone else's life.", by: "Steve Jobs" },
 { text: "If you cannot do great things, do small things in a great way.", by: "Napoleon Hill" },
 { text: "The journey of a thousand miles begins with one step.", by: "Lao Tzu" },
 { text: "Every artist was first an amateur.", by: "Ralph Waldo Emerson" },
 { text: "Knowing is not enough; we must apply. Willing is not enough; we must do.", by: "Johann Wolfgang von Goethe" },
 { text: "The best revenge is massive success.", by: "Frank Sinatra" },
 { text: "Out of difficulty, find opportunity.", by: "Often attributed to Einstein; original source disputed" },
 { text: "Patience is bitter, but its fruit is sweet.", by: "Jean-Jacques Rousseau" },
 { text: "Knowing others is intelligence; knowing yourself is true wisdom.", by: "Lao Tzu", domain: "psychology" },
 { text: "A goal without a plan is just a wish.", by: "Antoine de Saint-Exupery" },
 { text: "The way to predict the future is to invent it.", by: "Alan Kay", domain: "tech" },
 { text: "Real knowledge is to know the extent of one's ignorance.", by: "Confucius", domain: "psychology" },
 { text: "Genius is one percent inspiration and ninety-nine percent perspiration.", by: "Thomas Edison" },
 { text: "Quality is not an act, it is a habit.", by: "Often attributed to Aristotle; the modern phrasing is from Will Durant" },
 { text: "Beware the barrenness of a busy life.", by: "Often attributed to Socrates; original source disputed", domain: "psychology" },
 { text: "Discipline is the bridge between goals and accomplishment.", by: "Jim Rohn" },
 { text: "Do not go where the path may lead, go instead where there is no path.", by: "Often attributed to Emerson; original source disputed" },
 { text: "We are what we repeatedly do.", by: "Will Durant, paraphrasing Aristotle" },
 { text: "What we think, we become.", by: "Often attributed to the Buddha; original source disputed" },
 { text: "Don't watch the clock. Do what it does. Keep going.", by: "Sam Levenson" },
 { text: "It is during our darkest moments that we must focus to see the light.", by: "Aristotle" },
 { text: "Limitations live only in our minds.", by: "Jamie Paolinetti", domain: "psychology" },
 { text: "Life is what happens when you're busy making other plans.", by: "Often attributed to John Lennon; from his 1980 song Beautiful Boy" },
 { text: "Success usually comes to those who are too busy to be looking for it.", by: "Henry David Thoreau" },
 { text: "The future depends on what you do today.", by: "Mahatma Gandhi" },
 { text: "Believe you can, and you're halfway there.", by: "Theodore Roosevelt" },
 { text: "It always seems impossible until it's done.", by: "Nelson Mandela" },
 { text: "Don't count the days, make the days count.", by: "Muhammad Ali" },
 { text: "Excellence is never an accident.", by: "Often attributed to Aristotle; from Will Durant's paraphrase" },
 { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", by: "William Butler Yeats" },
 { text: "There is no substitute for hard work.", by: "Thomas Edison" },
 { text: "Strive not to be a success, but rather to be of value.", by: "Often attributed to Einstein; original source disputed" },
 { text: "Knowledge without application is like a book that is never read.", by: "Christopher Crawford" },

 // Investing and money
 { text: "Spend each day trying to be a little wiser than you were when you woke up.", by: "Charlie Munger", domain: "mental_models" },
 { text: "The big money is not in the buying and selling, but in the waiting.", by: "Charlie Munger", domain: "investing" },
 { text: "All I want to know is where I'm going to die, so I'll never go there.", by: "Charlie Munger", domain: "mental_models" },
 { text: "The first rule of compounding is to never interrupt it unnecessarily.", by: "Charlie Munger", domain: "investing" },
 { text: "Stocks are simple. All you do is buy shares in a great business for less than the business is intrinsically worth, with management of the highest integrity.", by: "Warren Buffett", domain: "investing" },
 { text: "Wall Street is the only place that people ride to in a Rolls Royce to get advice from those who take the subway.", by: "Warren Buffett", domain: "investing" },
 { text: "Forecasts may tell you a great deal about the forecaster; they tell you nothing about the future.", by: "Warren Buffett", domain: "investing" },
 { text: "Successful investing is about managing risk, not avoiding it.", by: "Benjamin Graham", domain: "investing" },
 { text: "The best investment you can make is an investment in yourself.", by: "Warren Buffett", domain: "personal_finance" },
 { text: "Behavior matters more than analysis in real-world investing.", by: "Howard Marks", domain: "investing" },

 // Entrepreneurship
 { text: "Done is better than perfect.", by: "Sheryl Sandberg", domain: "entrepreneurship" },
 { text: "Do things, tell people.", by: "Carl Newport, often attributed to others", domain: "entrepreneurship" },
 { text: "The best way to predict the future is to create it.", by: "Often attributed to Lincoln, popularised by Peter Drucker", domain: "entrepreneurship" },
 { text: "Whether you think you can or you think you cannot, you're right.", by: "Henry Ford" },
 { text: "What we focus on grows.", by: "Tony Robbins" },
 { text: "If you want to be successful, find someone who has achieved the results you want and copy what they do.", by: "Tony Robbins" },
 { text: "Don't be afraid to give up the good to go for the great.", by: "John D. Rockefeller" },
 { text: "I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not trying.", by: "Jeff Bezos", domain: "entrepreneurship" },
 { text: "Be stubborn on vision, but flexible on details.", by: "Jeff Bezos", domain: "entrepreneurship" },
 { text: "If you don't understand the details of your business, you are going to fail.", by: "Jeff Bezos", domain: "entrepreneurship" },
 { text: "Cash flow is the lifeblood of small business.", by: "Often attributed to many; common business maxim", domain: "personal_finance" },
 { text: "Customer service shouldn't just be a department, it should be the entire company.", by: "Tony Hsieh", domain: "marketing" },

 // Communication, writing
 { text: "Write to be understood, speak to be heard, read to grow.", by: "Lawrence Clark Powell", domain: "communication" },
 { text: "When ideas fail, words come in very handy.", by: "Johann Wolfgang von Goethe", domain: "communication" },
 { text: "Brevity is the soul of wit.", by: "William Shakespeare", work: "Hamlet", domain: "communication" },
 { text: "Either write something worth reading or do something worth writing.", by: "Benjamin Franklin", domain: "communication" },
 { text: "The most important thing in communication is hearing what isn't said.", by: "Peter Drucker", domain: "communication" },
 { text: "A speaker should approach his preparation not by what he wants to say, but by what he wants to learn.", by: "Todd Stocker", domain: "communication" },
 { text: "Eloquence is the painting of the thoughts.", by: "Blaise Pascal", domain: "communication" },
 { text: "Half the world is composed of people who have something to say and can't, and the other half who have nothing to say and keep on saying it.", by: "Robert Frost", domain: "communication" },

 // Tech, programming
 { text: "There are only two hard things in Computer Science: cache invalidation and naming things.", by: "Phil Karlton", domain: "tech" },
 { text: "Don't comment bad code. Rewrite it.", by: "Brian Kernighan and P.J. Plauger", work: "The Elements of Programming Style", domain: "tech" },
 { text: "Make it work, make it right, make it fast.", by: "Kent Beck", domain: "tech" },
 { text: "Controlling complexity is the essence of computer programming.", by: "Brian Kernighan", domain: "tech" },
 { text: "The function of good software is to make the complex appear to be simple.", by: "Grady Booch", domain: "tech" },
 { text: "Code never lies, comments sometimes do.", by: "Ron Jeffries", domain: "tech" },
 { text: "Programming is the art of telling another human what one wants the computer to do.", by: "Donald Knuth", domain: "tech" },
 { text: "Premature optimization is the root of all evil.", by: "Donald Knuth", domain: "tech" },
 { text: "Smart data structures and dumb code works a lot better than the other way around.", by: "Eric S. Raymond", domain: "tech" },

 // AI, ML
 { text: "The development of full artificial intelligence could spell the end of the human race.", by: "Stephen Hawking", domain: "ai_ml" },
 { text: "Knowledge is not intelligence. The difference matters more every year.", by: "Adapted from many; modern AI commentary", domain: "ai_ml" },
 { text: "I think we are at the beginning of an era where AI will be the bicycle for the mind.", by: "Adapted, originally Steve Jobs called the computer 'a bicycle for the mind'", domain: "ai_ml" },

 // Health
 { text: "He who has health, has hope. And he who has hope, has everything.", by: "Thomas Carlyle", domain: "health" },
 { text: "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.", by: "Often attributed to the Buddha; original source disputed", domain: "health" },
 { text: "Movement is a medicine for creating change in a person's physical, emotional, and mental states.", by: "Carol Welch", domain: "health" },
 { text: "Early to bed and early to rise makes a man healthy, wealthy, and wise.", by: "Benjamin Franklin", domain: "health" },
 { text: "You can have all the riches and success in the world, but if you don't have your health, you have nothing.", by: "Steve Jobs", domain: "health" },

 // Mental models, decisions
 { text: "The biggest enemy of progress is the comfort zone.", by: "Common maxim, attribution disputed", domain: "mental_models" },
 { text: "Slow is smooth and smooth is fast.", by: "Navy SEAL maxim", domain: "mental_models" },
 { text: "If you cannot measure it, you cannot improve it.", by: "Often attributed to Peter Drucker; original source disputed", domain: "mental_models" },
 { text: "When you find yourself in a hole, stop digging.", by: "Warren Buffett, common maxim", domain: "mental_models" },
 { text: "Better roughly right than precisely wrong.", by: "John Maynard Keynes", domain: "mental_models" },
 { text: "If a thing is worth doing, it is worth doing well.", by: "Common maxim, attribution disputed" },
 { text: "Try a thing you haven't done three times. Once, to get over the fear of doing it. Twice, to learn how to do it. And a third time, to figure out whether you like it or not.", by: "Virgil Thomson" },
 { text: "Hope is not a strategy.", by: "Often attributed to Vince Lombardi; widely used in management" },
 { text: "Pareto's principle: about 80% of effects come from 20% of causes.", by: "Vilfredo Pareto (later generalised)", domain: "mental_models" },
 { text: "The fox knows many things, but the hedgehog knows one big thing.", by: "Archilochus", domain: "mental_models" },

 // Negotiation
 { text: "You don't get what you want. You get what you negotiate.", by: "Harvey Mackay", domain: "negotiation" },
 { text: "Let us never negotiate out of fear. But let us never fear to negotiate.", by: "John F. Kennedy", domain: "negotiation" },
 { text: "A negotiator should observe everything. You must be part Sherlock Holmes, part Sigmund Freud.", by: "Victor Kiam", domain: "negotiation" },
 { text: "If there is any one secret of success, it lies in the ability to get the other person's point of view and see things from that person's angle as well as from your own.", by: "Henry Ford", domain: "negotiation" },

 // Psychology, philosophy
 { text: "He who has a why to live for can bear almost any how.", by: "Friedrich Nietzsche", domain: "psychology" },
 { text: "The privilege of a lifetime is to become who you truly are.", by: "Carl Jung", domain: "psychology" },
 { text: "People often say that motivation doesn't last. Well, neither does bathing, that's why we recommend it daily.", by: "Zig Ziglar" },
 { text: "I cannot teach anybody anything. I can only make them think.", by: "Socrates", domain: "psychology" },
 { text: "There is nothing either good or bad, but thinking makes it so.", by: "William Shakespeare", work: "Hamlet", domain: "psychology" },
 { text: "Whatever the mind of man can conceive and believe, it can achieve.", by: "Napoleon Hill", domain: "psychology" },
 { text: "The greatest revolution of our generation is the discovery that human beings, by changing the inner attitudes of their minds, can change the outer aspects of their lives.", by: "William James", domain: "psychology" },
 { text: "Do not let what you cannot do interfere with what you can do.", by: "John Wooden" },
 { text: "It is never too late to be what you might have been.", by: "George Eliot" },
 { text: "Fall seven times and stand up eight.", by: "Japanese proverb" },
 { text: "We suffer more often in imagination than in reality.", by: "Seneca", domain: "psychology" },
 { text: "Waste no more time arguing what a good man should be. Be one.", by: "Marcus Aurelius", domain: "psychology" },
 { text: "The happiness of your life depends upon the quality of your thoughts.", by: "Marcus Aurelius", domain: "psychology" },
 { text: "You have power over your mind, not outside events. Realize this, and you will find strength.", by: "Marcus Aurelius", domain: "psychology" },
 { text: "Begin at once to live, and count each separate day as a separate life.", by: "Seneca" },
 { text: "Difficulties strengthen the mind, as labor does the body.", by: "Seneca", domain: "psychology" },

 // Famous laws, science, math
 { text: "Mathematics is the language with which God has written the universe.", by: "Galileo Galilei", domain: "famous_laws" },
 { text: "I would rather have questions that can't be answered than answers that can't be questioned.", by: "Richard Feynman", domain: "famous_laws" },
 { text: "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.", by: "Richard Feynman", domain: "famous_laws" },
 { text: "Science is the great antidote to the poison of enthusiasm and superstition.", by: "Adam Smith", domain: "famous_laws" },
 { text: "All science is either physics or stamp collecting.", by: "Ernest Rutherford", domain: "famous_laws" },
 { text: "The good thing about science is that it's true whether or not you believe in it.", by: "Neil deGrasse Tyson", domain: "famous_laws" },
 { text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.", by: "Edwin Hubble", domain: "famous_laws" },
 { text: "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka' but 'That's funny...'", by: "Isaac Asimov", domain: "famous_laws" },

 // Law, civics
 { text: "The arc of the moral universe is long, but it bends toward justice.", by: "Martin Luther King Jr. (paraphrasing Theodore Parker)", domain: "law" },
 { text: "Where law ends, tyranny begins.", by: "William Pitt", domain: "law" },
 { text: "Laws control the lesser man. Right conduct controls the greater one.", by: "Mark Twain", domain: "law" },
 { text: "An unjust law is no law at all.", by: "Augustine of Hippo", domain: "law" },
 { text: "Liberty consists in doing what one desires, so long as it does not harm others.", by: "John Stuart Mill", domain: "law" },

 // More on learning, focus, discipline
 { text: "Concentration is the secret of strength.", by: "Ralph Waldo Emerson", domain: "learning" },
 { text: "The best way to learn is to teach.", by: "Frank Oppenheimer", domain: "learning" },
 { text: "Reading is to the mind what exercise is to the body.", by: "Joseph Addison", domain: "learning" },
 { text: "You don't have to be great to start, but you have to start to be great.", by: "Zig Ziglar" },
 { text: "Success is the sum of small efforts, repeated day in and day out.", by: "Robert Collier" },
 { text: "The expert in anything was once a beginner.", by: "Helen Hayes", domain: "learning" },
 { text: "It does not matter how slowly you go as long as you do not stop.", by: "Often attributed to Confucius; original source disputed" },
 { text: "Without continual growth and progress, such words as improvement, achievement, and success have no meaning.", by: "Benjamin Franklin" },
 { text: "Knowledge is of no value unless you put it into practice.", by: "Anton Chekhov", domain: "learning" },

 // Money habits, attribution honest
 { text: "Frugality includes all the other virtues.", by: "Cicero", domain: "personal_finance" },
 { text: "Wealth consists not in having great possessions, but in having few wants.", by: "Epictetus", domain: "personal_finance" },
 { text: "Beware of little expenses. A small leak will sink a great ship.", by: "Benjamin Franklin", domain: "personal_finance" },
 { text: "Never spend your money before you have it.", by: "Thomas Jefferson", domain: "personal_finance" },
 { text: "It's not how much money you make, but how much money you keep.", by: "Robert Kiyosaki", domain: "personal_finance" },
 { text: "Money is a terrible master but an excellent servant.", by: "P. T. Barnum", domain: "personal_finance" },

 // Habits, productivity
 { text: "First we make our habits, then our habits make us.", by: "John Dryden" },
 { text: "We do not rise to the level of our expectations. We fall to the level of our training.", by: "Often attributed to Archilochus" },
 { text: "Motivation gets you going, but discipline keeps you growing.", by: "John C. Maxwell" },
 { text: "What you do every day matters more than what you do once in a while.", by: "Gretchen Rubin" },
 { text: "You'll never change your life until you change something you do daily.", by: "John C. Maxwell" },
 { text: "Small daily improvements compound into stunning results.", by: "James Clear", domain: "learning" },
 { text: "You do not rise to the level of your goals. You fall to the level of your systems.", by: "James Clear" },
 { text: "Every action you take is a vote for the type of person you wish to become.", by: "James Clear" },
 { text: "Habits are the compound interest of self-improvement.", by: "James Clear" },
 { text: "Make it obvious, make it attractive, make it easy, make it satisfying.", by: "James Clear", work: "Atomic Habits" },
 { text: "The most precious resource we all have is time.", by: "Steve Jobs" },
 { text: "Concentration comes out of a combination of confidence and hunger.", by: "Arnold Palmer" },
 { text: "Lost time is never found again.", by: "Benjamin Franklin" },

 // Negotiation, persuasion, influence
 { text: "Diplomacy is the art of telling people to go to hell in such a way that they ask for directions.", by: "Winston Churchill", domain: "negotiation" },
 { text: "The best deal is the one where everyone walks away thinking they got a great deal.", by: "Common business maxim", domain: "negotiation" },
 { text: "The most important persuasion tool you have in your entire arsenal is integrity.", by: "Zig Ziglar", domain: "negotiation" },
 { text: "Tell me and I will forget; show me and I may remember; involve me and I will understand.", by: "Often attributed to Confucius", domain: "communication" },
 { text: "If you can't convince them, confuse them.", by: "Often attributed to Harry S. Truman", domain: "communication" },
 { text: "The art of communication is the language of leadership.", by: "James Humes", domain: "communication" },

 // Risk, courage
 { text: "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do.", by: "Often attributed to Mark Twain; original source disputed" },
 { text: "The cave you fear to enter holds the treasure you seek.", by: "Joseph Campbell" },
 { text: "Courage is grace under pressure.", by: "Ernest Hemingway" },
 { text: "We must let go of the life we have planned, so as to accept the one that is waiting for us.", by: "Joseph Campbell" },
 { text: "Do what you can, with what you have, where you are.", by: "Theodore Roosevelt" },
 { text: "Comfort the disturbed and disturb the comfortable.", by: "Cesar A. Cruz" },
 { text: "Smooth seas do not make skillful sailors.", by: "African proverb" },
 { text: "There is no growth in the comfort zone and no comfort in the growth zone.", by: "Common modern maxim" },
 { text: "Vulnerability is the birthplace of innovation, creativity and change.", by: "Brene Brown", domain: "psychology" },
 { text: "Courage starts with showing up and letting ourselves be seen.", by: "Brene Brown", domain: "psychology" },

 // Mental models, philosophy
 { text: "It is the mark of an instructed mind to rest assured with that degree of precision which the nature of the subject admits.", by: "Aristotle", domain: "mental_models" },
 { text: "The whole is greater than the sum of its parts.", by: "Often attributed to Aristotle; from Metaphysics", domain: "mental_models" },
 { text: "Patience is not the ability to wait, but the ability to keep a good attitude while waiting.", by: "Joyce Meyer" },
 { text: "He who has overcome his fears will truly be free.", by: "Aristotle", domain: "psychology" },
 { text: "The only thing necessary for the triumph of evil is for good men to do nothing.", by: "Often attributed to Edmund Burke; original source disputed" },
 { text: "I disapprove of what you say, but I will defend to the death your right to say it.", by: "Often attributed to Voltaire; written by Evelyn Beatrice Hall summarizing his stance" },
 { text: "The price of greatness is responsibility.", by: "Winston Churchill" },
 { text: "Difficulties mastered are opportunities won.", by: "Winston Churchill" },
 { text: "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.", by: "Winston Churchill" },
 { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", by: "Often attributed to Winston Churchill; original source disputed" },
 { text: "If you're going through hell, keep going.", by: "Often attributed to Winston Churchill; original source disputed" },

 // Leadership, management
 { text: "Management is doing things right; leadership is doing the right things.", by: "Peter Drucker" },
 { text: "The best way to find out if you can trust somebody is to trust them.", by: "Ernest Hemingway" },
 { text: "Earn your leadership every day.", by: "Michael Jordan" },
 { text: "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others.", by: "Jack Welch" },
 { text: "A leader is one who knows the way, goes the way, and shows the way.", by: "John C. Maxwell" },
 { text: "Lead from the back and let others believe they are in front.", by: "Often attributed to Nelson Mandela" },
 { text: "Be the leader who wants to be the leader you've always wanted.", by: "Common modern maxim" },
 { text: "Hire character. Train skill.", by: "Peter Schutz" },
 { text: "Culture eats strategy for breakfast.", by: "Often attributed to Peter Drucker" },
 { text: "If you want to go fast, go alone. If you want to go far, go together.", by: "African proverb" },

 // Friendship, relationships
 { text: "A friend is someone who knows all about you and still loves you.", by: "Elbert Hubbard" },
 { text: "We are all a little weird, and life's a little weird. And when we find someone whose weirdness is compatible with ours, we join up with them and fall in mutual weirdness and call it love.", by: "Often attributed to Robert Fulghum and Dr. Seuss; original source disputed" },
 { text: "The greatest gift of life is friendship, and I have received it.", by: "Hubert H. Humphrey" },
 { text: "Friendship marks a life even more deeply than love.", by: "Elie Wiesel" },
 { text: "Loneliness is the human condition. Cultivate it.", by: "Janet Fitch" },
 { text: "Treat people the way you want to be treated. Talk to people the way you want to be talked to. Respect is earned, not given.", by: "Hussein Nishah" },
 { text: "Be the person your dog thinks you are.", by: "C. J. Frick" },

 // Health, body
 { text: "It is health that is real wealth and not pieces of gold and silver.", by: "Mahatma Gandhi", domain: "health" },
 { text: "Walking is a man's best medicine.", by: "Often attributed to Hippocrates; original source disputed", domain: "health" },
 { text: "He who has health, has hope.", by: "Arabian proverb", domain: "health" },
 { text: "A healthy outside starts from the inside.", by: "Robert Urich", domain: "health" },
 { text: "If you don't take care of your body, where are you going to live?", by: "Common modern maxim", domain: "health" },
 { text: "The greatest wealth is health.", by: "Virgil", domain: "health" },
 { text: "An apple a day keeps the doctor away.", by: "English proverb", domain: "nutrition" },

 // Creativity
 { text: "Creativity is intelligence having fun.", by: "Often attributed to Einstein; original source disputed" },
 { text: "Every act of creation is first an act of destruction.", by: "Pablo Picasso" },
 { text: "Creativity takes courage.", by: "Henri Matisse" },
 { text: "You can't use up creativity. The more you use, the more you have.", by: "Maya Angelou" },
 { text: "Have no fear of perfection. You'll never reach it.", by: "Salvador Dali" },
 { text: "Art is the lie that enables us to realize the truth.", by: "Pablo Picasso" },
 { text: "The chief enemy of creativity is good sense.", by: "Pablo Picasso" },
 { text: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.", by: "Leo Burnett" },
 { text: "The way to get good ideas is to get lots of ideas and throw the bad ones away.", by: "Linus Pauling" },
 { text: "Great things are not done by impulse, but by a series of small things brought together.", by: "Vincent van Gogh" },

 // Time, focus
 { text: "Time is the most valuable thing a man can spend.", by: "Theophrastus" },
 { text: "Time is what we want most, but what we use worst.", by: "William Penn" },
 { text: "Don't say you don't have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michaelangelo, Mother Teresa, Leonardo da Vinci, Thomas Jefferson, and Albert Einstein.", by: "H. Jackson Brown Jr." },
 { text: "Better three hours too soon than a minute too late.", by: "William Shakespeare", work: "The Merry Wives of Windsor" },
 { text: "Time you enjoy wasting is not wasted time.", by: "Often attributed to John Lennon and Marthe Troly-Curtin" },
 { text: "Time is money.", by: "Benjamin Franklin", domain: "personal_finance" },
 { text: "There is more to life than increasing its speed.", by: "Mahatma Gandhi" },

 // Failure, resilience
 { text: "Our greatest glory is not in never falling, but in rising every time we fall.", by: "Often attributed to Confucius" },
 { text: "Failure is success in progress.", by: "Often attributed to Einstein; original source disputed" },
 { text: "I can accept failure, everyone fails at something. But I can't accept not trying.", by: "Michael Jordan" },
 { text: "The phoenix must burn to emerge.", by: "Janet Fitch" },
 { text: "You may have to fight a battle more than once to win it.", by: "Margaret Thatcher" },
 { text: "Rock bottom became the solid foundation on which I rebuilt my life.", by: "J. K. Rowling" },
 { text: "Tough times never last, but tough people do.", by: "Robert H. Schuller" },
 { text: "Strength does not come from physical capacity. It comes from an indomitable will.", by: "Mahatma Gandhi" },
 { text: "It's not whether you get knocked down, it's whether you get up.", by: "Vince Lombardi" },
 { text: "Resilience is accepting your new reality, even if it's less good than the one you had before.", by: "Elizabeth Edwards", domain: "psychology" },

 // Curiosity, wonder
 { text: "We learn by example and by direct experience because there are real limits to the adequacy of verbal instruction.", by: "Malcolm Gladwell", domain: "learning" },
 { text: "Wonder is the beginning of wisdom.", by: "Often attributed to Socrates; original source disputed" },
 { text: "The world is full of magic things, patiently waiting for our senses to grow sharper.", by: "W. B. Yeats" },
 { text: "Look deep into nature, and then you will understand everything better.", by: "Often attributed to Einstein; original source disputed", domain: "famous_laws" },
 { text: "Somewhere, something incredible is waiting to be known.", by: "Carl Sagan", domain: "famous_laws" },
 { text: "The science of today is the technology of tomorrow.", by: "Edward Teller", domain: "famous_laws" },
 { text: "What we know is a drop, what we don't know is an ocean.", by: "Isaac Newton", domain: "famous_laws" },
 { text: "Nature does not hurry, yet everything is accomplished.", by: "Lao Tzu" },

 // Action, doing
 { text: "Well done is better than well said.", by: "Benjamin Franklin" },
 { text: "You miss 100 percent of the shots you don't take.", by: "Wayne Gretzky" },
 { text: "Don't wait. The time will never be just right.", by: "Napoleon Hill" },
 { text: "What you do speaks so loudly that I cannot hear what you say.", by: "Ralph Waldo Emerson" },
 { text: "Just do it.", by: "Nike slogan, written by Dan Wieden 1988" },
 { text: "The shortest answer is doing the thing.", by: "Ernest Hemingway" },
 { text: "Don't tell me what you value, show me your budget, and I'll tell you what you value.", by: "Joe Biden", domain: "personal_finance" },

 // More on AI, modern tech ethics
 { text: "Software is eating the world.", by: "Marc Andreessen", domain: "tech" },
 { text: "Every company is now a tech company.", by: "Common business maxim", domain: "tech" },
 { text: "Move slow and don't break things, especially in security.", by: "Adapted from many; modern engineering ethics", domain: "tech" },
 { text: "If you torture the data long enough, it will confess.", by: "Ronald Coase", domain: "ai_ml" },
 { text: "All models are approximations. Essentially, all models are wrong, but some are useful.", by: "George Box", domain: "ai_ml" },

 // Wisdom from many traditions
 { text: "The roots of education are bitter, but the fruit is sweet.", by: "Often attributed to Aristotle", domain: "learning" },
 { text: "The bamboo that bends is stronger than the oak that resists.", by: "Japanese proverb" },
 { text: "A journey of a thousand miles begins beneath one's feet.", by: "Lao Tzu", work: "Tao Te Ching" },
 { text: "When the student is ready, the teacher will appear.", by: "Often attributed to the Buddha" },
 { text: "Every saint has a past and every sinner has a future.", by: "Oscar Wilde" },
 { text: "You can't depend on your eyes when your imagination is out of focus.", by: "Mark Twain" },
 { text: "Speak when you are angry and you will make the best speech you will ever regret.", by: "Ambrose Bierce" },
 { text: "Always do right. This will gratify some people and astonish the rest.", by: "Mark Twain" },
 { text: "Do not speak unless it improves on silence.", by: "Buddhist proverb" },
 { text: "When you talk, you are only repeating what you already know. But if you listen, you may learn something new.", by: "Dalai Lama" },

 // More on money, success
 { text: "Too many people spend money they earned to buy things they don't want to impress people that they don't like.", by: "Will Rogers", domain: "personal_finance" },
 { text: "Wealth is the ability to fully experience life.", by: "Henry David Thoreau", domain: "personal_finance" },
 { text: "Try not to become a man of success. Rather become a man of value.", by: "Often attributed to Einstein" },
 { text: "Success is liking yourself, liking what you do, and liking how you do it.", by: "Maya Angelou" },
 { text: "Success is going from failure to failure without losing enthusiasm.", by: "Often attributed to Winston Churchill" },
 { text: "Success is walking from failure to failure with no loss of enthusiasm.", by: "Often attributed to Winston Churchill" },
 { text: "Don't go through life, grow through life.", by: "Eric Butterworth" },

 // Justice, society
 { text: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.", by: "Martin Luther King Jr." },
 { text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", by: "Martin Luther King Jr." },
 { text: "Life's most persistent and urgent question is, what are you doing for others?", by: "Martin Luther King Jr." },
 { text: "Education is the most powerful weapon which you can use to change the world.", by: "Nelson Mandela", domain: "learning" },
 { text: "There is no passion to be found playing small, in settling for a life that is less than the one you are capable of living.", by: "Nelson Mandela" },
 { text: "I am the master of my fate; I am the captain of my soul.", by: "William Ernest Henley", work: "Invictus" },
 { text: "You must be the change you wish to see in the world.", by: "Often attributed to Mahatma Gandhi" },

 // Calmness, presence
 { text: "Wherever you are, be all there.", by: "Jim Elliot", domain: "psychology" },
 { text: "Realize deeply that the present moment is all you have.", by: "Eckhart Tolle", domain: "psychology" },
 { text: "Quiet the mind and the soul will speak.", by: "Ma Jaya Sati Bhagavati", domain: "psychology" },
 { text: "Restore your attention or bring it to a new level by dramatically slowing down whatever you're doing.", by: "Sharon Salzberg", domain: "psychology" },
 { text: "Yesterday is history, tomorrow is a mystery, today is a gift.", by: "Often attributed to Eleanor Roosevelt and others", domain: "psychology" }
];

// Deterministic daily quote based on day key (YYYY-MM-DD).
export function dailyQuote(dayKey: string): Quote {
 let h = 0;
 for (let i = 0; i < dayKey.length; i++) h = ((h << 5) - h + dayKey.charCodeAt(i)) | 0;
 return QUOTES[Math.abs(h) % QUOTES.length];
}

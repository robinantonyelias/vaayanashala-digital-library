let focusedBook = null;

function refreshFavButton() {
  const button = byId("metaFavToggle");
  const saved = isFavourite(focusedBook.id);
  button.textContent = saved ? "Saved in favourites" : "Add to favourites";
  button.className = saved ? "btn btn-primary" : "btn btn-ghost";
}

function triggerDetailFavAction() {
  toggleFavourite(focusedBook);
  refreshFavButton();
}

function simulateCirculationCheckout() {

  if (focusedBook.pdf) {
    window.open(focusedBook.pdf, "_blank");
    showToast(`Opening "${focusedBook.title}"`);
  } else {
    showToast("PDF not available for this book.");
  }

}

document.addEventListener("DOMContentLoaded", () => {
  requireLogin();
  setMediaBackdrop(MEDIA.archiveVideo, MEDIA.archiveImage);
  const id = Number(new URLSearchParams(location.search).get("id") || 1);
  focusedBook = BOOKS.find((book) => book.id === id) || BOOKS[0];

  byId("metaTitle").textContent = focusedBook.title;
  byId("metaAuthor").textContent = `By ${focusedBook.author}`;
  byId("metaGenre").textContent = focusedBook.genre;
  byId("metaRating").textContent = `Rating ${focusedBook.rating}`;
  byId("metaSynopsis").textContent = focusedBook.syn;
  byId("metaCover").style.backgroundImage = `url('${focusedBook.image}')`;
  byId("metaCover").style.backgroundSize = "cover";
  byId("metaCover").style.backgroundPosition = "center";
  byId("metaCover").style.backgroundRepeat = "no-repeat";
  byId("metaCover").innerHTML = "";

  const featuresGrid = byId("bookFeaturesGrid");
  if (featuresGrid) {
    const bookFeaturesData = {
      1: [{ title: "Behavioral Finance", desc: "Focuses on behavior and mindset rather than technical calculations." }, { title: "Compounding Magic", desc: "Demonstrates the immense power of patience and time." }, { title: "Wealth vs. Riches", desc: "Explains the critical difference between having money and keeping it." }, { title: "19 Short Stories", desc: "Accessible, bite-sized chapters exploring human flaws and biases." }],
      2: [{ title: "Deductive Reasoning", desc: "Classic examples of Holmes' legendary logical methods." }, { title: "Original Artwork", desc: "Includes the iconic illustrations that defined his look." }, { title: "Victorian London", desc: "Immersive setting full of gaslight, fog, and mystery." }, { title: "Iconic Mysteries", desc: "A collection of the most famous cases in detective history." }],
      3: [{ title: "1% Better Every Day", desc: "The compounding effect of small, daily improvements." }, { title: "Four Laws of Behavior", desc: "Make it obvious, attractive, easy, and satisfying." }, { title: "System vs. Goal", desc: "Focus on building the system rather than just the end goal." }, { title: "Identity Change", desc: "How changing your self-image changes your habits permanently." }],
      4: [{ title: "Campus Life", desc: "A realistic and humorous look at the pressures of top engineering colleges." }, { title: "Relatable Characters", desc: "Three friends navigating grades, expectations, and relationships." }, { title: "Critique of System", desc: "Questions the rote learning and intense grading systems in education." }, { title: "Coming of Age", desc: "A story about finding oneself amidst overwhelming academic pressure." }],
      5: [{ title: "Spiritual Awakening", desc: "A lawyer's journey from materialism to profound inner peace." }, { title: "The 7 Virtues", desc: "Practical lessons for self-discipline, courage, and balance." }, { title: "Fable Format", desc: "Life lessons delivered through an engaging fictional narrative." }, { title: "Mindfulness", desc: "Focuses on living in the present and prioritizing true happiness." }],
      6: [{ title: "Personal Legend", desc: "A journey of following one's dreams and discovering true purpose." }, { title: "Philosophical Allegory", desc: "Rich with symbols, omens, and timeless life lessons." }, { title: "Universal Language", desc: "Explores the interconnectedness of all living things." }, { title: "Desert Journey", desc: "An epic physical and spiritual adventure across the sands." }],
      7: [{ title: "Magical Realism", desc: "Seamlessly blends the supernatural with everyday life." }, { title: "Generational Saga", desc: "Follows seven generations of the complex Buendía family." }, { title: "Cyclical Time", desc: "Explores how history and mistakes repeat themselves over decades." }, { title: "Macondo", desc: "A vivid, isolated town that reflects the history of Latin America." }],
      8: [{ title: "Meta-Fiction", desc: "A clever blend of autobiography, romance, and radio soap operas." }, { title: "Eccentric Characters", desc: "Features a wildly imaginative and unpredictable scriptwriter." }, { title: "Humor & Chaos", desc: "Laugh-out-loud moments as the radio stories spiral out of control." }, { title: "Forbidden Romance", desc: "The scandalous love story of a young writer and his older aunt by marriage." }],
      9: [{ title: "Mythological Retelling", desc: "Reimagines the Hindu god Shiva as a mortal, historical hero." }, { title: "Ancient India", desc: "Vividly brings the legendary civilization of Meluha to life." }, { title: "Action-Packed", desc: "Filled with epic battles, political intrigue, and grand adventure." }, { title: "Good vs. Evil", desc: "Explores the true nature of what defines good and evil." }],
      10: [{ title: "Brutal Honesty", desc: "Cuts through toxic positivity with a refreshing dose of reality." }, { title: "Choosing Struggles", desc: "Teaches that happiness comes from solving problems you care about." }, { title: "Radical Acceptance", desc: "Embracing your flaws and limitations to find true freedom." }, { title: "Counterintuitive", desc: "Why trying to be happy all the time actually makes you miserable." }],
      11: [{ title: "Darker Tone", desc: "Raises the stakes with petrifying attacks and ancient secrets." }, { title: "Hogwarts Lore", desc: "Dives deep into the history of the school's founders." }, { title: "Magical Creatures", desc: "Introduces memorable beasts like Dobby, Aragog, and the Basilisk." }, { title: "Classic Mystery", desc: "A 'whodunit' woven seamlessly into the magical fantasy setting." }],
      12: [{ title: "Historical Witness", desc: "A firsthand account of life under Nazi occupation." }, { title: "Coming of Age", desc: "Raw reflections on adolescence, family dynamics, and growing up." }, { title: "Human Spirit", desc: "Incredible optimism and hope maintained in the darkest times." }, { title: "Secret Annex", desc: "The claustrophobic and tense reality of two years in hiding." }],
      13: [{ title: "Fast-Paced Thriller", desc: "A breathless race against time through the streets of Paris." }, { title: "Art & Symbology", desc: "Weaves real historical art and secret societies into the puzzle." }, { title: "Religious Conspiracy", desc: "Explores controversial theories about the Holy Grail." }, { title: "Mind-Bending Puzzles", desc: "Cryptexes, anagrams, and riddles that keep the reader engaged." }],
      14: [{ title: "Social Critique", desc: "A satirical look at racism, society, and human nature in the South." }, { title: "River Journey", desc: "An iconic adventure traveling down the mighty Mississippi." }, { title: "Moral Growth", desc: "Huck's internal struggle between societal laws and his own conscience." }, { title: "Distinct Dialects", desc: "Masterful use of regional accents that brings characters to life." }],
      15: [{ title: "Witty Commentary", desc: "A sharp critique of 19th-century class, marriage, and manners." }, { title: "Enemies to Lovers", desc: "The ultimate blueprint for overcoming first impressions." }, { title: "Iconic Characters", desc: "Features the fiercely independent Elizabeth and the aloof Mr. Darcy." }, { title: "Timeless Romance", desc: "A love story driven by intellectual equality and personal growth." }],
      16: [{ title: "Poetic Wisdom", desc: "Beautifully lyrical prose that reads like spiritual poetry." }, { title: "26 Life Topics", desc: "Profound thoughts on love, work, joy, sorrow, and freedom." }, { title: "Universal Appeal", desc: "Embraced across different cultures, religions, and generations." }, { title: "Timeless Truths", desc: "Short passages that offer deep comfort and perspective." }],
      17: [{ title: "Magical Discovery", desc: "The wonder of experiencing the wizarding world for the first time." }, { title: "Found Family", desc: "The unbreakable bond forged between Harry, Ron, and Hermione." }, { title: "Whimsical Setting", desc: "From Diagon Alley to the enchanting halls of Hogwarts." }, { title: "Classic Hero Arc", desc: "An ordinary, neglected boy discovering he is destined for greatness." }],
      18: [{ title: "Lifelong Devotion", desc: "A romance that spans over 50 years of waiting and obsession." }, { title: "Lush Prose", desc: "García Márquez's signature evocative and vibrant storytelling." }, { title: "Complex Love", desc: "Explores youthful passion, pragmatic marriage, and aging romance." }, { title: "Caribbean Setting", desc: "Set against the backdrop of a changing, cholera-stricken era." }],
      19: [{ title: "Ticking Clock", desc: "An intense 24-hour race to stop an antimatter explosion." }, { title: "Science vs. Religion", desc: "Explores the philosophical conflict between faith and physics." }, { title: "Vatican City", desc: "A thrilling tour through the secret archives and catacombs of Rome." }, { title: "Illuminati", desc: "Unraveling the path of an ancient and deadly secret brotherhood." }],
      20: [{ title: "Emotional Impact", desc: "A heartbreaking story of betrayal, guilt, and the search for redemption." }, { title: "Afghan History", desc: "Spans decades, capturing the cultural shifts and tragedies of Kabul." }, { title: "Complex Friendship", desc: "The beautiful but tragic bond between Amir and Hassan." }, { title: "Kite Tournaments", desc: "The vivid, high-stakes kite fighting traditions of Afghanistan." }]
    };

    let features = bookFeaturesData[focusedBook.id];
    if (!features) {
      features = [
        { title: "Key Themes", desc: "Explores profound concepts related to its core genre." },
        { title: "Narrative Style", desc: "Unique storytelling that keeps the reader fully engaged." },
        { title: "Character Arcs", desc: "Deep development and meaningful character journeys." },
        { title: "Core Message", desc: "Leaves a lasting impact long after the final page." }
      ];
    }

    featuresGrid.innerHTML = features.map((f) => `
      <div class="index-row">
        <strong>${f.title}</strong>
        <p class="muted">${f.desc}</p>
      </div>
    `).join('');
  }

  refreshFavButton();
});

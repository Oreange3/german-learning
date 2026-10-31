import { foldGerman, slugify } from '../lib/text.js'

function entry(rank, de, en, pos, extra = {}) {
  const english = Array.isArray(en) ? en : [en]
  return {
    id: extra.id || slugify(de),
    rank,
    de,
    en: english,
    pos,
    article: extra.article || null,
    plural: extra.plural || null,
    exampleDe: extra.exDe || '',
    exampleEn: extra.exEn || '',
    note: extra.note || '',
  }
}

export const words = [
  entry(1, 'der', 'the', 'article', { note: 'masculine “the”', exDe: 'Der Mann liest.', exEn: 'The man is reading.' }),
  entry(2, 'die', 'the', 'article', { note: 'feminine or plural “the”', exDe: 'Die Frau kommt.', exEn: 'The woman is coming.' }),
  entry(3, 'das', 'the', 'article', { note: 'neuter “the”', exDe: 'Das Kind spielt.', exEn: 'The child is playing.' }),
  entry(4, 'und', 'and', 'conjunction', { exDe: 'Ich und du.', exEn: 'You and I.' }),
  entry(5, 'in', 'in', 'preposition', { exDe: 'Ich bin in Berlin.', exEn: 'I am in Berlin.' }),
  entry(6, 'sein', ['to be', 'be'], 'verb', { exDe: 'Ich bin müde.', exEn: 'I am tired.' }),
  entry(7, 'ein', ['a', 'an', 'one'], 'article', { note: 'masculine/neuter “a”', exDe: 'Ein Hund bellt.', exEn: 'A dog is barking.' }),
  entry(8, 'ich', 'I', 'pronoun', { exDe: 'Ich lerne Deutsch.', exEn: 'I am learning German.' }),
  entry(9, 'werden', ['to become', 'will'], 'verb', { exDe: 'Es wird kalt.', exEn: 'It is getting cold.' }),
  entry(10, 'sie', ['she', 'they', 'you'], 'pronoun', { note: 'she / they / formal you (Sie)', exDe: 'Sie heißt Anna.', exEn: 'Her name is Anna.' }),
  entry(11, 'haben', ['to have', 'have'], 'verb', { exDe: 'Ich habe Zeit.', exEn: 'I have time.' }),
  entry(12, 'nicht', 'not', 'particle', { exDe: 'Ich bin nicht hier.', exEn: 'I am not here.' }),
  entry(13, 'auch', ['also', 'too'], 'adverb', { exDe: 'Ich auch.', exEn: 'Me too.' }),
  entry(14, 'von', ['from', 'of'], 'preposition', { exDe: 'Ein Brief von Tom.', exEn: 'A letter from Tom.' }),
  entry(15, 'zu', 'to', 'preposition', { exDe: 'Ich gehe zu dir.', exEn: 'I am going to your place.' }),
  entry(16, 'mit', 'with', 'preposition', { exDe: 'Kaffee mit Milch.', exEn: 'Coffee with milk.' }),
  entry(17, 'auf', ['on', 'onto'], 'preposition', { exDe: 'Das Buch liegt auf dem Tisch.', exEn: 'The book is on the table.' }),
  entry(18, 'für', 'for', 'preposition', { exDe: 'Das ist für dich.', exEn: 'That is for you.' }),
  entry(19, 'es', 'it', 'pronoun', { exDe: 'Es regnet.', exEn: 'It is raining.' }),
  entry(20, 'dass', 'that', 'conjunction', { note: 'subordinating “that”', exDe: 'Ich weiß, dass du kommst.', exEn: 'I know that you are coming.' }),
  entry(21, 'er', 'he', 'pronoun', { exDe: 'Er ist Lehrer.', exEn: 'He is a teacher.' }),
  entry(22, 'als', ['as', 'when', 'than'], 'conjunction', { exDe: 'Größer als ich.', exEn: 'Bigger than me.' }),
  entry(23, 'an', ['at', 'on'], 'preposition', { exDe: 'Am Montag.', exEn: 'On Monday.' }),
  entry(24, 'bei', ['at', 'near', 'with'], 'preposition', { exDe: 'Ich bin bei Anna.', exEn: 'I am at Anna’s.' }),
  entry(25, 'nach', ['after', 'to'], 'preposition', { exDe: 'Nach der Schule.', exEn: 'After school.' }),
  entry(26, 'oder', 'or', 'conjunction', { exDe: 'Tee oder Kaffee?', exEn: 'Tea or coffee?' }),
  entry(27, 'aber', 'but', 'conjunction', { exDe: 'Klein, aber fein.', exEn: 'Small but nice.' }),
  entry(28, 'so', 'so', 'adverb', { exDe: 'So ist das.', exEn: 'That’s how it is.' }),
  entry(29, 'wenn', ['if', 'when'], 'conjunction', { exDe: 'Wenn es regnet, bleibe ich.', exEn: 'If it rains, I stay.' }),
  entry(30, 'nur', 'only', 'adverb', { exDe: 'Nur ein Moment.', exEn: 'Only a moment.' }),
  entry(31, 'noch', ['still', 'yet', 'another'], 'adverb', { exDe: 'Noch nicht.', exEn: 'Not yet.' }),
  entry(32, 'wie', ['how', 'like', 'as'], 'adverb', { exDe: 'Wie geht’s?', exEn: 'How’s it going?' }),
  entry(33, 'was', 'what', 'pronoun', { exDe: 'Was ist das?', exEn: 'What is that?' }),
  entry(34, 'wir', 'we', 'pronoun', { exDe: 'Wir lernen.', exEn: 'We are learning.' }),
  entry(35, 'man', ['one', 'you'], 'pronoun', { note: 'generic “one/you”', exDe: 'Man sagt das so.', exEn: 'That’s how you say it.' }),
  entry(36, 'können', ['can', 'to be able to'], 'verb', { exDe: 'Ich kann Deutsch.', exEn: 'I can speak German.' }),
  entry(37, 'müssen', ['must', 'to have to'], 'verb', { exDe: 'Ich muss gehen.', exEn: 'I have to go.' }),
  entry(38, 'wollen', ['to want', 'want'], 'verb', { exDe: 'Ich will Kaffee.', exEn: 'I want coffee.' }),
  entry(39, 'ja', 'yes', 'particle', { exDe: 'Ja, gerne.', exEn: 'Yes, gladly.' }),
  entry(40, 'nein', 'no', 'particle', { exDe: 'Nein, danke.', exEn: 'No, thank you.' }),
  entry(41, 'hier', 'here', 'adverb', { exDe: 'Komm her, hier.', exEn: 'Come here.' }),
  entry(42, 'da', ['there', 'because'], 'adverb', { exDe: 'Da ist der Bus.', exEn: 'There is the bus.' }),
  entry(43, 'dann', 'then', 'adverb', { exDe: 'Und dann?', exEn: 'And then?' }),
  entry(44, 'schon', 'already', 'adverb', { exDe: 'Ich bin schon da.', exEn: 'I am already here.' }),
  entry(45, 'mehr', 'more', 'adverb', { exDe: 'Mehr Wasser bitte.', exEn: 'More water, please.' }),
  entry(46, 'sehr', 'very', 'adverb', { exDe: 'Sehr gut.', exEn: 'Very good.' }),
  entry(47, 'gut', ['good', 'well'], 'adjective', { exDe: 'Das ist gut.', exEn: 'That is good.' }),
  entry(48, 'neu', 'new', 'adjective', { exDe: 'Ein neues Buch.', exEn: 'A new book.' }),
  entry(49, 'groß', ['big', 'tall', 'great'], 'adjective', { exDe: 'Ein großes Haus.', exEn: 'A big house.' }),
  entry(50, 'klein', 'small', 'adjective', { exDe: 'Ein kleines Kind.', exEn: 'A small child.' }),

  entry(51, 'viel', ['much', 'many', 'a lot'], 'adjective', { exDe: 'Viel Glück!', exEn: 'Good luck!' }),
  entry(52, 'alle', 'all', 'pronoun', { exDe: 'Alle sind hier.', exEn: 'Everyone is here.' }),
  entry(53, 'kein', ['no', 'not a'], 'article', { exDe: 'Ich habe kein Geld.', exEn: 'I have no money.' }),
  entry(54, 'über', ['over', 'about'], 'preposition', { exDe: 'Wir sprechen über Musik.', exEn: 'We are talking about music.' }),
  entry(55, 'vor', ['before', 'in front of'], 'preposition', { exDe: 'Vor dem Haus.', exEn: 'In front of the house.' }),
  entry(56, 'durch', 'through', 'preposition', { exDe: 'Durch den Park.', exEn: 'Through the park.' }),
  entry(57, 'ohne', 'without', 'preposition', { exDe: 'Ohne Zucker bitte.', exEn: 'Without sugar, please.' }),
  entry(58, 'aus', ['from', 'out of'], 'preposition', { exDe: 'Ich komme aus Spanien.', exEn: 'I come from Spain.' }),
  entry(59, 'du', 'you', 'pronoun', { note: 'informal singular', exDe: 'Wie heißt du?', exEn: 'What is your name?' }),
  entry(60, 'Sie', 'you', 'pronoun', { id: 'sie-formal', note: 'formal you', exDe: 'Wie heißen Sie?', exEn: 'What is your name? (formal)' }),
  entry(61, 'gehen', ['to go', 'go'], 'verb', { exDe: 'Ich gehe nach Hause.', exEn: 'I am going home.' }),
  entry(62, 'kommen', ['to come', 'come'], 'verb', { exDe: 'Kommst du mit?', exEn: 'Are you coming along?' }),
  entry(63, 'machen', ['to make', 'to do', 'make', 'do'], 'verb', { exDe: 'Was machst du?', exEn: 'What are you doing?' }),
  entry(64, 'sagen', ['to say', 'say', 'tell'], 'verb', { exDe: 'Was sagst du?', exEn: 'What are you saying?' }),
  entry(65, 'geben', ['to give', 'give'], 'verb', { exDe: 'Gib mir das Buch.', exEn: 'Give me the book.' }),
  entry(66, 'Zeit', 'time', 'noun', { article: 'die', plural: 'Zeiten', exDe: 'Ich habe keine Zeit.', exEn: 'I have no time.' }),
  entry(67, 'Jahr', 'year', 'noun', { article: 'das', plural: 'Jahre', exDe: 'Dieses Jahr ist kalt.', exEn: 'This year is cold.' }),
  entry(68, 'Tag', 'day', 'noun', { article: 'der', plural: 'Tage', exDe: 'Ein schöner Tag.', exEn: 'A beautiful day.' }),
  entry(69, 'Frau', ['woman', 'wife', 'Mrs'], 'noun', { article: 'die', plural: 'Frauen', exDe: 'Die Frau wartet.', exEn: 'The woman is waiting.' }),
  entry(70, 'Mann', ['man', 'husband'], 'noun', { article: 'der', plural: 'Männer', exDe: 'Der Mann kocht.', exEn: 'The man is cooking.' }),
  entry(71, 'Kind', ['child', 'kid'], 'noun', { article: 'das', plural: 'Kinder', exDe: 'Das Kind lacht.', exEn: 'The child is laughing.' }),
  entry(72, 'Haus', ['house', 'home'], 'noun', { article: 'das', plural: 'Häuser', exDe: 'Das Haus ist alt.', exEn: 'The house is old.' }),
  entry(73, 'Arbeit', ['work', 'job'], 'noun', { article: 'die', plural: 'Arbeiten', exDe: 'Die Arbeit beginnt um acht.', exEn: 'Work starts at eight.' }),
  entry(74, 'Leben', 'life', 'noun', { article: 'das', plural: 'Leben', exDe: 'Das Leben ist kurz.', exEn: 'Life is short.' }),
  entry(75, 'Mensch', ['person', 'human'], 'noun', { article: 'der', plural: 'Menschen', exDe: 'Der Mensch lernt nie aus.', exEn: 'A person never stops learning.' }),
  entry(76, 'Welt', 'world', 'noun', { article: 'die', plural: 'Welten', exDe: 'Die Welt ist groß.', exEn: 'The world is big.' }),
  entry(77, 'Frage', 'question', 'noun', { article: 'die', plural: 'Fragen', exDe: 'Eine gute Frage.', exEn: 'A good question.' }),
  entry(78, 'Weg', ['way', 'path'], 'noun', { article: 'der', plural: 'Wege', exDe: 'Der Weg ist weit.', exEn: 'The way is long.' }),
  entry(79, 'Freund', ['friend', 'boyfriend'], 'noun', { article: 'der', plural: 'Freunde', exDe: 'Mein Freund heißt Max.', exEn: 'My friend’s name is Max.' }),
  entry(80, 'Schule', 'school', 'noun', { article: 'die', plural: 'Schulen', exDe: 'Die Schule ist neu.', exEn: 'The school is new.' }),
  entry(81, 'Buch', 'book', 'noun', { article: 'das', plural: 'Bücher', exDe: 'Ich lese ein Buch.', exEn: 'I am reading a book.' }),
  entry(82, 'Wasser', 'water', 'noun', { article: 'das', plural: 'Wasser', exDe: 'Ein Glas Wasser bitte.', exEn: 'A glass of water, please.' }),
  entry(83, 'Geld', 'money', 'noun', { article: 'das', plural: 'Gelder', exDe: 'Hast du Geld?', exEn: 'Do you have money?' }),
  entry(84, 'Name', 'name', 'noun', { article: 'der', plural: 'Namen', exDe: 'Mein Name ist Lea.', exEn: 'My name is Lea.' }),
  entry(85, 'Land', ['country', 'land'], 'noun', { article: 'das', plural: 'Länder', exDe: 'Deutschland ist ein Land.', exEn: 'Germany is a country.' }),
  entry(86, 'Stadt', ['city', 'town'], 'noun', { article: 'die', plural: 'Städte', exDe: 'Die Stadt ist laut.', exEn: 'The city is loud.' }),
  entry(87, 'heute', 'today', 'adverb', { exDe: 'Heute lerne ich.', exEn: 'Today I am studying.' }),
  entry(88, 'jetzt', 'now', 'adverb', { exDe: 'Jetzt oder nie.', exEn: 'Now or never.' }),
  entry(89, 'immer', 'always', 'adverb', { exDe: 'Ich lerne immer.', exEn: 'I always study.' }),
  entry(90, 'danke', ['thank you', 'thanks'], 'phrase', { exDe: 'Danke schön.', exEn: 'Thank you very much.' }),
  entry(91, 'bitte', ['please', "you're welcome"], 'phrase', { exDe: 'Bitte sehr.', exEn: 'Here you are / you’re welcome.' }),
  entry(92, 'Hallo', 'hello', 'phrase', { exDe: 'Hallo zusammen!', exEn: 'Hello everyone!' }),
  entry(93, 'sehen', ['to see', 'see'], 'verb', { exDe: 'Ich sehe den Bus.', exEn: 'I see the bus.' }),
  entry(94, 'wissen', ['to know', 'know'], 'verb', { note: 'know a fact', exDe: 'Ich weiß das.', exEn: 'I know that.' }),
  entry(95, 'finden', ['to find', 'find'], 'verb', { exDe: 'Ich finde den Schlüssel.', exEn: 'I find the key.' }),
  entry(96, 'lernen', ['to learn', 'learn', 'to study'], 'verb', { exDe: 'Wir lernen Deutsch.', exEn: 'We are learning German.' }),
  entry(97, 'sprechen', ['to speak', 'speak'], 'verb', { exDe: 'Sprichst du Deutsch?', exEn: 'Do you speak German?' }),
  entry(98, 'heißen', ['to be called', 'to be named'], 'verb', { exDe: 'Ich heiße Mira.', exEn: 'My name is Mira.' }),
  entry(99, 'wohnen', ['to live', 'to reside'], 'verb', { exDe: 'Ich wohne in Köln.', exEn: 'I live in Cologne.' }),
  entry(100, 'arbeiten', ['to work', 'work'], 'verb', { exDe: 'Sie arbeitet im Büro.', exEn: 'She works in the office.' }),

  entry(101, 'Familie', 'family', 'noun', { article: 'die', plural: 'Familien', exDe: 'Meine Familie ist klein.', exEn: 'My family is small.' }),
  entry(102, 'Mutter', 'mother', 'noun', { article: 'die', plural: 'Mütter', exDe: 'Meine Mutter kocht.', exEn: 'My mother is cooking.' }),
  entry(103, 'Vater', 'father', 'noun', { article: 'der', plural: 'Väter', exDe: 'Mein Vater liest.', exEn: 'My father is reading.' }),
  entry(104, 'Freundin', ['friend', 'girlfriend'], 'noun', { article: 'die', plural: 'Freundinnen', exDe: 'Das ist meine Freundin.', exEn: 'This is my friend.' }),
  entry(105, 'Junge', 'boy', 'noun', { article: 'der', plural: 'Jungen', exDe: 'Der Junge spielt Fußball.', exEn: 'The boy is playing football.' }),
  entry(106, 'Mädchen', 'girl', 'noun', { article: 'das', plural: 'Mädchen', note: '-chen words are neuter', exDe: 'Das Mädchen liest.', exEn: 'The girl is reading.' }),
  entry(107, 'Bruder', 'brother', 'noun', { article: 'der', plural: 'Brüder', exDe: 'Mein Bruder ist jung.', exEn: 'My brother is young.' }),
  entry(108, 'Schwester', 'sister', 'noun', { article: 'die', plural: 'Schwestern', exDe: 'Meine Schwester singt.', exEn: 'My sister is singing.' }),
  entry(109, 'Eltern', 'parents', 'noun', { article: 'die', plural: 'Eltern', note: 'plural only', exDe: 'Meine Eltern sind nett.', exEn: 'My parents are nice.' }),
  entry(110, 'Lehrer', 'teacher', 'noun', { article: 'der', plural: 'Lehrer', note: 'male teacher; female: die Lehrerin', exDe: 'Der Lehrer erklärt.', exEn: 'The teacher is explaining.' }),
  entry(111, 'Tisch', 'table', 'noun', { article: 'der', plural: 'Tische', exDe: 'Der Tisch ist rund.', exEn: 'The table is round.' }),
  entry(112, 'Stuhl', 'chair', 'noun', { article: 'der', plural: 'Stühle', exDe: 'Der Stuhl ist frei.', exEn: 'The chair is free.' }),
  entry(113, 'Tür', 'door', 'noun', { article: 'die', plural: 'Türen', exDe: 'Die Tür ist offen.', exEn: 'The door is open.' }),
  entry(114, 'Fenster', 'window', 'noun', { article: 'das', plural: 'Fenster', exDe: 'Das Fenster ist groß.', exEn: 'The window is big.' }),
  entry(115, 'Zimmer', 'room', 'noun', { article: 'das', plural: 'Zimmer', exDe: 'Mein Zimmer ist klein.', exEn: 'My room is small.' }),
  entry(116, 'Wohnung', ['apartment', 'flat'], 'noun', { article: 'die', plural: 'Wohnungen', exDe: 'Die Wohnung ist teuer.', exEn: 'The apartment is expensive.' }),
  entry(117, 'Bett', 'bed', 'noun', { article: 'das', plural: 'Betten', exDe: 'Das Bett ist bequem.', exEn: 'The bed is comfortable.' }),
  entry(118, 'Küche', 'kitchen', 'noun', { article: 'die', plural: 'Küchen', exDe: 'Die Küche ist hell.', exEn: 'The kitchen is bright.' }),
  entry(119, 'Bad', ['bathroom', 'bath'], 'noun', { article: 'das', plural: 'Bäder', exDe: 'Wo ist das Bad?', exEn: 'Where is the bathroom?' }),
  entry(120, 'Schlüssel', 'key', 'noun', { article: 'der', plural: 'Schlüssel', exDe: 'Wo ist der Schlüssel?', exEn: 'Where is the key?' }),
  entry(121, 'Hund', 'dog', 'noun', { article: 'der', plural: 'Hunde', exDe: 'Der Hund schläft.', exEn: 'The dog is sleeping.' }),
  entry(122, 'Katze', 'cat', 'noun', { article: 'die', plural: 'Katzen', exDe: 'Die Katze ist schwarz.', exEn: 'The cat is black.' }),
  entry(123, 'Auto', 'car', 'noun', { article: 'das', plural: 'Autos', exDe: 'Das Auto ist rot.', exEn: 'The car is red.' }),
  entry(124, 'Zug', 'train', 'noun', { article: 'der', plural: 'Züge', exDe: 'Der Zug kommt um zehn.', exEn: 'The train comes at ten.' }),
  entry(125, 'Bus', 'bus', 'noun', { article: 'der', plural: 'Busse', exDe: 'Ich nehme den Bus.', exEn: 'I take the bus.' }),
  entry(126, 'Bahnhof', 'train station', 'noun', { article: 'der', plural: 'Bahnhöfe', exDe: 'Wir sind am Bahnhof.', exEn: 'We are at the station.' }),
  entry(127, 'Straße', 'street', 'noun', { article: 'die', plural: 'Straßen', exDe: 'In welcher Straße?', exEn: 'On which street?' }),
  entry(128, 'Platz', ['square', 'place', 'seat'], 'noun', { article: 'der', plural: 'Plätze', exDe: 'Der Platz ist frei.', exEn: 'The seat is free.' }),
  entry(129, 'Park', 'park', 'noun', { article: 'der', plural: 'Parks', exDe: 'Wir gehen in den Park.', exEn: 'We are going to the park.' }),
  entry(130, 'Laden', ['shop', 'store'], 'noun', { article: 'der', plural: 'Läden', exDe: 'Der Laden ist zu.', exEn: 'The shop is closed.' }),
  entry(131, 'Supermarkt', 'supermarket', 'noun', { article: 'der', plural: 'Supermärkte', exDe: 'Ich gehe in den Supermarkt.', exEn: 'I am going to the supermarket.' }),
  entry(132, 'Restaurant', 'restaurant', 'noun', { article: 'das', plural: 'Restaurants', exDe: 'Das Restaurant ist gut.', exEn: 'The restaurant is good.' }),
  entry(133, 'Hotel', 'hotel', 'noun', { article: 'das', plural: 'Hotels', exDe: 'Das Hotel liegt zentral.', exEn: 'The hotel is central.' }),
  entry(134, 'Arzt', 'doctor', 'noun', { article: 'der', plural: 'Ärzte', exDe: 'Ich gehe zum Arzt.', exEn: 'I am going to the doctor.' }),
  entry(135, 'Krankenhaus', 'hospital', 'noun', { article: 'das', plural: 'Krankenhäuser', exDe: 'Das Krankenhaus ist nah.', exEn: 'The hospital is nearby.' }),
  entry(136, 'Brot', 'bread', 'noun', { article: 'das', plural: 'Brote', exDe: 'Das Brot ist frisch.', exEn: 'The bread is fresh.' }),
  entry(137, 'Milch', 'milk', 'noun', { article: 'die', plural: 'Milch', exDe: 'Die Milch ist kalt.', exEn: 'The milk is cold.' }),
  entry(138, 'Kaffee', 'coffee', 'noun', { article: 'der', plural: 'Kaffees', exDe: 'Ein Kaffee bitte.', exEn: 'A coffee, please.' }),
  entry(139, 'Tee', 'tea', 'noun', { article: 'der', plural: 'Tees', exDe: 'Ich trinke Tee.', exEn: 'I drink tea.' }),
  entry(140, 'Apfel', 'apple', 'noun', { article: 'der', plural: 'Äpfel', exDe: 'Der Apfel ist süß.', exEn: 'The apple is sweet.' }),
  entry(141, 'Banane', 'banana', 'noun', { article: 'die', plural: 'Bananen', exDe: 'Eine Banane bitte.', exEn: 'A banana, please.' }),
  entry(142, 'Essen', ['food', 'meal'], 'noun', { id: 'essen-n', article: 'das', plural: 'Essen', exDe: 'Das Essen schmeckt gut.', exEn: 'The food tastes good.' }),
  entry(143, 'Fleisch', 'meat', 'noun', { article: 'das', plural: 'Fleisch', exDe: 'Kein Fleisch, danke.', exEn: 'No meat, thanks.' }),
  entry(144, 'Gemüse', 'vegetables', 'noun', { article: 'das', plural: 'Gemüse', exDe: 'Ich mag Gemüse.', exEn: 'I like vegetables.' }),
  entry(145, 'Ei', 'egg', 'noun', { article: 'das', plural: 'Eier', exDe: 'Ein Ei zum Frühstück.', exEn: 'An egg for breakfast.' }),
  entry(146, 'Wasserflasche', 'water bottle', 'noun', { article: 'die', plural: 'Wasserflaschen', exDe: 'Die Wasserflasche ist leer.', exEn: 'The water bottle is empty.' }),
  entry(147, 'Computer', 'computer', 'noun', { article: 'der', plural: 'Computer', exDe: 'Der Computer ist neu.', exEn: 'The computer is new.' }),
  entry(148, 'Handy', ['phone', 'mobile', 'cell phone'], 'noun', { article: 'das', plural: 'Handys', exDe: 'Wo ist mein Handy?', exEn: 'Where is my phone?' }),
  entry(149, 'Musik', 'music', 'noun', { article: 'die', plural: 'Musiken', exDe: 'Ich höre Musik.', exEn: 'I am listening to music.' }),
  entry(150, 'Film', ['film', 'movie'], 'noun', { article: 'der', plural: 'Filme', exDe: 'Der Film ist spannend.', exEn: 'The movie is exciting.' }),

  entry(151, 'essen', ['to eat', 'eat'], 'verb', { exDe: 'Wir essen um sechs.', exEn: 'We eat at six.' }),
  entry(152, 'trinken', ['to drink', 'drink'], 'verb', { exDe: 'Was trinkst du?', exEn: 'What are you drinking?' }),
  entry(153, 'schlafen', ['to sleep', 'sleep'], 'verb', { exDe: 'Ich schlafe gut.', exEn: 'I sleep well.' }),
  entry(154, 'fahren', ['to drive', 'to go', 'to travel'], 'verb', { exDe: 'Wir fahren nach Berlin.', exEn: 'We are going to Berlin.' }),
  entry(155, 'kaufen', ['to buy', 'buy'], 'verb', { exDe: 'Ich kaufe Brot.', exEn: 'I am buying bread.' }),
  entry(156, 'fragen', ['to ask', 'ask'], 'verb', { exDe: 'Darf ich fragen?', exEn: 'May I ask?' }),
  entry(157, 'antworten', ['to answer', 'answer'], 'verb', { exDe: 'Bitte antworten Sie.', exEn: 'Please answer.' }),
  entry(158, 'lesen', ['to read', 'read'], 'verb', { exDe: 'Ich lese die Zeitung.', exEn: 'I am reading the newspaper.' }),
  entry(159, 'schreiben', ['to write', 'write'], 'verb', { exDe: 'Schreib eine Karte.', exEn: 'Write a card.' }),
  entry(160, 'hören', ['to hear', 'to listen'], 'verb', { exDe: 'Hörst du mich?', exEn: 'Can you hear me?' }),
  entry(161, 'verstehen', ['to understand', 'understand'], 'verb', { exDe: 'Ich verstehe das.', exEn: 'I understand that.' }),
  entry(162, 'brauchen', ['to need', 'need'], 'verb', { exDe: 'Ich brauche Hilfe.', exEn: 'I need help.' }),
  entry(163, 'helfen', ['to help', 'help'], 'verb', { exDe: 'Kannst du helfen?', exEn: 'Can you help?' }),
  entry(164, 'spielen', ['to play', 'play'], 'verb', { exDe: 'Die Kinder spielen.', exEn: 'The children are playing.' }),
  entry(165, 'nehmen', ['to take', 'take'], 'verb', { exDe: 'Nimm Platz.', exEn: 'Have a seat.' }),
  entry(166, 'bleiben', ['to stay', 'stay'], 'verb', { exDe: 'Ich bleibe hier.', exEn: 'I am staying here.' }),
  entry(167, 'sollen', ['should', 'to be supposed to'], 'verb', { exDe: 'Du sollst warten.', exEn: 'You should wait.' }),
  entry(168, 'dürfen', ['may', 'to be allowed to'], 'verb', { exDe: 'Darf ich?', exEn: 'May I?' }),
  entry(169, 'mögen', ['to like', 'like'], 'verb', { exDe: 'Ich mag Tee.', exEn: 'I like tea.' }),
  entry(170, 'kennen', ['to know', 'know'], 'verb', { note: 'know a person/place', exDe: 'Ich kenne ihn.', exEn: 'I know him.' }),
  entry(171, 'denken', ['to think', 'think'], 'verb', { exDe: 'Was denkst du?', exEn: 'What do you think?' }),
  entry(172, 'glauben', ['to believe', 'believe'], 'verb', { exDe: 'Ich glaube dir.', exEn: 'I believe you.' }),
  entry(173, 'aufstehen', ['to get up', 'get up'], 'verb', { note: 'separable: stehe … auf', exDe: 'Ich stehe um sieben auf.', exEn: 'I get up at seven.' }),
  entry(174, 'ankommen', ['to arrive', 'arrive'], 'verb', { note: 'separable: komme … an', exDe: 'Wann kommst du an?', exEn: 'When do you arrive?' }),
  entry(175, 'alt', 'old', 'adjective', { exDe: 'Das Haus ist alt.', exEn: 'The house is old.' }),
  entry(176, 'jung', 'young', 'adjective', { exDe: 'Sie ist jung.', exEn: 'She is young.' }),
  entry(177, 'schön', ['beautiful', 'nice', 'pretty'], 'adjective', { exDe: 'Ein schöner Tag.', exEn: 'A beautiful day.' }),
  entry(178, 'langsam', 'slow', 'adjective', { exDe: 'Bitte langsam.', exEn: 'Slowly, please.' }),
  entry(179, 'schnell', ['fast', 'quick'], 'adjective', { exDe: 'Der Zug ist schnell.', exEn: 'The train is fast.' }),
  entry(180, 'teuer', 'expensive', 'adjective', { exDe: 'Das ist teuer.', exEn: 'That is expensive.' }),
  entry(181, 'billig', ['cheap', 'inexpensive'], 'adjective', { exDe: 'Der Kaffee ist billig.', exEn: 'The coffee is cheap.' }),
  entry(182, 'warm', 'warm', 'adjective', { exDe: 'Es ist warm.', exEn: 'It is warm.' }),
  entry(183, 'kalt', 'cold', 'adjective', { exDe: 'Mir ist kalt.', exEn: 'I am cold.' }),
  entry(184, 'richtig', ['right', 'correct'], 'adjective', { exDe: 'Das ist richtig.', exEn: 'That is correct.' }),
  entry(185, 'falsch', 'wrong', 'adjective', { exDe: 'Das ist falsch.', exEn: 'That is wrong.' }),
  entry(186, 'rot', 'red', 'adjective', { exDe: 'Ein rotes Auto.', exEn: 'A red car.' }),
  entry(187, 'blau', 'blue', 'adjective', { exDe: 'Der Himmel ist blau.', exEn: 'The sky is blue.' }),
  entry(188, 'grün', 'green', 'adjective', { exDe: 'Grünes Licht.', exEn: 'Green light.' }),
  entry(189, 'schwarz', 'black', 'adjective', { exDe: 'Ein schwarzer Hund.', exEn: 'A black dog.' }),
  entry(190, 'weiß', 'white', 'adjective', { exDe: 'Weißer Schnee.', exEn: 'White snow.' }),
  entry(191, 'Hilfe', 'help', 'noun', { article: 'die', plural: 'Hilfen', exDe: 'Hilfe!', exEn: 'Help!' }),
  entry(192, 'Problem', 'problem', 'noun', { article: 'das', plural: 'Probleme', exDe: 'Kein Problem.', exEn: 'No problem.' }),
  entry(193, 'Idee', 'idea', 'noun', { article: 'die', plural: 'Ideen', exDe: 'Gute Idee!', exEn: 'Good idea!' }),
  entry(194, 'Sprache', 'language', 'noun', { article: 'die', plural: 'Sprachen', exDe: 'Deutsch ist eine Sprache.', exEn: 'German is a language.' }),
  entry(195, 'Beispiel', 'example', 'noun', { article: 'das', plural: 'Beispiele', exDe: 'Zum Beispiel.', exEn: 'For example.' }),
  entry(196, 'Zeitung', 'newspaper', 'noun', { article: 'die', plural: 'Zeitungen', exDe: 'Ich lese die Zeitung.', exEn: 'I read the newspaper.' }),
  entry(197, 'Uhr', ['clock', 'watch', "o'clock"], 'noun', { article: 'die', plural: 'Uhren', exDe: 'Es ist drei Uhr.', exEn: 'It is three o’clock.' }),
  entry(198, 'Stunde', ['hour', 'class'], 'noun', { article: 'die', plural: 'Stunden', exDe: 'Eine Stunde später.', exEn: 'An hour later.' }),
  entry(199, 'Minute', 'minute', 'noun', { article: 'die', plural: 'Minuten', exDe: 'Fünf Minuten.', exEn: 'Five minutes.' }),
  entry(200, 'Woche', 'week', 'noun', { article: 'die', plural: 'Wochen', exDe: 'Nächste Woche.', exEn: 'Next week.' }),

  entry(201, 'eins', 'one', 'number', { exDe: 'Eins, zwei, drei.', exEn: 'One, two, three.' }),
  entry(202, 'zwei', 'two', 'number', { exDe: 'Zwei Kaffee bitte.', exEn: 'Two coffees, please.' }),
  entry(203, 'drei', 'three', 'number', { exDe: 'Drei Tage.', exEn: 'Three days.' }),
  entry(204, 'vier', 'four', 'number', { exDe: 'Vier Stühle.', exEn: 'Four chairs.' }),
  entry(205, 'fünf', 'five', 'number', { exDe: 'Fünf Euro.', exEn: 'Five euros.' }),
  entry(206, 'sechs', 'six', 'number', { exDe: 'Um sechs Uhr.', exEn: 'At six o’clock.' }),
  entry(207, 'sieben', 'seven', 'number', { exDe: 'Sieben Tage.', exEn: 'Seven days.' }),
  entry(208, 'acht', 'eight', 'number', { exDe: 'Acht Stunden.', exEn: 'Eight hours.' }),
  entry(209, 'neun', 'nine', 'number', { exDe: 'Neun Uhr.', exEn: 'Nine o’clock.' }),
  entry(210, 'zehn', 'ten', 'number', { exDe: 'Zehn Minuten.', exEn: 'Ten minutes.' }),
  entry(211, 'Montag', 'Monday', 'noun', { article: 'der', plural: 'Montage', exDe: 'Am Montag arbeite ich.', exEn: 'I work on Monday.' }),
  entry(212, 'Dienstag', 'Tuesday', 'noun', { article: 'der', plural: 'Dienstage', exDe: 'Dienstag ist frei.', exEn: 'Tuesday is free.' }),
  entry(213, 'Mittwoch', 'Wednesday', 'noun', { article: 'der', plural: 'Mittwoche', exDe: 'Mittwochabend.', exEn: 'Wednesday evening.' }),
  entry(214, 'Donnerstag', 'Thursday', 'noun', { article: 'der', plural: 'Donnerstage', exDe: 'Bis Donnerstag.', exEn: 'Until Thursday.' }),
  entry(215, 'Freitag', 'Friday', 'noun', { article: 'der', plural: 'Freitage', exDe: 'Freitagabend.', exEn: 'Friday evening.' }),
  entry(216, 'Samstag', 'Saturday', 'noun', { article: 'der', plural: 'Samstage', exDe: 'Am Samstag schlafe ich aus.', exEn: 'On Saturday I sleep in.' }),
  entry(217, 'Sonntag', 'Sunday', 'noun', { article: 'der', plural: 'Sonntage', exDe: 'Sonntag ist Ruhetag.', exEn: 'Sunday is a rest day.' }),
  entry(218, 'Morgen', ['morning', 'tomorrow'], 'noun', { article: 'der', plural: 'Morgen', note: 'der Morgen = morning; morgen = tomorrow', exDe: 'Guten Morgen!', exEn: 'Good morning!' }),
  entry(219, 'Abend', 'evening', 'noun', { article: 'der', plural: 'Abende', exDe: 'Guten Abend.', exEn: 'Good evening.' }),
  entry(220, 'Nacht', 'night', 'noun', { article: 'die', plural: 'Nächte', exDe: 'Gute Nacht.', exEn: 'Good night.' }),
  entry(221, 'Monat', 'month', 'noun', { article: 'der', plural: 'Monate', exDe: 'Nächster Monat.', exEn: 'Next month.' }),
  entry(222, 'Wetter', 'weather', 'noun', { article: 'das', plural: 'Wetter', exDe: 'Das Wetter ist schön.', exEn: 'The weather is nice.' }),
  entry(223, 'Sonne', 'sun', 'noun', { article: 'die', plural: 'Sonnen', exDe: 'Die Sonne scheint.', exEn: 'The sun is shining.' }),
  entry(224, 'Regen', 'rain', 'noun', { article: 'der', plural: 'Regen', exDe: 'Viel Regen heute.', exEn: 'A lot of rain today.' }),
  entry(225, 'Guten Tag', 'good day', 'phrase', { exDe: 'Guten Tag, Frau Klein.', exEn: 'Good day, Ms Klein.' }),
  entry(226, 'Tschüss', ['bye', 'cheers'], 'phrase', { exDe: 'Tschüss!', exEn: 'Bye!' }),
  entry(227, 'Auf Wiedersehen', 'goodbye', 'phrase', { exDe: 'Auf Wiedersehen.', exEn: 'Goodbye.' }),
  entry(228, 'Entschuldigung', ['excuse me', 'sorry'], 'phrase', { exDe: 'Entschuldigung, wo ist der Bahnhof?', exEn: 'Excuse me, where is the station?' }),
  entry(229, 'Bitte schön', ["you're welcome", 'here you are'], 'phrase', { exDe: 'Bitte schön.', exEn: 'You’re welcome / here you are.' }),
  entry(230, 'Wie geht’s', ['how are you', "how's it going"], 'phrase', { exDe: 'Wie geht’s dir?', exEn: 'How are you?' }),
  entry(231, 'Bild', ['picture', 'image'], 'noun', { article: 'das', plural: 'Bilder', exDe: 'Ein schönes Bild.', exEn: 'A nice picture.' }),
  entry(232, 'Farbe', 'color', 'noun', { article: 'die', plural: 'Farben', exDe: 'Welche Farbe?', exEn: 'Which color?' }),
  entry(233, 'Zahl', 'number', 'noun', { article: 'die', plural: 'Zahlen', exDe: 'Eine große Zahl.', exEn: 'A large number.' }),
  entry(234, 'Euro', 'euro', 'noun', { article: 'der', plural: 'Euro', exDe: 'Zehn Euro bitte.', exEn: 'Ten euros, please.' }),
  entry(235, 'Preis', ['price', 'prize'], 'noun', { article: 'der', plural: 'Preise', exDe: 'Der Preis ist hoch.', exEn: 'The price is high.' }),
  entry(236, 'Tasche', ['bag', 'purse'], 'noun', { article: 'die', plural: 'Taschen', exDe: 'Die Tasche ist schwer.', exEn: 'The bag is heavy.' }),
  entry(237, 'Jacke', 'jacket', 'noun', { article: 'die', plural: 'Jacken', exDe: 'Die Jacke ist warm.', exEn: 'The jacket is warm.' }),
  entry(238, 'Schuh', 'shoe', 'noun', { article: 'der', plural: 'Schuhe', exDe: 'Die Schuhe sind neu.', exEn: 'The shoes are new.' }),
  entry(239, 'Kopf', 'head', 'noun', { article: 'der', plural: 'Köpfe', exDe: 'Mein Kopf tut weh.', exEn: 'My head hurts.' }),
  entry(240, 'Hand', 'hand', 'noun', { article: 'die', plural: 'Hände', exDe: 'Die Hand ist kalt.', exEn: 'The hand is cold.' }),
  entry(241, 'Auge', 'eye', 'noun', { article: 'das', plural: 'Augen', exDe: 'Blaue Augen.', exEn: 'Blue eyes.' }),
  entry(242, 'Fahrrad', 'bicycle', 'noun', { article: 'das', plural: 'Fahrräder', exDe: 'Ich fahre Fahrrad.', exEn: 'I ride a bicycle.' }),
  entry(243, 'Flugzeug', 'airplane', 'noun', { article: 'das', plural: 'Flugzeuge', exDe: 'Das Flugzeug startet.', exEn: 'The airplane is taking off.' }),
  entry(244, 'Ticket', ['ticket', 'fare'], 'noun', { article: 'das', plural: 'Tickets', exDe: 'Wo ist das Ticket?', exEn: 'Where is the ticket?' }),
  entry(245, 'Karte', ['card', 'map', 'menu', 'ticket'], 'noun', { article: 'die', plural: 'Karten', exDe: 'Die Karte bitte.', exEn: 'The menu/map, please.' }),
  entry(246, 'Aufgabe', ['task', 'exercise', 'homework'], 'noun', { article: 'die', plural: 'Aufgaben', exDe: 'Die Aufgabe ist leicht.', exEn: 'The exercise is easy.' }),
  entry(247, 'Antwort', 'answer', 'noun', { article: 'die', plural: 'Antworten', exDe: 'Die Antwort ist ja.', exEn: 'The answer is yes.' }),
  entry(248, 'Leute', ['people', 'folks'], 'noun', { article: 'die', plural: 'Leute', note: 'plural', exDe: 'Viele Leute warten.', exEn: 'Many people are waiting.' }),
  entry(249, 'Deutsch', 'German', 'noun', { article: 'das', plural: 'Deutsch', note: 'the language', exDe: 'Ich lerne Deutsch.', exEn: 'I am learning German.' }),
  entry(250, 'Deutschland', 'Germany', 'noun', { article: 'das', plural: 'Deutschland', exDe: 'Ich wohne in Deutschland.', exEn: 'I live in Germany.' }),

  entry(251, 'weil', 'because', 'conjunction', { exDe: 'Ich bleibe, weil ich krank bin.', exEn: 'I stay because I am ill.' }),
  entry(252, 'Miete', 'rent', 'noun', { article: 'die', plural: 'Mieten', exDe: 'Die Miete ist hoch.', exEn: 'The rent is high.' }),
  entry(253, 'Nachbar', 'neighbour', 'noun', { article: 'der', plural: 'Nachbarn', exDe: 'Der Nachbar ist nett.', exEn: 'The neighbour is nice.' }),
  entry(254, 'Möbel', 'furniture', 'noun', { id: 'moebel', article: 'die', plural: 'Möbel', note: 'plural', exDe: 'Die Möbel sind neu.', exEn: 'The furniture is new.' }),
  entry(255, 'anrufen', ['to call', 'to phone'], 'verb', { exDe: 'Bitte ruf mich an.', exEn: 'Please call me.' }),
  entry(256, 'Termin', 'appointment', 'noun', { article: 'der', plural: 'Termine', exDe: 'Ich habe einen Termin.', exEn: 'I have an appointment.' }),
  entry(257, 'krank', 'ill', 'adjective', { exDe: 'Ich bin krank.', exEn: 'I am ill.' }),
  entry(258, 'Büro', 'office', 'noun', { id: 'buero', article: 'das', plural: 'Büros', exDe: 'Sie arbeitet im Büro.', exEn: 'She works in the office.' }),
  entry(259, 'Kollege', 'colleague', 'noun', { article: 'der', plural: 'Kollegen', note: 'female: die Kollegin', exDe: 'Mein Kollege hilft mir.', exEn: 'My colleague helps me.' }),
  entry(260, 'Chef', 'boss', 'noun', { article: 'der', plural: 'Chefs', note: 'female: die Chefin', exDe: 'Der Chef ist freundlich.', exEn: 'The boss is friendly.' }),
  entry(261, 'Kurs', 'course', 'noun', { article: 'der', plural: 'Kurse', exDe: 'Der Kurs beginnt um sechs.', exEn: 'The course starts at six.' }),
  entry(262, 'gesucht', 'wanted', 'adjective', { exDe: 'Babysitter gesucht.', exEn: 'Babysitter wanted.' }),
  entry(263, 'treffen', ['to meet', 'meet'], 'verb', { exDe: 'Wir treffen uns am Bahnhof.', exEn: 'We meet at the station.' }),
  entry(264, 'Nummer', 'number', 'noun', { article: 'die', plural: 'Nummern', exDe: 'Meine Nummer ist neu.', exEn: 'My number is new.' }),
  entry(265, 'Meinung', 'opinion', 'noun', { article: 'die', plural: 'Meinungen', exDe: 'Das ist meine Meinung.', exEn: 'That is my opinion.' }),
  entry(266, 'Grund', 'reason', 'noun', { article: 'der', plural: 'Gründe', exDe: 'Ein guter Grund.', exEn: 'A good reason.' }),
  entry(267, 'wichtig', 'important', 'adjective', { exDe: 'Das ist wichtig.', exEn: 'That is important.' }),
  entry(268, 'deshalb', ['therefore', 'that is why'], 'adverb', { exDe: 'Ich bin müde, deshalb bleibe ich.', exEn: 'I am tired, that is why I stay.' }),
  entry(269, 'Nachricht', ['message', 'news item'], 'noun', { article: 'die', plural: 'Nachrichten', exDe: 'Ich habe deine Nachricht gelesen.', exEn: 'I read your message.' }),
  entry(270, 'Internet', 'internet', 'noun', { article: 'das', plural: 'Internet', exDe: 'Ich suche im Internet.', exEn: 'I search on the internet.' }),
  entry(271, 'Prüfung', 'exam', 'noun', { article: 'die', plural: 'Prüfungen', exDe: 'Die Prüfung ist am Montag.', exEn: 'The exam is on Monday.' }),
  entry(272, 'deswegen', 'therefore', 'adverb', { exDe: 'Es regnet, deswegen bleibe ich.', exEn: 'It is raining, therefore I stay.' }),
  entry(273, 'trotzdem', 'nevertheless', 'adverb', { exDe: 'Ich bin müde. Trotzdem arbeite ich.', exEn: 'I am tired. Nevertheless I work.' }),
  entry(274, 'obwohl', 'although', 'conjunction', { exDe: 'Obwohl es regnet, gehen wir.', exEn: 'Although it is raining, we go.' }),
  entry(275, 'Antrag', ['application', 'request'], 'noun', { article: 'der', plural: 'Anträge', exDe: 'Ich stelle einen Antrag.', exEn: 'I submit an application.' }),
  entry(276, 'Frist', 'deadline', 'noun', { article: 'die', plural: 'Fristen', exDe: 'Die Frist ist Freitag.', exEn: 'The deadline is Friday.' }),
  entry(277, 'Umwelt', 'environment', 'noun', { article: 'die', plural: 'Umwelten', note: 'usually uncountable', exDe: 'Wir schützen die Umwelt.', exEn: 'We protect the environment.' }),
  entry(278, 'Gesetz', 'law', 'noun', { article: 'das', plural: 'Gesetze', exDe: 'Das Gesetz wurde geändert.', exEn: 'The law was changed.' }),
  entry(279, 'Bewerbung', 'application (job)', 'noun', { article: 'die', plural: 'Bewerbungen', exDe: 'Meine Bewerbung ist fertig.', exEn: 'My application is ready.' }),
  entry(280, 'Erfahrung', 'experience', 'noun', { article: 'die', plural: 'Erfahrungen', exDe: 'Sie hat viel Erfahrung.', exEn: 'She has a lot of experience.' }),
  entry(281, 'Ziel', 'goal', 'noun', { article: 'das', plural: 'Ziele', exDe: 'Mein Ziel ist B2.', exEn: 'My goal is B2.' }),
  entry(282, 'Vortrag', ['talk', 'lecture'], 'noun', { article: 'der', plural: 'Vorträge', exDe: 'Der Vortrag war klar.', exEn: 'The talk was clear.' }),
  entry(283, 'Heimat', 'home / belonging', 'noun', { article: 'die', plural: 'Heimaten', note: 'rarely plural', exDe: 'Heimat ist für mich Sprache.', exEn: 'Home, for me, is language.' }),
  entry(284, 'Rückruf', 'callback', 'noun', { id: 'rueckruf', article: 'der', plural: 'Rückrufe', exDe: 'Bitte um einen Rückruf.', exEn: 'Please call back.' }),
  entry(285, 'Ausbildung', 'vocational training', 'noun', { article: 'die', plural: 'Ausbildungen', exDe: 'Die Ausbildung dauert drei Jahre.', exEn: 'The training lasts three years.' }),
]

const byId = new Map(words.map((word) => [word.id, word]))

export function getWord(id) {
  return byId.get(id)
}

export function getWordsByIds(ids) {
  return ids.map((id) => byId.get(id)).filter(Boolean)
}

export function byRank(limit) {
  return words.filter((word) => word.rank <= limit).sort((a, b) => a.rank - b.rank)
}

export const top100 = byRank(100)
export const top250 = byRank(250)
export const top300 = byRank(300)

export const nounsWithGender = words.filter((word) => word.pos === 'noun' && word.article)

export const translatable = words.filter((word) =>
  ['noun', 'verb', 'adjective', 'adverb', 'number', 'phrase'].includes(word.pos),
)

export function searchWords(query) {
  const needle = foldGerman(query)
  if (!needle) return []
  return words.filter((word) => {
    const hay = [word.de, word.id, ...(word.en || []), word.article || '', word.note || '']
    return hay.some((part) => foldGerman(part).includes(needle))
  })
}

export function displayHeadword(word) {
  if (word.pos === 'noun' && word.article) return `${word.article} ${word.de}`
  return word.de
}

const lookupCache = new Map()

async function fetchJson(url, timeoutMs) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(url, { signal: controller.signal })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  } finally {
    clearTimeout(timer)
  }
}

function meaningsFromWiktionary(payload) {
  const meanings = []
  for (const pack of Object.values(payload || {})) {
    for (const block of pack) {
      for (const def of block.definitions || []) {
        const definition = String(def.definition || '').replace(/<[^>]+>/g, '')
        if (definition) {
          meanings.push({
            pos: block.partOfSpeech || '',
            definition,
            example: '',
          })
        }
      }
    }
  }
  return meanings
}

export async function lookupOnline(term) {
  const clean = String(term).trim()
  if (!clean) throw new Error('Type a word first.')

  const cacheKey = foldGerman(clean)
  if (lookupCache.has(cacheKey)) return lookupCache.get(cacheKey)

  const wiki = await fetchJson(
    `https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(clean)}`,
    4000,
  )
  const meanings = meaningsFromWiktionary(wiki)
  if (!meanings.length) throw new Error('No online entry found.')

  const result = { source: 'Wiktionary', meanings }
  lookupCache.set(cacheKey, result)
  return result
}

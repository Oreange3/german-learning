/** Short original sentences for the translation game. The first line of each side is the prompt. */

function line(id, level, de, en) {
  return {
    id,
    level,
    de: Array.isArray(de) ? de : [de],
    en: Array.isArray(en) ? en : [en],
  }
}

export const sentenceLevels = ['A1', 'A2', 'B1']

export const translateSentences = [
  line('a1-name', 'A1', 'Ich heiße Mira.', ['My name is Mira.', 'I am called Mira.', "I'm called Mira."]),
  line('a1-live', 'A1', 'Ich wohne in Köln.', ['I live in Cologne.', 'I live in Köln.']),
  line('a1-learn', 'A1', 'Ich lerne Deutsch.', ['I am learning German.', 'I learn German.', "I'm learning German."]),
  line('a1-child', 'A1', 'Das Kind spielt.', ['The child is playing.', 'The child plays.']),
  line('a1-time', 'A1', 'Ich habe Zeit.', 'I have time.'),
  line('a1-tired', 'A1', 'Ich bin müde.', ['I am tired.', "I'm tired."]),
  line('a1-rain', 'A1', 'Es regnet.', ['It is raining.', "It's raining.", 'It rains.']),
  line('a1-home', 'A1', 'Ich gehe nach Hause.', ['I am going home.', 'I go home.', "I'm going home."]),
  line('a1-woman', 'A1', 'Die Frau kommt.', ['The woman is coming.', 'The woman comes.']),
  line('a1-coffee', 'A1', 'Ich trinke Kaffee.', ['I drink coffee.', 'I am drinking coffee.', "I'm drinking coffee."]),
  line('a1-book', 'A1', 'Das Buch liegt auf dem Tisch.', [
    'The book is on the table.',
    'The book is lying on the table.',
    'The book lies on the table.',
  ]),
  line('a1-money', 'A1', 'Ich habe kein Geld.', [
    'I have no money.',
    "I don't have any money.",
    'I do not have any money.',
    "I don't have money.",
    'I do not have money.',
  ]),
  line('a1-today', 'A1', ['Heute lerne ich.', 'Ich lerne heute.'], [
    'Today I am studying.',
    'Today I study.',
    'Today I am learning.',
    "Today I'm learning.",
    "Today I'm studying.",
  ]),
  line('a1-we', 'A1', 'Wir lernen Deutsch.', ['We are learning German.', 'We learn German.', "We're learning German."]),
  line('a1-cook', 'A1', 'Der Mann kocht.', ['The man is cooking.', 'The man cooks.']),
  line('a1-not-here', 'A1', 'Ich bin nicht hier.', ['I am not here.', "I'm not here."]),

  line('a2-up', 'A2', ['Ich stehe um sieben Uhr auf.', 'Ich stehe um 7 Uhr auf.'], [
    'I get up at seven.',
    "I get up at seven o'clock.",
    'I get up at 7.',
    "I get up at 7 o'clock.",
  ]),
  line('a2-bread', 'A2', 'Sie will heute Brot kaufen.', 'She wants to buy bread today.'),
  line('a2-pizza', 'A2', 'Wir haben gestern Pizza gegessen.', ['We ate pizza yesterday.', 'Yesterday we ate pizza.']),
  line('a2-come', 'A2', 'Kannst du morgen kommen?', 'Can you come tomorrow?'),
  line('a2-know', 'A2', 'Ich weiß, dass du kommst.', [
    'I know that you are coming.',
    "I know that you're coming.",
    "I know you're coming.",
  ]),
  line(
    'a2-if-rain',
    'A2',
    ['Wenn es regnet, bleibe ich zu Hause.', 'Ich bleibe zu Hause, wenn es regnet.', 'Wenn es regnet, bleibe ich zuhause.'],
    ['If it rains, I stay at home.', 'If it rains, I stay home.', "If it rains, I'm staying home."],
  ),
  line(
    'a2-after-school',
    'A2',
    ['Nach der Schule trifft er seinen Freund.', 'Er trifft seinen Freund nach der Schule.'],
    ['After school he meets his friend.', 'After school, he meets his friend.', 'He meets his friend after school.'],
  ),
  line('a2-morning-coffee', 'A2', ['Morgens trinke ich Kaffee.', 'Ich trinke morgens Kaffee.'], [
    'In the morning I drink coffee.',
    'I drink coffee in the morning.',
  ]),
  line('a2-no-time', 'A2', 'Ich habe keine Zeit.', ["I have no time.", "I don't have time.", 'I do not have time.']),
  line('a2-office', 'A2', 'Sie arbeitet im Büro.', [
    'She works in the office.',
    'She is working in the office.',
    "She's working in the office.",
  ]),
  line('a2-spain', 'A2', 'Ich komme aus Spanien.', ['I come from Spain.', 'I am from Spain.', "I'm from Spain."]),
  line('a2-music', 'A2', 'Wir sprechen über Musik.', [
    'We are talking about music.',
    'We talk about music.',
    "We're talking about music.",
  ]),

  line('b1-sick', 'B1', ['Ich bleibe zu Hause, weil ich krank bin.', 'Weil ich krank bin, bleibe ich zu Hause.'], [
    'I am staying home because I am sick.',
    "I'm staying home because I'm sick.",
    'I stay at home because I am ill.',
    'I am staying at home because I am sick.',
  ]),
  line(
    'b1-although',
    'B1',
    ['Obwohl es regnet, gehen wir in den Park.', 'Wir gehen in den Park, obwohl es regnet.'],
    [
      'Although it is raining, we are going to the park.',
      "Although it's raining, we're going to the park.",
      'Even though it is raining, we are going to the park.',
    ],
  ),
  line('b1-film', 'B1', 'Der Film, den wir gestern gesehen haben, war sehr gut.', [
    'The film that we saw yesterday was very good.',
    'The film we saw yesterday was very good.',
    'The movie that we saw yesterday was very good.',
    'The movie we saw yesterday was very good.',
  ]),
  line('b1-station', 'B1', 'Kannst du mir sagen, wo der Bahnhof ist?', [
    'Can you tell me where the station is?',
    'Can you tell me where the train station is?',
  ]),
  line('b1-cook', 'B1', ['Wenn ich Zeit habe, koche ich.', 'Ich koche, wenn ich Zeit habe.'], [
    'When I have time, I cook.',
    'If I have time, I cook.',
    'I cook when I have time.',
  ]),
  line('b1-train', 'B1', 'Sie hat mir gesagt, dass der Zug Verspätung hat.', [
    'She told me that the train is delayed.',
    'She told me the train is delayed.',
    'She said that the train is delayed.',
  ]),
  line(
    'b1-order',
    'B1',
    ['Ich möchte einen Kaffee bestellen.', 'Ich würde gern einen Kaffee bestellen.', 'Ich würde gerne einen Kaffee bestellen.'],
    ['I would like to order a coffee.', "I'd like to order a coffee."],
  ),
  line(
    'b1-bill',
    'B1',
    ['Bevor wir gehen, müssen wir die Rechnung bezahlen.', 'Wir müssen die Rechnung bezahlen, bevor wir gehen.'],
    [
      'Before we leave, we have to pay the bill.',
      'Before we go, we have to pay the bill.',
      'Before we leave, we must pay the bill.',
    ],
  ),
  line('b1-got-up', 'B1', ['Er ist um sieben aufgestanden.', 'Er ist um sieben Uhr aufgestanden.', 'Er ist um 7 aufgestanden.'], [
    'He got up at seven.',
    "He got up at seven o'clock.",
    'He got up at 7.',
  ]),
  line('b1-key', 'B1', ['Ich kann den Schlüssel nicht finden.', 'Ich finde den Schlüssel nicht.'], [
    "I can't find the key.",
    'I cannot find the key.',
    'I can not find the key.',
  ]),
]

export function sentencesFor(level) {
  if (!level || level === 'all') return translateSentences
  return translateSentences.filter((item) => item.level === level)
}

export function promptFor(sentence, direction) {
  const lines = direction === 'de-en' ? sentence.de : sentence.en
  return lines[0]
}

export function acceptedFor(sentence, direction) {
  return direction === 'de-en' ? sentence.en : sentence.de
}

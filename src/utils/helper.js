var nameList = [
    'Mike', 'Past', 'Future', 'Dev',
    'Bob', 'Flying', 'George', 'Soaring', 'Tim', '',
    'Fall Shon', 'Jump', 'Cliffton', 'Mount Mark', 'Rend', 'Red Panda', 'Blue Whale',
    'Green', 'Ram', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Abhijit', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Roy', 'Worst', 'Trump', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Babu', 'Rotten', 'Sham', 'Jodu', 'Madhu', 'Cameron', 'Rooster',
    'Sandenbarg', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Smack', 'Shorner', 'Talle', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zomi', 'Sarge', 'Capt', 'Captain', 'Punc Twin', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
  ];
  
  const texts = [
    'Oh Noo!!', 'You lost!', 'Try a next time!!',
    'Hi','Wow!! Awsome Video','what a view 😍😍😍',
    'Amazing....','Lol..','💀💀💀💀','Not good 😐','Satisfactory 😌',
    'How are you guys?','Hey hello','everyone looks sleepy 💤','​hey hey hope you all ok'
  ];

export function randomNameGenerator() {
    return nameList[Math.floor( Math.random() * nameList.length )];
 };

 export function randomTextGenrator(){
    return texts[Math.floor(Math.random() * texts.length)];
 }
 
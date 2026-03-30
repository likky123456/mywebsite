// ====== Letter Content ======
const letter = `
Manu… ❤️

Since 8th standard, our story began…
Every day with you was a new memory, a new smile, a new reason to feel alive 🌸

We met countless times, laughed till our cheeks hurt, shared our secrets, dreams, and little joys 💖
Then came the misunderstanding… the storm that neither of us expected 💔
The arguments, the silence, the distance… it hurt more than I can say 😢

When you came back and proposed… I pushed you away 😔
Not because I didn’t love you…
I honestly didn’t understand my own feelings at that moment 💭
I was confused, scared, maybe even stubborn… but deep down, my heart was always yours 💞

Through everything… I finally understood 🥺
I opened my heart to you, not because I had to, but because it has always belonged to you ❤️

You are one of a kind—the only person like you I’ve ever seen 🌟
Your kindness, your care, even your anger… every little part of you, I’ve cherished and loved with all my heart 💖
It’s everything about you that makes me fall for you again and again…
You are my heart, my joy, my everything 🥺❤️

I love you more than words can ever express, more than time, more than anything in this world 💞
Every heartbeat whispers your name, every thought turns to you, every dream has you in it 🥰
You are my first thought in the morning, my last thought at night…
And no matter what happens, my love for you will never fade 💖

You are my past, my present, my future…
The one who makes life brighter, who makes me feel complete, who makes every moment worth living ✨
Manu… I love you. I always have, and I always will 🥺❤️
`;

// ====== PASSWORD CHECK ======
function checkPassword() {
  const pass = document.getElementById('pass').value.trim();
  if(pass === "magalu") {
    // Hide login and hint
    document.getElementById('lock').classList.remove('active');
    document.getElementById('hint').style.display = 'none';
    document.getElementById('home').classList.add('active');

    // Play music
    const music = document.getElementById('music');
    music.volume = 0;
    music.play();
    fadeInMusic(music);

    // Start typing
    startTyping();
    createHearts(); // floating hearts
  } else {
    alert("Wrong password 😢");
  }
}

// ====== FADE IN MUSIC ======
function fadeInMusic(audio) {
  let vol = 0;
  const interval = setInterval(() => {
    if(vol < 1){ vol += 0.02; audio.volume = vol; }
    else clearInterval(interval);
  }, 100);
}

// ====== TYPING ANIMATION ======
function startTyping() {
  const textEl = document.getElementById('letter-text');
  textEl.innerHTML = '';
  let i = 0;
  const speed = 25;

  function type() {
    if(i < letter.length){
      let char = letter.charAt(i);
      if('✨❤️💞💔🥺💖🌸🌟😢😔💭🥰'.includes(char)){
        textEl.innerHTML += `<span class="highlight rainbow">${char}</span>`;
      } else {
        textEl.innerHTML += char;
      }
      if(Math.random() < 0.02) createWordSparkle(textEl); // occasional sparkles
      i++;
      setTimeout(type, speed);
    } else {
      // After typing complete
      setTimeout(transformWordsToPhoto, 500);
    }
  }
  type();
}

// ====== FLOATING HEARTS ======
function createHearts() {
  const container = document.querySelector('.floating-hearts');
  container.innerHTML = '';
  for(let i=0; i<20; i++) {
    let heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = 4 + Math.random() * 3 + 's';
    heart.style.width = 10 + Math.random() * 15 + 'px';
    heart.style.height = heart.style.width;
    container.appendChild(heart);
  }
}

// ====== SPARKLES DURING TYPING ======
function createWordSparkle(parent){
  const sparkle = document.createElement('div');
  sparkle.className = 'word-sparkle';
  sparkle.style.left = Math.random() * 90 + '%';
  sparkle.style.top = Math.random() * 90 + '%';
  document.querySelector('.sparkle-container').appendChild(sparkle);
  setTimeout(()=>sparkle.remove(), 1500);
}

// ====== FADE TEXT → SHOW PHOTO & LOVE ======
function transformWordsToPhoto() {
  const textEl = document.getElementById('letter-text');
  const photo = document.getElementById('photo');
  const loveMsg = document.getElementById('love-msg');

  textEl.classList.add('fade-out'); // fade letter
  setTimeout(()=>{ photo.classList.add('show'); }, 800); // show glowing photo
  setTimeout(()=>{ loveMsg.style.opacity = 1; }, 2500); // show "I LOVE YOU ❤️"
}
// JavaScript for interactive love button
const loveButton = document.querySelector('.love-button');
const loveMessage = document.getElementById('love-message');

const loveMessages = [
  "💖 You believe in us, and that belief keeps me going.",
  "🤗 You show me how much you care through your actions, not just words.",
  "✨ You are always thinking of new ways to make me feel special.",
  "💞 You’ve taught me the true meaning of unconditional love.",
  "🔐 Your honesty makes me trust you more every day.",
  "🌍 You never let me feel alone, even when we’re apart.",
  "🍀 You remind me every day how lucky I am to have you.",
  "💪 Your love makes even the hardest days easier to face.",
  "⏳ You always make time for me, no matter how busy you are.",
  "🎉 You celebrate my victories like they are your own.",
  "🧘 You help me focus on what truly matters in life.",
  "🛡 You make me feel safe to be myself, without fear of judgment.",
  "🌞 Your optimism is contagious, and I love that about you.",
  "😂 You have a way of making me laugh when I need it most.",
  "🏃‍♂ You always show up when I need you, without hesitation.",
  "🫂 You love me even on the days when I don’t love myself.",
  "👀 You make me feel seen and understood, even without saying much.",
  "🚀 You challenge me to keep striving for greatness.",
  "🌍 You make every day feel like an adventure, even in the ordinary moments.",
  "📈 You support my growth and encourage me to become the best version of myself.",
  "🕯 Your love is the light that brightens up my darkest days.",
  "🌸 You make every little moment we share feel significant.",
  "⚖ You keep me grounded and remind me to appreciate the small things.",
  "🎶 You bring joy into my life in ways I never thought possible.",
  "📍 You’re not afraid to show me how much you care, no matter the distance.",
  "🛠 You’ve helped me believe in myself more than anyone else has.",
  "🌟 You always push me to be better, and I’m grateful for that.",
  "🔥 You are my biggest source of inspiration.",
  "🏆 You are my greatest support system, and I never take that for granted.",
  "💌 You always know what to say to make me feel better.",
  "💙 You accept me for who I am and love me all the more for it.",
  "🛤 Your faith in me is unwavering, and that gives me strength.",
  "🎗 You make me feel like I’m the most important person in your life.",
  "☀ You bring warmth and positivity into every room you enter.",
  "❤ Your love for me keeps me going, even on the toughest days.",
  "🙌 You never make me feel like I’m asking for too much when I need you.",
  "🪄 You make me feel like I matter, every single day.",
  "😊 You are the reason I smile, even when life is hard.",
  "🚀 You inspire me to chase my dreams without fear.",
  "⏳ You make every moment feel meaningful and worth cherishing."
];

// Event listener for the love button click
loveButton.addEventListener('click', () => {
  const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
  loveMessage.textContent = randomMessage;
  loveMessage.classList.remove('hidden');
});

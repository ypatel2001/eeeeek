// Heartfelt message for timeline
const heartfeltMessage = `Shri ❤️

Happy Valentine’s Day. I’ve been thinking about how lucky I feel to have you in my life. From our first conversations to our dates and all our FaceTime calls, you’ve slowly become someone really special to me.

I love how you’re my super PT — smart, driven, and so hardworking. I genuinely admire the way you handle everything you do. On top of that, you’re so beautiful, sweet, and caring. Being with you just makes me feel happy, calm, and fulfilled in a way that’s hard to explain.

I love what we’re building and I can really see something meaningful with you as my special eeeeeeek partner. So I wanted to ask you properly, would you be my girlfriend and my Valentine? 💕`;
// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  // Split text into character spans; preserve spaces as non-breaking spaces
  const splitToSpans = (text) =>
    text
      .split("")
      .map((ch) => (ch === " " ? "<span class=\"space\">&nbsp;</span>" : `<span>${ch}</span>`))
      .join("");

  textBoxChars.innerHTML = splitToSpans(textBoxChars.textContent || textBoxChars.innerHTML);
  hbd.innerHTML = splitToSpans(hbd.textContent || hbd.innerHTML);

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=5.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=4"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.9"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.7"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=4"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+="
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .from(".nine", 0.7, {
      opacity: 0,
      y: 10,
    })
    .call(typeHeartfeltMessage, null, this, 0)
    .to({}, 3, {}, "+=2")
    .call(showValentinePrompt, null, this, 0);

  // tl.seek("currentStep");
  // tl.timeScale(2);
};

// Type out the heartfelt message with cursor effect
const typeHeartfeltMessage = () => {
  const messageDiv = document.getElementById('heartfeltMessage');
  messageDiv.innerHTML = ''; // Clear any existing content
  let charIndex = 0;
  
  const typeChar = () => {
    if (charIndex < heartfeltMessage.length) {
      messageDiv.innerHTML = ''; // Clear
      // Add the text typed so far using textContent (safe)
      const textNode = document.createTextNode(heartfeltMessage.substring(0, charIndex + 1));
      messageDiv.appendChild(textNode);
      
      // Add the blinking cursor
      const cursor = document.createElement('span');
      cursor.className = 'message-cursor';
      cursor.style.display = 'inline';
      cursor.textContent = '|';
      messageDiv.appendChild(cursor);
      
      charIndex++;
      setTimeout(typeChar, 30); // Typing speed
    } else {
      // Remove cursor when done typing
      messageDiv.innerHTML = '';
      messageDiv.textContent = heartfeltMessage;
    }
  };
  
  typeChar();
};

// Show the Valentine prompt
const showValentinePrompt = () => {
  const promptDiv = document.getElementById('valentinePrompt');
  promptDiv.style.display = 'block';
  promptDiv.style.opacity = '0';
  promptDiv.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    promptDiv.style.opacity = '1';
  }, 50);
  
  // Setup button handlers
  const yesBtn = document.getElementById('valentineYes');
  const noBtn = document.getElementById('valentineNo');
  const responseDiv = document.getElementById('valentineResponse');
  const tryAgainBtn = document.getElementById('tryAgainBtn');
  
  yesBtn.onclick = () => {
    // Hide the prompt
    promptDiv.style.display = 'none';
    // Force responseDiv to be visible and clear any previous content
    responseDiv.style.display = 'block';
    responseDiv.style.visibility = 'visible';
    responseDiv.innerHTML = '';
    // Insert the prompt and textarea
    responseDiv.innerHTML = `❤️ You just made me the happiest! ❤️<br><br>
      <h2 style="font-size:2rem; color:#ff1493; margin-top:30px;">EEEEEEEKKKK Please write your response below:</h2>
      <textarea id="valentineInput" rows="4" cols="50" placeholder="Type your response here..." style="width:100%;max-width:600px;padding:15px 20px;font-size:1.1rem;border:3px solid #ff1493;border-radius:10px;background-color:#fff;color:#333;font-family:'Work Sans',sans-serif;resize:vertical;min-height:120px;outline:none;transition:all 0.3s ease;box-sizing:border-box;margin-top:20px;"></textarea>
      <br>
      <button id="submitResponseBtn" class="valentine-btn valentine-yes" style="margin-top:20px;">Submit Response</button>
      <div id="responseStatus" style="margin-top:20px;font-size:1.2rem;"></div>
    `;
    responseDiv.style.color = '#ff1493';

    // Setup submit button handler
    setTimeout(() => {
      const submitBtn = document.getElementById('submitResponseBtn');
      const input = document.getElementById('valentineInput');
      const statusDiv = document.getElementById('responseStatus');
      submitBtn.onclick = () => {
        const val = input.value.trim();
        if (!val) {
          statusDiv.textContent = 'Please write something before submitting!';
          statusDiv.style.color = '#ff6b6b';
          return;
        }
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';
        submitBtn.style.cursor = 'not-allowed';
        statusDiv.textContent = '✨ Sending...';
        statusDiv.style.color = '#333';

        // POST to /api/save (works with Vercel serverless or local server if available)
        fetch('/api/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: val }),
        })
          .then((r) => r.json())
          .then((d) => {
            if (d && d.success) {
              statusDiv.textContent = '💕 Sent! Thank you ❤️';
              statusDiv.style.color = '#ff1493';
              input.disabled = true;
            } else {
              throw new Error((d && d.error) || 'Send failed');
            }
          })
          .catch((err) => {
            console.error('Send error', err);
            statusDiv.textContent = '❌ Error sending. Try again.';
            statusDiv.style.color = '#ff6b6b';
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
          });
      };
    }, 100);
  };
  
  noBtn.onclick = () => {
    promptDiv.style.display = 'none';
    responseDiv.style.display = 'block';
    tryAgainBtn.style.display = 'block';
    tryAgainBtn.textContent = 'Try Again!';
    responseDiv.innerHTML = "😑 Rudeeeeeee why would you even click that? <br> That's okay, I'll win you over very soon! 😉";
    responseDiv.style.color = '#888';
  };
  
  tryAgainBtn.onclick = () => {
    promptDiv.style.display = 'block';
    responseDiv.style.display = 'none';
    tryAgainBtn.style.display = 'none';
  };
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

// Only initialize animation when called from login page
// resolveFetch().then(animationTimeline());


// Login Page Typing Effect and Authentication

class LoginPage {
  constructor() {
    this.loginContainer = document.getElementById('loginContainer');
    this.loginTitle = document.getElementById('loginTitle');
    this.passwordInput = document.getElementById('passwordInput');
    this.hintButton = document.getElementById('hintButton');
    this.hintText = document.getElementById('hintText');
    this.cursorBlink = document.querySelector('.cursor-blink');
    this.correctPassword = 'nov20';
    this.welcomeText = 'hi shriii ! guess the secret password to see your surprise :)';
    this.hintMessage = "*sigh* You shouldn't need this but here you go: \n Hint: Think of a special date...";
    this.isTyping = false;
    this.init();
  }

  init() {
    this.startTypingEffect();
    this.setupPasswordInput();
    this.setupHintButton();
  }

  startTypingEffect() {
    this.isTyping = true;
    let charIndex = 0;
    
    const typeCharacter = () => {
      if (charIndex < this.welcomeText.length) {
        this.loginTitle.textContent += this.welcomeText[charIndex];
        charIndex++;
        setTimeout(typeCharacter, 100); // Adjust typing speed here
      } else {
        this.isTyping = false;
        // After typing is done, show password input
        this.showPasswordInput();
      }
    };

    typeCharacter();
  }

  showPasswordInput() {
    this.passwordInput.style.opacity = '0';
    this.passwordInput.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      this.passwordInput.style.opacity = '1';
      this.passwordInput.focus();
      this.cursorBlink.classList.add('active');
    }, 300);
  }

  setupPasswordInput() {
    this.passwordInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.validatePassword();
      }
    });

    this.passwordInput.addEventListener('input', () => {
      // Update cursor visibility
      if (this.passwordInput.value.length > 0 || this.passwordInput.focus) {
        this.cursorBlink.classList.add('active');
      }
    });

    this.passwordInput.addEventListener('focus', () => {
      this.cursorBlink.classList.add('active');
    });

    this.passwordInput.addEventListener('blur', () => {
      if (this.passwordInput.value.length === 0) {
        this.cursorBlink.classList.remove('active');
      }
    });
  }

  setupHintButton() {
    this.hintButton.addEventListener('click', () => {
      this.hintText.textContent = this.hintMessage;
      this.hintText.classList.toggle('show');
    });
  }

  validatePassword() {
    const enteredPassword = this.passwordInput.value;

    if (enteredPassword === this.correctPassword) {
      // Password correct - fade out login page and show main content
      this.loginContainer.style.transition = 'opacity 0.8s ease';
      this.loginContainer.style.opacity = '0';
      
      setTimeout(() => {
        this.loginContainer.classList.add('hidden');
        // Trigger main animation
        const container = document.querySelector('.container');
        container.style.visibility = 'visible';
        
        // Initialize the main animation with data fetch
        resolveFetch().then(() => {
          animationTimeline();
        });
      }, 800);
    } else {
      // Wrong password
      this.passwordInput.value = '';
      this.passwordInput.style.borderBottomColor = '#ff6b6b';
      
      setTimeout(() => {
        this.passwordInput.style.borderBottomColor = '#333';
      }, 500);
    }
  }
}

// Initialize login page when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new LoginPage();
});

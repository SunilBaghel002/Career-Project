// Form switching with flip animation
document.getElementById("to-login").addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.add("show-login");
});

document.getElementById("to-signup").addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.remove("show-login");
});

// Utility Functions
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function clearErrors() {
  document.querySelectorAll(".error-message").forEach((error) => {
    error.style.display = "none";
    error.textContent = "";
  });
}

function showSuccess(message) {
  const successElement = document.getElementById("success-message");
  successElement.querySelector("p").textContent = message;
  successElement.style.display = "block";
  setTimeout(() => {
    successElement.style.display = "none";
    window.location.href = "/input"; // Direct redirect to /input route
  }, 2000);
}

function setLoading(buttonId, isLoading) {
  const button = document.getElementById(buttonId);
  if (isLoading) {
    button.classList.add("loading");
    button.disabled = true;
  } else {
    button.classList.remove("loading");
    button.disabled = false;
  }
}

// OTP Input Handling
function setupOTPInputs(containerId, indicatorId, resendId, timerId, userId) {
  const inputs = document.querySelectorAll(`#${containerId} .otp-input`);
  const indicator = document.getElementById(indicatorId);
  const resendBtn = document.getElementById(resendId);
  const timerSpan = document.getElementById(timerId);

  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      if (e.target.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
      if (index === inputs.length - 1) {
        const otp = Array.from(inputs)
          .map((i) => i.value)
          .join("");
        verifyOTP(otp, userId, indicator);
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !input.value && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });

  let countdown = 30;
  resendBtn.classList.add("disabled");
  timerSpan.textContent = `(${countdown}s)`;
  const timer = setInterval(() => {
    countdown--;
    timerSpan.textContent = `(${countdown}s)`;
    if (countdown <= 0) {
      clearInterval(timer);
      resendBtn.classList.remove("disabled");
      timerSpan.textContent = "";
    }
  }, 1000);

  resendBtn.addEventListener("click", async () => {
    if (!resendBtn.classList.contains("disabled")) {
      try {
        const response = await fetch("/api/resend-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId }),
        });
        const data = await response.json();
        if (response.ok) {
          alert("OTP resent to your email!");
          countdown = 30;
          resendBtn.classList.add("disabled");
          timerSpan.textContent = `(${countdown}s)`;
          const newTimer = setInterval(() => {
            countdown--;
            timerSpan.textContent = `(${countdown}s)`;
            if (countdown <= 0) {
              clearInterval(newTimer);
              resendBtn.classList.remove("disabled");
              timerSpan.textContent = "";
            }
          }, 1000);
        } else {
          alert(data.error || "Failed to resend OTP");
        }
      } catch (error) {
        alert("An error occurred while resending OTP");
      }
    }
  });
}

async function verifyOTP(otp, userId, indicator) {
  try {
    const response = await fetch("/api/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, otp }),
    });
    const data = await response.json();
    if (response.ok) {
      indicator.classList.remove("red");
      indicator.classList.add("green");
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      showSuccess("OTP Verified! Redirecting to Quiz...");
    } else {
      indicator.classList.remove("green");
      indicator.classList.add("red");
      alert(data.error || "Invalid OTP");
    }
  } catch (error) {
    indicator.classList.remove("green");
    indicator.classList.add("red");
    alert("An error occurred during OTP verification");
  }
}

// Signup Form Submission
document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  clearErrors();

  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    showError("signup-error", "Passwords do not match");
    return;
  }
  if (password.length < 8) {
    showError("signup-error", "Password must be at least 8 characters");
    return;
  }

  setLoading("signup-button", true);
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      document.getElementById("signup-form").style.display = "none";
      const otpContainer = document.getElementById("signup-otp");
      otpContainer.style.display = "flex";
      setupOTPInputs(
        "signup-otp",
        "signup-otp-indicator",
        "signup-resend",
        "signup-timer",
        data.userId
      );
    } else {
      showError("signup-error", data.error || "Signup failed");
    }
  } catch (error) {
    showError("signup-error", "An error occurred. Try again later.");
  } finally {
    setLoading("signup-button", false);
  }
});

// Real-time Password Matching
document.getElementById("confirm-password").addEventListener("input", () => {
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorDiv = document.getElementById("signup-error");
  if (password !== confirmPassword) {
    errorDiv.textContent = "Passwords do not match";
    errorDiv.style.display = "block";
  } else {
    errorDiv.style.display = "none";
  }
});

// Login Form Submission
document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  clearErrors();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  setLoading("login-button", true);
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      document.getElementById("login-form").style.display = "none";
      document.querySelector(".social-login").style.display = "none";
      const otpContainer = document.getElementById("login-otp");
      otpContainer.style.display = "flex";
      setupOTPInputs(
        "login-otp",
        "login-otp-indicator",
        "login-resend",
        "login-timer",
        data.userId
      );
    } else {
      showError("login-error", data.error || "Invalid credentials");
    }
  } catch (error) {
    showError("login-error", "An error occurred. Try again later.");
  } finally {
    setLoading("login-button", false);
  }
});

// Add Authorization Header to Future Requests
const setAuthHeader = () => {
  const token = localStorage.getItem("token");
  if (token) {
    fetch("/api/profile", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .catch((error) => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        alert("Session expired. Please log in again.");
        window.location.href = "/auth";
      });
  }
};
// Set cookie on login
localStorage.setItem("token", data.token);
Cookies.set("token", data.token, { expires: 7, path: "/" }); // Expires in 7 days

// Get cookie
const token = Cookies.get("token");

// Clear cookie on logout
Cookies.remove("token");

// Run on page load
window.addEventListener("load", setAuthHeader);

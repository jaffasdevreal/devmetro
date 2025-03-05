document.addEventListener("DOMContentLoaded", () => {
    // Form toggle functionality
    const loginForm = document.getElementById("login-form")
    const signupForm = document.getElementById("signup-form")
    const createAccountLink = document.getElementById("create-account")
    const backToLoginLink = document.getElementById("back-to-login")
  
    // Show signup form
    createAccountLink.addEventListener("click", (e) => {
      e.preventDefault()
      loginForm.classList.remove("active")
      signupForm.classList.add("active")
    })
  
    // Show login form
    backToLoginLink.addEventListener("click", (e) => {
      e.preventDefault()
      signupForm.classList.remove("active")
      loginForm.classList.add("active")
    })
  
    // Form validation
    const forms = document.querySelectorAll("form")
  
    forms.forEach((form) => {
      form.addEventListener("submit", function (e) {
        e.preventDefault()
  
        let isValid = true
        const inputs = this.querySelectorAll("input[required]")
  
        inputs.forEach((input) => {
          if (!input.value.trim()) {
            isValid = false
            highlightError(input)
          } else {
            removeError(input)
          }
        })
  
        // Check if passwords match in signup form
        if (this.id === "signup-form") {
          const password = document.getElementById("signup-password")
          const confirmPassword = document.getElementById("confirm-password")
  
          if (password.value !== confirmPassword.value) {
            isValid = false
            highlightError(confirmPassword, "Passwords do not match")
          }
        }
  
        if (isValid) {
          // Simulate form submission - in a real app, you would handle the authentication here
          alert("Form submitted successfully!")
        }
      })
    })
  
    function highlightError(input, message) {
      input.style.borderColor = "#ff3b30"
      input.style.boxShadow = "0 0 0 2px rgba(255, 59, 48, 0.1)"
  
      // Remove any existing error message
      const existingError = input.parentElement.querySelector(".error-message")
      if (existingError) {
        existingError.remove()
      }
  
      // Add error message if provided
      if (message) {
        const errorElement = document.createElement("div")
        errorElement.className = "error-message"
        errorElement.style.color = "#ff3b30"
        errorElement.style.fontSize = "12px"
        errorElement.style.marginTop = "4px"
        errorElement.textContent = message
        input.parentElement.appendChild(errorElement)
      }
    }
  
    function removeError(input) {
      input.style.borderColor = ""
      input.style.boxShadow = ""
  
      const existingError = input.parentElement.querySelector(".error-message")
      if (existingError) {
        existingError.remove()
      }
    }
  })
  
  
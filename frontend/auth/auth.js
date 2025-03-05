document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form")
    const signupForm = document.getElementById("signup-form")
    const createAccountLink = document.getElementById("create-account")
    const backToLoginLink = document.getElementById("back-to-login")
  
    createAccountLink.addEventListener("click", (e) => {
      e.preventDefault()
      loginForm.classList.remove("active")
      signupForm.classList.add("active")
    })
  
    backToLoginLink.addEventListener("click", (e) => {
      e.preventDefault()
      signupForm.classList.remove("active")
      loginForm.classList.add("active")
    })
  
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
  
        if (this.id === "signup-form") {
          const password = document.getElementById("signup-password")
          const confirmPassword = document.getElementById("confirm-password")
  
          if (password.value !== confirmPassword.value) {
            isValid = false
            highlightError(confirmPassword, "Passwords do not match")
          }
        }
  
        if (isValid) {
          alert("Form submitted successfully!")
        }
      })
    })
  
    function highlightError(input, message) {
      input.style.borderColor = "#ff3b30"
      input.style.boxShadow = "0 0 0 2px rgba(255, 59, 48, 0.1)"
  
      const existingError = input.parentElement.querySelector(".error-message")
      if (existingError) {
        existingError.remove()
      }
  
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
  
  
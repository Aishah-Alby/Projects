const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const radiobtn = document.querySelectorAll("input[name='query']");
const message = document.querySelector("input[name='message']");
const checkbox = document.querySelector("input[name='checkbox']");
const divradio = document.querySelector(".radio");
const divcheckbox = document.querySelector(".checkbox");
const submitButton = document.querySelector(".sub_bttn");

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

let selectedQuery;
radiobtn.forEach((item) => {
  item.addEventListener("click", () => {
    selectedQuery = item.value;
    console.log(item.value);
  });
});

let selectedCheckbox;
checkbox.addEventListener("click", () => {
  selectedCheckbox = checkbox.checked;
  console.log(checkbox.checked);
});

submitButton.addEventListener("click", () => {
  console.log();
  const errorsArray = [];
  if (firstname.value.length === 0) {
    errorsArray.push({
      field: "firstname",
      errorMessage: "First name is required",
    });
    firstname.classList.add("error-input");
    let error = document.querySelector(".error_message");
    if (error) {
      error.innerText = "First name is required";
    } else {
      let errorMessage = document.createElement("p");
      errorMessage.className = "error_message";
      errorMessage.style = "color:red; font-size:10px;";
      errorMessage.innerText = "First name is required";
      firstname.after(errorMessage);
    }
  } else {
    let error = document.querySelector(".error_message");
    if (error) {
      error.innerText = "";
    }
    firstname.classList.remove("error-input");
  }

  if (lastname.value.length === 0) {
    errorsArray.push({
      field: "lastname",
      errorMessage: "Last name is required",
    });
    lastname.classList.add("error-input");
    let problem = document.querySelector(".problem_message");
    if (problem) {
      problem.innerText = "Last name is required";
    } else {
      let errorMessage = document.createElement("p");
      errorMessage.className = "problem_message";
      errorMessage.style = "color:red; font-size:10px;";
      errorMessage.innerText = "Last name is required";
      lastname.after(errorMessage);
    }
  } else {
    let problem = document.querySelector(".problem_message");
    if (problem) {
      problem.innerText = "";
    }
    lastname.classList.remove("error-input");
  }
  console.log(validateEmail(email.value));
  if (!validateEmail(email.value)) {
    // need to add additional criteria of email equal to a mail..
    errorsArray.push({
      field: "email",
      errorMessage: "Email is required",
    });
    email.classList.add("error-input");
    let issue = document.querySelector(".issue_message");
    if (issue) {
      issue.innerText = "Email is required";
    } else {
      let errorMessage = document.createElement("p");
      errorMessage.className = "issue_message";
      errorMessage.style = "color:red; font-size:10px;";
      errorMessage.innerText = "Email is required";
      email.after(errorMessage);
    }
  } else {
    let issue = document.querySelector(".issue_message");
    if (issue) {
      issue.innerText = "";
    }
    email.classList.remove("error-input");
  }

  if (!selectedQuery) {
    errorsArray.push({
      field: "radiobtn",
      errorMessage: "Please select a query type",
    });
    let error = document.querySelector(".error_message_radio");
    if (error) {
      error.innerText = "Please select a query type";
    } else {
      let errorMessage = document.createElement("p");
      errorMessage.className = "error_message_radio";
      errorMessage.style = "color:red; font-size:10px;";
      errorMessage.innerText = "Please select a query type";
      divradio.after(errorMessage);
    }
  } else {
    let error = document.querySelector(".error_message_radio");
    if (error) {
      error.innerText = "";
    }
  }

  if (message.value.length === 0) {
    errorsArray.push({
      field: "message",
      errorMessage: "message is required",
    });
    message.classList.add("error-input");
    let hold = document.querySelector(".hold_message");
    if (hold) {
      hold.innerText = "Please enter a message";
    } else {
      let errorMessage = document.createElement("p");
      errorMessage.className = "hold_message";
      errorMessage.style = "color:red; font-size:10px;";
      errorMessage.innerText = "Please enter a message";
      message.after(errorMessage);
    }
  } else {
    let hold = document.querySelector(".hold_message");
    if (hold) {
      hold.innerText = "";
    }
    message.classList.remove("error-input");
  }

  if (!selectedCheckbox) {
    errorsArray.push({
      field: "checkbox",
      errorMessage: "Please select the checkbox",
    });
    let errortag = document.querySelector(".error_message_checkbox");
    if (errortag) {
      errortag.innerText =
        "To submit this form, please consent to being contacted";
    } else {
      let errorMessage = document.createElement("p");
      errorMessage.className = "error_message_checkbox";
      errorMessage.style = "color:red; font-size:10px;";
      errorMessage.innerText =
        "To submit this form, please consent to being contacted";
      divcheckbox.after(errorMessage);
    }
  } else {
    let errortag = document.querySelector(".error_message_checkbox");
    if (errortag) {
      errortag.innerText = "";
    }
  }

  if (errorsArray.length > 0) {
    console.log(errorsArray);
    return errorsArray;
  }
  alert("Submitted");
});

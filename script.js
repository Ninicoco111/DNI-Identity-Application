// D.N.I. — CCT360 Lab: variables, conditional logic, and JavaScript state.

// The current page is a simple state: welcome, application, or result.
let currentPage = "welcome";
let applicationCount = 0;

function showPage(page) {
  currentPage = page;
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("application").classList.add("hidden");
  document.getElementById("result").classList.add("hidden");
  document.getElementById(currentPage).classList.remove("hidden");
  window.scrollTo(0, 0);
}

document.getElementById("beginBtn").addEventListener("click", function () {
  showPage("application");
});

document.getElementById("backBtn").addEventListener("click", function () {
  showPage("welcome");
});

document.getElementById("identityForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Keep the user on this page.

  // Read the user's answers and save them in variables.
  let name = document.getElementById("applicant").value.trim();
  let reason = document.querySelector('input[name="reason"]:checked').value;
  let keep = document.querySelector('input[name="keep"]:checked').value;
  let decision = "";
  let title = "";
  let message = "";

  // Three possible outcomes based on the user's choices.
  if (reason === "escape") {
    decision = "review";
    title = "Your past has objected.";
    message = "We contacted your previous identity. It refuses to cooperate. Your application is now under review for approximately 3–5 business lifetimes.";
  } else if (reason === "restart" && keep === "memories") {
    decision = "approved";
    title = "Welcome to your next life.";
    message = "Congratulations. Your previous identity has been officially discontinued. Please allow 3–5 business days to become someone else. Your embarrassing memories are coming with you.";
  } else {
    decision = "rejected";
    title = "You must remain yourself.";
    message = "Application denied. The Department has determined that your request is either suspiciously convenient or insufficiently dramatic. Please continue being you until further notice.";
  }

  applicationCount = applicationCount + 1;
  document.getElementById("resultName").textContent = name.toUpperCase();
  document.getElementById("caseNumber").textContent = String(applicationCount).padStart(4, "0");
  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultMessage").textContent = message;

  let stamp = document.getElementById("stamp");
  stamp.className = "stamp " + decision;
  if (decision === "review") {
    stamp.textContent = "UNDER REVIEW";
  } else if (decision === "approved") {
    stamp.textContent = "APPROVED";
  } else {
    stamp.textContent = "REJECTED";
  }

  showPage("result");
});

document.getElementById("againBtn").addEventListener("click", function () {
  document.getElementById("identityForm").reset();
  showPage("application");
});

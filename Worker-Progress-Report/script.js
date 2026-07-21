const app = document.getElementById("app");

const state = JSON.parse(localStorage.getItem("workerReport")) || {
  returnWork: "returned",
  returnDate: "2024-03-15",
  workType: "modified-reduced",
  returnComment: "Terrible. Testing Testing",
  recovery: "recovered",
  pain: "",
  treatment: "",
  medication: "",
  exercises: "",
  additionalInfo: "No info Testing Testing"
};

const radio = (name, value, text) => `
  <label class="choice">
    <input type="radio" name="${name}" value="${value}"
      ${state[name] === value ? "checked" : ""}>
    <span>${text}</span>
  </label>
`;

const footer = (page) => `
  <footer class="footer">
    <span>Worker App ID: 712041</span>
    <span>Submitted: March 19, 2024 19:21</span>
    <span>Page ${page} of 3</span>
  </footer>
`;

function render() {
  app.innerHTML = `
    <section class="page">
      <header class="top">
        <img class="logo"
          src="./wcb-logo.jpeg"
          alt="Workers Compensation Board of Manitoba">

        <div class="address">
          333 Broadway<br>
          Winnipeg, MB R3C 4W3<br>
          Phone: (204) 954-4321<br>
          Toll Free: 1-855-954-4321<br>
          wcb.mb.ca
        </div>

        <div class="title-area">
          <h1>Worker Progress Report</h1>
          <div class="claim">
            <span>Claim No. 20042047</span>
            <span>WP</span>
          </div>
        </div>
      </header>

      <p class="intro">
        <span class="blue">Madeleine Willson</span>
        provided the following updates in relation to their claim:
      </p>

      <h2 class="heading">Return to Work</h2>

      <div class="box">
        <p class="small">Select one:</p>
        <div class="choices three">
          ${radio("returnWork", "not-missed", "I have not missed time from work")}
          ${radio("returnWork", "not-returned", "I have not returned to work")}
          ${radio("returnWork", "returned", "I returned to work on:")}
        </div>

        <div class="line-row">
          <span></span>
          <input id="returnDate" class="line-input date-line" type="date" value="${state.returnDate}">
          <small>Date</small>
        </div>
      </div>

      <div class="box">
        <p class="small">I am working:</p>

        <div class="choices four">
          ${radio("workType", "full-regular", "Full duties, regular hours")}
          ${radio("workType", "full-reduced", "Full duties, reduced hours")}
          ${radio("workType", "modified-regular", "Modified duties, regular hours")}
          ${radio("workType", "modified-reduced", "Modified duties, reduced hours")}
        </div>

        <div class="line-row">
          <label class="choice">
            <input type="checkbox">
            <span>Other:</span>
          </label>
          <input class="line-input" type="text">
        </div>
      </div>

      <div class="box">
        <div>My return to work is going:</div>
        <textarea id="returnComment" class="text-box">${state.returnComment}</textarea>
      </div>

      <div class="line-row">
        <span>I expect to return to work on:</span>
        <input class="line-input date-line" type="date">
        <small>Date</small>
      </div>

      <div class="box">
        <div>I have the following concerns about returning to work:</div>
        <textarea class="text-box tall"></textarea>
      </div>

      <div class="line-row">
        <span>I was most recently in contact with:</span>
        <input class="line-input" type="text">
        <span>on</span>
        <input class="line-input" type="date">
      </div>

      <h2 class="heading">Recovery</h2>

      <div class="box">
        <p class="small">Select one:</p>
        <div class="choices two">
          ${radio("recovery", "not-recovered", "I have not fully recovered from my workplace injury.")}
          ${radio("recovery", "recovered", "I have fully recovered from my workplace injury.")}
        </div>
      </div>

      <div class="box">
        <div>I have provided the following comments about my recovery:</div>
        <textarea class="text-box tall"></textarea>
      </div>

      ${footer(1)}
    </section>

    <section class="page">
      <div class="pain">
        <div class="pain-text">
          I rate my current pain/discomfort on a scale of 1-10,
          where 1 is no pain and 10 is severe pain out of 10.
        </div>

        <div class="pain-numbers">
          ${[1,2,3,4,5,6,7,8,9,10].map(number => `
            <label class="number-choice">
              <input type="radio" name="pain" value="${number}"
                ${String(state.pain) === String(number) ? "checked" : ""}>
              ${number}
            </label>
          `).join("")}
        </div>
      </div>

      <div class="box">
        <p class="small">Select one:</p>

        <div class="choices two">
          ${radio("treatment", "no", "I am not continuing to receive medical treatment for my workplace injury.")}
          ${radio("treatment", "yes", "I am continuing to receive medical treatment for my workplace injury from:")}
        </div>

        <div class="line-row">
          <span></span>
          <input class="line-input" type="text">
          <small>(Medical Provider Type)</small>
        </div>
      </div>

      <div class="line-row">
        <span>My last medical treatment was</span>
        <input class="line-input" type="date">
        <span>from</span>
        <input class="line-input" type="text">
      </div>

      <div class="line-row">
        <span>My next medical treatment is</span>
        <input class="line-input" type="date">
        <span>from</span>
        <input class="line-input" type="text">
      </div>

      <div class="line-row">
        <span>I am attending a Chiropractor or Physiotherapist</span>
        <input class="line-input" type="text">
        <small>(Frequency)</small>
      </div>

      <div class="box">
        <p class="small">Select one:</p>

        <div class="choices two">
          ${radio("medication", "no", "I am not taking medication for my workplace injury.")}
          ${radio("medication", "yes", "I am taking medication for my workplace injury:")}
        </div>

        <div class="line-row">
          <span></span>
          <input class="line-input" type="text">
          <small>(Name of prescribed medication)</small>
        </div>
      </div>

      <div class="box">
        <p class="small">Select one:</p>

        <div class="choices two">
          ${radio("exercises", "no", "I am not doing home exercises for my workplace injury.")}
          ${radio("exercises", "yes", "I am doing home exercises for my workplace injury.")}
        </div>
      </div>

      <div class="box">
        <div>List the exercises you are doing:</div>
        <textarea class="text-box tall"></textarea>
      </div>

      <h2 class="heading">Other Information</h2>

      <div class="box">
        <div>
          I would like to provide the following additional information about my claim/injury:
        </div>

        <textarea id="additionalInfo" class="text-box">${state.additionalInfo}</textarea>
      </div>

      ${footer(2)}
    </section>

    <section class="page">
      <div class="certification">
        <input type="checkbox" checked>
        <div>
          I certify that the information given on this form is true, correct and complete to the best
          of my knowledge. I agree to notify the Workers Compensation Board of Manitoba (WCB)
          immediately once I return to any form of work and/or employment. I understand that it is
          an offence to knowingly make a false statement to the WCB. I also understand that it is an
          offence to withhold information from WCB which affects my entitlement to compensation
          (e.g., full or partial recovery from injury, ability to return to work, sources of additional
          income, etc.). I understand that refusing to co-operate with, or follow my treatment,
          may result in the WCB reducing or suspending my benefits.
        </div>
      </div>

      <div class="certification">
        <input type="checkbox" checked>
        <div>
          I understand that the
          <a href="#">Privacy Notice</a>
          applies to the personal information collected in this document.
        </div>
      </div>

      ${footer(3)}
    </section>

    <button class="submit" id="submitButton">Save Worker Progress Report</button>
  `;

  addEvents();
}

function saveState() {
  localStorage.setItem("workerReport", JSON.stringify(state));
}

function addEvents() {
  document.querySelectorAll("input, textarea").forEach((element) => {
    element.addEventListener("input", () => {
      if (element.type === "radio") {
        state[element.name] = element.value;
      } else if (element.id) {
        state[element.id] = element.value;
      }

      saveState();
    });
  });

  document.getElementById("submitButton").addEventListener("click", () => {
    saveState();
    alert("Worker Progress Report saved.");
  });
}

render();
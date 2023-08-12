let currentStep = 1;
let autoSwitchInterval;

function switchToNextButton() {
  currentStep = (currentStep % 4) + 1; // Loop through steps 1 to 4
  showWorkflowStep(currentStep);
}

function startAutoSwitch() {
  autoSwitchInterval = setInterval(switchToNextButton, 3000); // Switch every 3 seconds
}

function stopAutoSwitch() {
  clearInterval(autoSwitchInterval);
}

function initWorkflow() {
  showWorkflowStep(currentStep);
  startAutoSwitch();
}

initWorkflow();

function showWorkflowStep(step) {
  const containerDiv = document.querySelector(".workflow-content");
  const divInfo = containerDiv.getAttribute("data-info");
  const buttons = document.querySelectorAll(".workflow-button");

  if (divInfo !== step.toString()) {
    const steps = [
      {
        title: "Conceptualization",
        description:
          "During the conceptualization phase, I lay the foundation for the project by defining its scope, objectives, and overall direction.",
        points: [
          "Brainstorm and generate ideas for the web application.",
          "Define the purpose, goals, and target audience for the project.",
          "Identify key features and functionalities that the web application will offer.",
          "Create a rough outline or flowchart to visualize the user journey and interactions.",
        ],
      },
      {
        title: "Design",
        description:
          "The design phase involves turning the conceptual ideas into visual and structural representations while prioritizing the creation of an intuitive and user-friendly user interface.",
        points: [
          "Develop wireframes or sketches that outline the layout and structure of each page.",
          "Design mockups to visualize the final appearance of the web application.",
          "Choose a color scheme, typography, and visual elements that align with the project's goals.",
          "Create a user-friendly and intuitive UI/UX design to enhance user interaction.",
          "Plan for responsive design to ensure the application works well on various devices and screen sizes.",
        ],
      },
      {
        title: "Implementation",
        description:
          "In the implementation phase, this is where I bring the design into life by writing code and developing the actual web application.",
        points: [
          "Write clean and efficient codes (e.g., HTML, CSS, JavaScript).",
          "Use tools and frameworks that speed up the process of coding.",
          "[Optional] Develop back-end components (server, database) to handle data processing and storage.",
          "[Optional] Integrate third-party APIs if required for specific functionalities.",
        ],
      },
      {
        title: "Maintenance",
        description:
          "The maintenance phase involves continuous monitoring, updates, and improvements to ensure the web application remains functional, secure, and up-to-date. Regular maintenance is essential to address potential issues and enhance the user experience.",
        points: [
          "Adding new features",
          "Scale the application's infrastructure as needed to accommodate growing user traffic.",
          "Gather user feedback and make necessary improvements to enhance the application's features and usability.",
        ],
      },
    ];

    containerDiv.innerHTML = `
      <h3>${steps[step - 1].title}</h3>
      <p>${steps[step - 1].description}</p>
      <ul>
        ${steps[step - 1].points.map((point) => `<li>${point}</li>`).join("")}
      </ul>
    `;

    buttons.forEach((button, index) => {
      if (index === step - 1) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    containerDiv.setAttribute("data-info", step.toString());
  }
}

// Header scroll animation
let prevScrollPos = window.pageYOffset;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = `-${header.offsetHeight}px`;
  }

  prevScrollPos = currentScrollPos;
});

// Slide animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden"); // Use ".hidden" instead of "hidden"
hiddenElements.forEach((el) => observer.observe(el));

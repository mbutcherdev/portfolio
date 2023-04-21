function changeContent(category) {
  const content = {
    frontEnd: [
      {
        imgSrc: "/projects/img/openspace.png",
        header: "Open Space",
        demoURL: "https://openspace.mbutcher.dev/",
        gitHubURL: "https://github.com/mbutcherdev/openspace",
        description:
          "A vanilla HTML/CSS/JavaScript website providing information about the space system to users. Follows a responsive design, while using JavaScript to dynamically update the planets page.",
      },
      {
        imgSrc: "/projects/img/codeassist.png",
        header: "Code Assist",
        demoURL: "https://codeassist.mbutcher.dev/",
        gitHubURL: "https://github.com/mbutcherdev/django-codeassist",
        description:
          "A Django website providing a platform for users to get help with their coding problems and have discussions. Uses a PostgreSQL database to store user information and questions, follows a responsive design, and uses Django's built in authentication system.",
      },
      {
        imgSrc: "/projects/img/landing.png",
        header: "Landing Page",
        demoURL: "https://landing.mbutcher.dev/",
        gitHubURL: "https://github.com/mbutcherdev/odin-landing-page",
        description:
          "A landing page for a fictional orbital travel company, built with HTML and CSS. Designed purely for desktop, built for 'The Odin Project' based on their initial design document.",
      },
      {
        imgSrc: "/projects/img/calc.png",
        header: "Calculator",
        demoURL: "https://calc.mbutcher.dev/",
        gitHubURL: "https://github.com/mbutcherdev/odin-calculator",
        description:
          "An online calculator built in HTML/CSS. JavaScript backend for logical operations, built for 'The Odin Project' based on a text document description.",
      },
    ],
    python: [
      {
        imgSrc: "/projects/img/openspace.png",
        header: "Open Space",
        gitHubURL: "https://github.com/mbutcherdev/openspace",
        description: "Front End Card 1",
      },
      {
        imgSrc: "https://via.placeholder.com/150",
        text: "Python Card 2",
      },
      {
        imgSrc: "https://via.placeholder.com/150",
        text: "Python Card 3",
      },
      {
        imgSrc: "https://via.placeholder.com/150",
        text: "Python Card 4",
      },
    ],
    university: [
      {
        imgSrc: "https://via.placeholder.com/150",
        text: "University Card 1",
      },
      {
        imgSrc: "https://via.placeholder.com/150",
        text: "University Card 2",
      },
      {
        imgSrc: "https://via.placeholder.com/150",
        text: "University Card 3",
      },
      {
        imgSrc: "https://via.placeholder.com/150",
        text: "University Card 4",
      },
    ],
  };

  const cardContainer = document.getElementById("content");
  cardContainer.innerHTML = "";

  content[category].forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";

    const imgElement = document.createElement("img");
    imgElement.src = card.imgSrc;
    imgElement.style.width = "40%";

    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    const headerElement = document.createElement("h3");
    headerElement.innerText = card.header;

    const demoURL = document.createElement("a");
    demoURL.href = card.demoURL;
    demoURL.innerText = "Demo";
    demoURL.target = "_blank";

    const gitHubLink = document.createElement("a");
    gitHubLink.href = card.gitHubURL;
    gitHubLink.innerText = "GitHub";
    gitHubLink.target = "_blank";

    const headerAndLinkContainer = document.createElement("div");
    headerAndLinkContainer.style.display = "flex";
    headerAndLinkContainer.style.alignItems = "center";
    headerAndLinkContainer.style.justifyContent = "space-between";

    headerAndLinkContainer.appendChild(demoURL);
    headerAndLinkContainer.appendChild(headerElement);
    headerAndLinkContainer.appendChild(gitHubLink);
    const breaktag = document.createElement("hr");

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = card.description;

    cardContent.appendChild(headerAndLinkContainer);
    cardContent.appendChild(breaktag);
    cardContent.appendChild(descriptionElement);

    cardElement.appendChild(imgElement);
    cardElement.appendChild(cardContent);
    cardContainer.appendChild(cardElement);
  });
}

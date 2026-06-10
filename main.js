const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

const teamContainerDiv = document.querySelector('.team-container');

const teamMembersCardTemplate = member => `
<div class="team-card">
<div class="card-image">
<img src"img/${member.img}" alt="${member.name}">
</div>
<div class="card-text">
<h3>${member.name}</h3>
<h3>${member.role}</h3>
`;

let html = '';
for (const member of teamMembers) {
    html += teamMembersCardTemplate(member);
}

teamContainerDiv.innerHTML = html;
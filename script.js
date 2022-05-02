const projects = [
    {
        id: '1',
        title: 'Veterinarian Website',
        description: 'An website for the City Veterinary Office of Sta. Rosa Laguna. Features include announcements, viewing of adoptable pets, .... etc.',
        tags: [
            'Senior High School',
            'Web',
            'C#',
            'ASP.NET'
        ],
        image: 'https://picsum.photos/600/400'
    },
    {
        id: '2',
        title: '4 Pics 1 Word',
        description: 'Project 2 Description',
        tags: [
            'College',
            'Python',
            'Desktop'
        ],
        image: 'https://picsum.photos/600/400'
    },
    {
        id: '3',
        title: 'Project 3',
        description: 'Project 3 Description',
        tags: [
            'Non-Academic',
            'Python',
            'Desktop'
        ],
        image: 'https://picsum.photos/600/400'
    },
    {
        id: '4',
        title: 'Project 4',
        description: 'Project 4 Description',
        tags: [
            'College',
            'Python',
            'Desktop'
        ],
        image: 'https://picsum.photos/600/400'
    }
]

const skills = [
    {
        title: 'Programming Language',
        listOfSkills: ['Python', 'C#', 'Java', 'C++']
    },
    {
        title: 'Web',
        listOfSkills: ['HTML', 'CSS', 'JS']
    },
    {
        title: 'Mobile',
        listOfSkills: ['Java', 'Xamarin']
    },
    {
        title: 'Database',
        listOfSkills: ['MSSQL', 'Firebase']
    }
];

tagColors = {
    'Senior High School': 'Brown',
    'College': 'Blue',
    'Non-Academic': 'Green',
    'Python': 'Yellow',
    'Desktop': 'Pink',
    'C#': 'Purple',
    'Web': 'Red'
}

const body = document.body;

//set onlick of btn-github button
const seeGithubButton = document.querySelector('.main-btn');

seeGithubButton.addEventListener('click', (e) => {
    window.open('https://github.com/PatrickMediodia');
    
});

seeGithubButton.addEventListener('mouseout',(e) => {
    seeGithubButton.style.backgroundColor = 'white';
});

seeGithubButton.addEventListener('mouseover',(e) => {
    seeGithubButton.style.backgroundColor = '#d9b382';
});

//generate skills
const skillsContainer = document.querySelector('.skills-container');

for (const skill of skills) {
    const skillDiv = document.createElement('div');
    const skillTitle = document.createElement('p');

    skillTitle.innerText = skill.title

    skillDiv.classList.add('skill');
    skillTitle.classList.add('skill-title');

    skillDiv.appendChild(skillTitle);

    skillsContainer.appendChild(skillDiv);

    //add sub skills
    skill.listOfSkills.forEach((item, index) => {
        const skillList = document.createElement('li');
        skillList.innerText = item;
        skillDiv.appendChild(skillList);
    });
}

//generate projects
const projectsContainer = document.querySelector('.projects-container');

for (const project of projects) {
    const projectDiv = document.createElement('div');
    const projectTitle = document.createElement('p');;
    const projectDescription = document.createElement('p');
    const projectImage = document.createElement('img');
    const projectTagDiv = document.createElement('div');

    projectTitle.innerText = project.title
    projectDescription.innerText = project.description;
    projectImage.src = project.image;

    projectDiv.classList.add('project');
    projectDiv.classList.add('container-background-color');

    projectTitle.classList.add('project-title');
    projectImage.classList.add('project-image');
    projectDescription.classList.add('project-description');
    projectTagDiv.classList.add('project-tag-div');

    //add sub skills
    project.tags.forEach(item => {
        const tag = document.createElement('div');
        tag.innerText = item;
        tag.classList.add('project-tag');
        tag.style.backgroundColor = tagColors[item];
        projectTagDiv.appendChild(tag);
    });

    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectImage);
    projectDiv.appendChild(projectDescription);
    projectDiv.appendChild(projectTagDiv);

    projectsContainer.appendChild(projectDiv);
}











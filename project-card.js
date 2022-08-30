const project = [
  {
    Name: 'Profesional Art Printing Data',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    Featured_image: '/img/card-bg1.png',
    Technologies: ['HTML', 'css', 'ruby'],
    liveVersion: 'https://enning94.github.io/Personal-portfolio/',
    sourceLink: 'https://github.com/Enning94/Personal-portfolio',
  },
  {
    Name: 'Profesional Art Printing Data',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    Featured_image: '/img/card-bg1.png',
    Technologies: ['HTML', 'css', 'ruby'],
    liveVersion: 'https://enning94.github.io/Personal-portfolio/',
    sourceLink: 'https://github.com/Enning94/Personal-portfolio',
  },
  {
    Name: 'Profesional Art Printing Data',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    Featured_image: '/img/card-bg1.png',
    Technologies: ['HTML', 'css', 'ruby'],
    liveVersion: 'https://enning94.github.io/Personal-portfolio/',
    sourceLink: 'https://github.com/Enning94/Personal-portfolio',
  },
  {
    Name: 'Profesional Art Printing Data',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    Featured_image: '/img/card-bg1.png',
    Technologies: ['HTML', 'css', 'ruby'],
    liveVersion: 'https://enning94.github.io/Personal-portfolio/',
    sourceLink: 'https://github.com/Enning94/Personal-portfolio',
  },
  {
    Name: 'Profesional Art Printing Data',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    Featured_image: '/img/card-bg1.png',
    Technologies: ['HTML', 'css', 'ruby'],
    liveVersion: 'https://enning94.github.io/Personal-portfolio/',
    sourceLink: 'https://github.com/Enning94/Personal-portfolio',
  },
  {
    Name: 'Profesional Art Printing Data',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    Featured_image: '/img/card-bg1.png',
    Technologies: ['HTML', 'css', 'ruby'],
    liveVersion: 'https://enning94.github.io/Personal-portfolio/',
    sourceLink: 'https://github.com/Enning94/Personal-portfolio',
  },
];
function getProject(project) {
  let html = '';
  for (let i = 0; i < project.length; i += 1) {
    html += ` <li class='card''>
        <div class='card-summary'>
            <h3 class='title'>${project[i].Name}</h3>
            <p class='surpporting-text3'>${project[i].Description} </p>
            <ul class='tags'>
                <li>${project[i].Technologies[0]}</li>
                <li>${project[i].Technologies[1]}</li>
                <li>${project[i].Technologies[2]}</li>
            </ul>
            </div>
          
            <button type='button' class='butt1 model-button ' data-bs-toggle='modal' data-bs-target='#myModal'>
            See Projects
          </button>
     </li>`;
  }
  document.querySelector('.card-container').innerHTML = html;
}
getProject(project);

function popupWindow() {
  let html = '';
  html += `
        <!-- The Modal -->
        <div class='modal' id='myModal'>
          <div class='modal-dialog modal-xl'>
            <div class='modal-content'>
        
              <!-- Modal Header -->
             
                <div class='modal-header-wrapper'>
                <div class='modal-title'>
                <h3>Multi Post Stories</h3>
              </div>
                <button type='button' class='btn-close close-button' data-bs-dismiss='modal'></button>
                </div>
             
              
              <!-- Modal body -->
              <div class='modal-body'>
                <div class='modal-title-div'>
                  <ul>
                    <li><button type='button'>html</button></li>
                    <li><button type='button'>Bootstrap</button></li>
                    <li><button type='button'>Ruby on rails</button></li>
                  </ul>
                </div>
                
                <div class='modal-image-container'>
                  <div class='modal-image'>
                    <img class='modal-image1' src='./img/Todo.png' alt='modal image'>
                  </div>
                  
                <div class='modal-paragraph-container'>
                  <div class='modal-paragraph'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                    galley of type and scrambled it 1960s with the releax map lapora verita.
                  </div>
                  <div class='modal-buttons-cont'>
                    <button type='button' class='btn btn-danger model-button '><a href='${project[0].liveVersion}'>See Live </a><i class='fa fa-external-link' aria-hidden='true'></i></button>
                    <button type='button' class='btn btn-danger model-button '><a href='${project[1].sourceLink}'>See Source </a><i class='fa fa-github' aria-hidden='true'></i></button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  document.querySelector('.container').innerHTML = html;
}

popupWindow();

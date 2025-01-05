function iconColorChanger() {
    let listItems = document.querySelectorAll('#tech_skills li');

    listItems.forEach(li => {
        let icon = li.querySelector('.toolIcon');
        let originalSrc = icon.src;
        let hoverSrc = originalSrc.replace('color=ffffff', 'color=2AB3EB');

        li.addEventListener('mouseover', function() {
            icon.src = hoverSrc; 
            let p = li.querySelector('p');
            p.classList.add('active');
        });
        
        li.addEventListener('mouseout', function() {
            icon.src = originalSrc;
            let p = li.querySelector('p');

            p.classList.remove('active');

        });
    });
}
iconColorChanger();

function nameColorChange(){
    let profilePic = document.getElementById('circleImg');
    let name = document.getElementById('name');

    profilePic.addEventListener('mouseover', function(){
        name.style.color = '#2AB3EB';
    });
    profilePic.addEventListener('mouseout', function(){
        name.style.color = '#ffffff';
    });
    
}
nameColorChange();

//formspree

/* function displayParagraph(){

    let newP = document.createElement('p');
    newP.textContent = '';
    let presentation = document.getElementById('presentation');
    let button = document.getElementById('ctrldev_');
    newP.textContent = "Perfil dedicado a compartilhar projetos, soluções e insights sobre desenvolvimento de software, focando em inovação, tecnologia e boas práticas de programação. ";
    newP.style.display = 'none';
    presentation.appendChild(newP);

    button.addEventListener('mouseover', function(){
    newP.style.display = 'block';
    newP.style.marginTop = '40px';
});

    button.addEventListener('mouseout', function(){
        newP.style.display = 'none';
    })
    

}

displayParagraph();*/

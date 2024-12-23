function iconColorChanger() {
    let listItems = document.querySelectorAll('#tech_skills li');

    listItems.forEach(li => {
        let icon = li.querySelector('.toolIcon');
        let originalSrc = icon.src;
        let hoverSrc = originalSrc.replace('color=ffffff', 'color=00BBFF');

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
        name.style.color = '#00BBFF';
    });
    profilePic.addEventListener('mouseout', function(){
        name.style.color = '#ffffff';
    });
    
}
nameColorChange();
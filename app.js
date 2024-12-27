function scrollToFeatures() { 
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
 }

document.getElementById('contact-form').addEventListener('submit', function(event) { 
    event.preventDefault(); var name = document.getElementById('name').value; 
    var email = document.getElementById('email').value;
    
    if (name === '' || email === '') {
         alert('Veuillez remplir tous les champs.'); 
    } else { 
        alert('Merci pour votre inscription !');
    } 
    }
);


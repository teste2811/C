document.getElementById('submit').addEventListener('click', () => {
    const food = document.getElementById('food').value;
    const place = document.getElementById('place').value;
    const date = document.getElementById('date').value;
    const selectedImage = document.querySelector('input[name="image"]:checked');

    if (!date || !selectedImage) {
        alert('Por favor, preencha todas as opções antes de confirmar.');
        return;
    }

    const imageValue = selectedImage.value;

    
    // Dados a serem enviados
    const emailParams = {
        food: food,
        place: place,
        date: date,
        image: imageValue
    };

    // Enviar e-mail via EmailJS
    emailjs.send('service_vqqxq5c', 'template_7buzczq', emailParams)
        .then(() => {
            alert('Suas escolhas foram enviadas com sucesso! 💌');
        })
        .catch(error => {
            console.error('Erro ao enviar:', error);
            alert('Ops! Não conseguimos enviar suas escolhas. Tente novamente.');
        });
});


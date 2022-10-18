function changeTemp() {
    
    const temp_c = document.querySelector('#temperature').innerText.split('º')[0];
    const temp_f = ((1.8 * temp_c) + 32).toFixed();
    const temp = document.querySelector('#temperature');
    temp.innerText = temp_f + 'ºF';
}

export { changeTemp };
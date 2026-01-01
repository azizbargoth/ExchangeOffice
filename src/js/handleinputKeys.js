const numDown=(e) => {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
        e.preventDefault();
    }
}
const numChange=(e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
        e.target.value = value;
    } else {
        e.preventDefault();
    }
}
export  {numDown,numChange}
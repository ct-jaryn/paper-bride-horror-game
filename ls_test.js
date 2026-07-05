try {
    localStorage.setItem('test', 'ok');
    const v = localStorage.getItem('test');
    document.body.innerHTML = '<h1>LS_' + v + '</h1>';
} catch (e) {
    document.body.innerHTML = '<h1>LS_ERROR_' + e.message + '</h1>';
}

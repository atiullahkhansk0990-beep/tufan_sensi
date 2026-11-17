document.getElementById('generateBtn').addEventListener('click', function() {
    const device = document.getElementById('deviceSelect').value;
    const resultBox = document.getElementById('resultBox');
    
    let gen, red, s2x, s4x, awm, dpi;

    if (device === 'ultra') {
        gen = '99';
        red = '96';
        s2x = '94';
        s4x = '92';
        awm = '78';
        dpi = '610';
    } else if (device === 'high') {
        gen = '97';
        red = '94';
        s2x = '91';
        s4x = '89';
        awm = '74';
        dpi = '560';
    } else {
        gen = '94';
        red = '90';
        s2x = '87';
        s4x = '85';
        awm = '70';
        dpi = '520';
    }

    document.getElementById('valGen').innerText = gen;
    document.getElementById('valRed').innerText = red;
    document.getElementById('val2x').innerText = s2x;
    document.getElementById('val4x').innerText = s4x;
    document.getElementById('valAwm').innerText = awm;
    document.getElementById('valDpi').innerText = dpi;

    resultBox.classList.remove('hidden');
});
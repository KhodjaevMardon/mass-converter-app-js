function solve() {
    const N = 2;
    const e = 2.7182818284590452353602874713527;
    let W, I, f, T, D, R, r, m, ma, y, E, bt, H, p, pd, L, w, M, a, l;
    document.getElementById('radiationType').value = getElectromagneticRadiationType(f);

    W = parseFloat(document.getElementById('Wbig').value);
    I = parseFloat(document.getElementById('I').value);
    f = parseFloat(document.getElementById('f').value);
    f *= 1e8;
    T = parseFloat(document.getElementById('T').value);
    D = parseFloat(document.getElementById('D').value);
    D *= 1e-2;
    R = parseFloat(document.getElementById('Rbig').value);
    r = parseFloat(document.getElementById('r').value);
    r *= 0.1;
    m = parseFloat(document.getElementById('msmall').value);
    ma = parseFloat(document.getElementById('ma').value);
    if (ma === 2.5) {
        ma *= 1e-4;
    } else if (ma === 1.2) {
        ma *= 1e-6;
    }
    y = parseFloat(document.getElementById('y').value);
    y *= 1e7;
    E = parseFloat(document.getElementById('E').value);
    bt = (R / r > 10) ? 1 : R / r;
    H = ((W * I * Math.pow(r, 2)) / (4 * Math.pow(R, 3))) * bt
    p = (337 * H * H) / 2;
    pd = N / T;
    L = p / pd;
    w = 2 * Math.PI * f;
    M = (log(e, L)) / (2 * Math.sqrt((w * ma * y) / 2));
    a = 32 / (D * Math.sqrt(E));
    l = (10 * Math.log10(L)) / a;
    document.getElementById('H').value = H;
    document.getElementById('p').value = p;
    document.getElementById('bt').value = bt;
    document.getElementById('pd').value = pd;
    document.getElementById('lbig').value = L;
    document.getElementById('w').value = w;
    document.getElementById('M').value = M;
    document.getElementById('a').value = a;
    document.getElementById('lsmall').value = l;
    document.getElementById('radiationType').innerHTML = getElectromagneticRadiationType(f);

}

function log(base, x) {
    return Math.log(x) / Math.log(base);
}

function getElectromagneticRadiationType(frequency) {
    if (frequency < 3e4) {
        return "Название : Радиоволны<br> Сверхдлинные<br> Длина волны : более 10км<br> Источники: Атмосферные и магнитосферные явления. Радиосвязь.";
    } else if (frequency < 3e5) {
        return "Название : Радиоволны<br> Длинные<br> Длина волны : 1-10км<br> Источники: Атмосферные и магнитосферные явления. Радиосвязь.";
    } else if (frequency < 3e6) {
        return "Название : Радиоволны<br> Средние<br> Длина волны : 100-1000м<br> Источники: Атмосферные и магнитосферные явления. Радиосвязь.";
    } else if (frequency < 3e7) {
        return "Название : Радиоволны<br> Короткие<br> Длина волны : 10-100м<br> Источники: Атмосферные и магнитосферные явления. Радиосвязь.";
    } else if (frequency < 3e11) {
        return "Название : Радиоволны<br> Ультракороткие<br> Длина волны : 1-10м<br> Источники: Атмосферные и магнитосферные явления. Радиосвязь.";
    } else if (frequency < 429e12) {
        return "Название : ИК-излучение<br> Длина волны : 780нм-1мм<br> Источники: Излучение молекул и атомов при тепловых и электрических вохдействиях. ИК-лазеры. ИК-приборы.";
    } else if (frequency < 750e12) {
        return "Название : Видимое излучение<br> Длина волны : 780нм - 380нм<br> Источники: Излучение молекул и атомов при тепловых и электрических вохдействиях.";
    } else if (frequency < 3e16) {
        return "Название : УФ-излучение<br> Длина волны : 380нм - 10нм<br> Источники: Излучение атомов под воздействием ускоренных электронов. УФ-лазеры. УФ-приборы.";
    } else if (frequency < 6e19) {
        return "Название : Рентгеновское излучение<br> Длина волны : 10нм - 5пм<br> Источники: Атомные процессы при воздействии ускоренных заряженных частиц. Рентгеновские лазеры. Рентгеновские приборы.";
    } else if (frequency >= 6e19) {
        return "Название : Гамма-излучение<br> Длина волны : менее 5пм<br> Источники: Ядерные процессы. Гамма-лазеры. Гамма-приборы. Радиоактивный распад.";
    }
    return "no value jalabcha"
}
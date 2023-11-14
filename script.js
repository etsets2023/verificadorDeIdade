function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'meninoBebe.jpg');
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'homemJovem.jpg')
            } else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'homemAdulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homemIdoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'meninaBebe.jpg');
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'mulherJovem.jpg')
            } else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulherAdulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulherIdosa.jpg')
            }
        }
        res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos' 
        res.appendChild(img)
    }
}
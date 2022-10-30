function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
             img.setAttribute('id','foto')

        if (fsex[0].checked) {
            gênero = 'um <strong>Homem</strong>'
            if (idade >=0 && idade <10){
                // Criança 
                img.setAttribute('src','./assets/fotosidade/babymasc.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src','./assets/fotosidade/youngmasc.jpg')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src','./assets/fotosidade/adultmasc.jpg')
            } else  {
                // Idoso
                img.setAttribute('src','./assets/fotosidade/oldmasc.jpg')
            }

        } else if (fsex[1].checked) {
            gênero = 'uma <strong>Mulher</strong>'
            if (idade >=0 && idade <10){
                // Criança 
                img.setAttribute('src','./assets/fotosidade/babyfem.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src','./assets/fotosidade/youngfem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src','./assets/fotosidade/adultfem.jpg')
            } else {
                // Idoso
                img.setAttribute('src','./assets/fotosidade/oldfem.jpg')
            }
        
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com <strong>${idade}</strong> anos.`
        res.appendChild(img)
    }
}

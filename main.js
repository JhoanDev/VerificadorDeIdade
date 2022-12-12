function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{
        var sex = document.getElementsByName('rad')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imgs/bebem.jpg')
            }
            else if(idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'imgs/1jovemm.jpg')
            }
            else if(idade >= 21 && idade < 55) {
                //adulto
                img.setAttribute('src', 'imgs/adultom.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'imgs/idosom.jpg')
            }
        }
        else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imgs/bebef.jpg')
            }
            else if(idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'imgs/1jovemf.jpg')
            }
            else if(idade >= 21 && idade < 55) {
                //adulto
                img.setAttribute('src', 'imgs/adultof.jpg')
            }
            else {
                //idoso]
                img.setAttribute('src', 'imgs/idosof.jpg')
            }
        }
        res.innerHTML = `Você é <b>${genero}</b> e tem <b>${idade}</b> anos!`
        res.appendChild(img)
    }
}
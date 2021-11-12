function imgEspecular(cadena) {
    let n = cadena.length;
    let img = "";
    let j = 1;
    for (let i = 0; i < n; i++) {
        img[i] = cadena[n - j];
        j++;
    }
    return img;
}

function problema197() {
    let mensaje = document.getElementById('idmensaje').value;
    let xpp = mensaje;
    document.getElementById("res").innerHTML = "<p> x'': " + xpp + "</p>";
    let n = mensaje.length;
    let aux = '';
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            aux[i - j] += xpp[i];
            //Preguntar a Danny de su codigo ya que aux[i-j] sale indefinido y no agrega
            console.log(aux);
        } else {
            j++;
            aux[n - j] += xpp[i];
            console.log(aux);
        }
    }
    let xp = aux;
    document.getElementById("res").innerHTML += "<p> x' => " + xp + "</p>";
    /*
    aux = "";
    let x = "";
    j = 0;
    let vocales = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < n; i++) {
        //strtolower: devuelve un string con todos los caracteres alfabéticos convertidos a minúsculas.
        if (!vocales.includes(xp[i].toLowerCase)) {
            aux[j] = xp[i];
            j++;
        } else {
            x += imgEspecular(aux);
            x += xp[i];
            aux = "";
            j = 0;
        }
        if (i == (n - 1)) {
            x += imgEspecular[aux];
        }
    }
    document.getElementById("res").innerHTML = "<p> x' -> x => " + x + "</p>";*/
}
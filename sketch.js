fill(255);
text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
if (xBolinha > 596) {
meusPontos += 1;
ponto.play();
}
if (xBolinha < 10) {
pontosDoOponente += 1;
ponto.play();
}
}

const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const btn = document.getElementById("btn");
const saida = document.getElementById("saida");

function lerNumero(input) { 
    const v = Number(input.value);
    if (!input.value || Number.isNaN(v)) return null;
    return v;
}

btn.addEventListener("click", () => { 
    const a = lerNumero(n1);
    const b = lerNumero(n2);
    const c = lerNumero(n3);

   if (a === null || b === null || c === null) { 
     saida.textContent = "preencha as 3 notas com número os válidos.";
     return;
}
  
  const media = (a + b + c) / 3;
  saida.textContent = `Média: ${media.toFixed(2)}`;
});


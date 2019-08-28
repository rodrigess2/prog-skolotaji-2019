let masivs[]
function iegutPecIndeksa(i) {
    return masivs[i];
  }
  function mainitPecIndeksa(i, vertiba) {
    masivs[i] = vertiba;
  }
  
  function dzestPecIndeksa(i) {
    masivs = masivs.splice(i, 1);
    masivs.pop();
    masivs.push(2);
  }
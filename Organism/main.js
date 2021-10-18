// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate () {
      // Generate one time random number for dna bases
      let randNum = Math.floor(Math.random() * 15);
      // array of dna bases
      const dnaBases = ['A', 'T', 'C', 'G'];
      // remove extracted element from bases so as to not repeat
      dnaBases.splice(dnaBases.indexOf(this.dna[randNum]), 1)
      // replace element of dna with random base
      this.dna[randNum] = dnaBases[Math.floor(Math.random() * 3)]
      return this.dna
    },
    compareDNA (pAequor) {
      let numSame = 0
      for (let i = 0; i < pAequor.dna.length; i++) {
        pAequor.dna[i] === this.dna[i] ? numSame++ : null
      }
      console.log(numSame)
      console.log(`speciment #${this.specimenNum} and specimen # ${pAequor.specimenNum} have ${Math.round(numSame/this.dna.length*100)}% DNA in common.`)
    },
    willLikelySurvive() {
      let numCG = 0;
      this.dna.forEach(base => {base === 'C' || base === 'G' ? numCG++ : null})
      return numCG/this.dna.length >= .6 ? true : false
    }
  }
}

function survivableOrganisms() {
  let organisms = [];
  for(let i = 0; i < 30; i++) {
    organism = pAequorFactory(i, mockUpStrand());
    while (!organism.willLikelySurvive) {
      organism.mutate;
    }
    organisms.push(organism)
  }
  return organisms
}

function verifySurvive() {
  let organisms = survivableOrganisms();
  let survive = true;
  organisms.forEach(organism => {!organism.willLikelySurvive() ? survive = false : null})
  return survive;
}

// Test Cases
let organism = pAequorFactory(1, mockUpStrand());
let organism2 = pAequorFactory(2, mockUpStrand());
console.log(organism);
console.log(organism2);
console.log(organism.willLikelySurvive());
console.log(organism2.willLikelySurvive());

console.log(verifySurvive());

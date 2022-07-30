//[JEDI LEVEL] Job Matching #3
// https://www.codewars.com/kata/56c2a067585d9ac8280003c9/

function basicMatch(candidate, job) {
  // checks if the candidate years can be boosted
  if (candidate.preference === 'desired') {
    candidate.experience *= 1.5;
  }
  // checks if the candidate's experiense is greater than job ideal years
  if (candidate.experience < job.idealYears) {
    return false;
  }
  
  //compares skills names
  if (candidate.name === job.name) {
    return true;
  }
  return job.substitutions.some((skill) => skill.name === candidate.name);
}

function advancedMatch(candidate, job) {
  // checks if the canidate would like to avoid the skills
  if (
    candidate.skills.some(
      (skill) => skill.name === job.name && skill.preference === 'avoid'
    )
  ) {
    return false;
  }
  return candidate.skills.some((candidate) => basicMatch(candidate, job));
}

function match(candidate, job) {
  return job.skills.every((job) => advancedMatch(candidate, job));
}

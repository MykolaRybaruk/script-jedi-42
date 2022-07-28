// 1) Job Matching #1
// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/

let candidate1 = { minSalary: 120000 },
  job1 = { maxSalary: 130000 },
  job2 = { maxSalary: 80000 };

function match(candidate, job) {
  const tenPercents = candidate.minSalary * 0.1;
  if (candidate.minSalary == null || job.maxSalary == null) {
    throw new Error();
  }
  if (candidate.minSalary <= job.maxSalary + tenPercents) {
    return true;
  }

  return false;
}





// 2) Job Matching #2
// https://www.codewars.com/kata/56c2578be8b139bd5c001bd8

function filterByEquity(candidates, job) {
  const applicable = candidates.filter((x) => {
    if (
      (x.desiresEquity == true && job.equityMax > 0) ||
      x.desiresEquity == false
    ) {
      return x;
    }
  });
  return applicable;
}

function filterByLocation(candidates, job) {
  const filtered = candidates.filter((x) => {
    const candCities = new Set(x.desiredLocations);
    candCities.add(x.currentLocation);
    const jobCities = new Set(job.locations);
    const inter = new Set([...candCities].filter((y) => jobCities.has(y)));
    if (inter.size != 0) {
      return x;
    }
  });
  return filtered;
}

function match(job, candidates) {
  const matchByEquity = filterByEquity(candidates, job);
  const match = filterByLocation(matchByEquity, job);
  return match;
}

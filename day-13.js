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

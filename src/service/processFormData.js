import courseData from "@/lib/courses.json";

function convertScale(oldScore) {
  return ((oldScore - 1) / 5) * 10;
}

const yearStringToNumber = {
  Freshman: 1,
  Sophomore: 2,
  Junior: 3,
  Senior: 4,
};

const diffStringToNumber = {
  "1 (Easy A)": 1,
  2: 2,
  "3 (Average)": 3,
  4: 4,
  "5 (Most Challenging)": 5,
};

function getMaxKeyValue(obj) {
  let maxKey = null;
  let maxValue = -Infinity; // Initialize to the smallest number
  for (const [key, value] of Object.entries(obj)) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }
  const mvString = `${maxValue * 100}%`;
  return { maxKey, mvString };
}

function getInherentScore(oi, oc, s) {
  oi = convertScale(oi);
  oc = convertScale(oc);
  s = convertScale(s);
  return (oi + oc + s) / 3;
}

function getAvgYear(demoYear) {
  return (
    demoYear.Freshman +
    2 * demoYear.Sophomore +
    3 * demoYear.Junior +
    4 * demoYear.Senior
  );
}

export function processFormData(formData) {
  let studentYear = yearStringToNumber[formData.year];
  let finalScores = [];

  courseData.forEach((course) => {
    const {
      ctec: { overallInstruction, overallCourse, challenge, stimulus, hours },
      demoYear,
      demoSchool,
      demoRequirement,
    } = course;

    let avgYear = getAvgYear(demoYear);
    let diff = Math.abs(avgYear - studentYear);
    let yearCloseScore = (1 - diff / 3) * 10;
    let yearHitScore = demoYear[formData.year] * 10;
    let difficultyRating = challenge + hours - 5;
    let diffRelevance = Math.abs(
      difficultyRating - diffStringToNumber[formData.diff]
    );

    let yearScore = (yearCloseScore + yearHitScore) / 2;
    let diffScore = 2 - diffRelevance / 4;
    let schoolScore = (demoSchool[formData.school] + 1) * 2;
    let reqScore = demoRequirement[formData.fulfills];
    let majorScore = 5; // Placeholder value
    let inherentScore = getInherentScore(
      overallInstruction,
      overallCourse,
      stimulus
    );

    let finalScore =
      (inherentScore / 2) *
      yearScore *
      schoolScore *
      (majorScore / 5) *
      (1 + reqScore) *
      diffScore;

    let title = course.title;

    let maxDemo = getMaxKeyValue(demoYear);
    let ratingOverall = course.ctec.overallCourse;
    let hrsPerWeek = course.ctec.hours;

    finalScores.push({ title, finalScore, maxDemo, ratingOverall, hrsPerWeek });
  });

  finalScores.sort((a, b) => b.finalScore - a.finalScore);
  return finalScores;
}

function solution(id_list, report, k) {
  let answer = [];

  let reports = [...new Set(report)].map((el) => el.split(" "));

  let reportId = new Map();

  for ([, report] of reports) {
    reportId.set(report, reportId.get(report) + 1 || 1);
  }

  let mailId = new Map();

  for ([user, report] of reports) {
    if (reportId.get(report) >= k) {
      mailId.set(user, mailId.get(user) + 1 || 1);
    }
  }

  answer = id_list.map((id) => mailId.get(id) || 0);

  return answer;
}

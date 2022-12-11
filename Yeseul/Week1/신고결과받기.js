// Set, Map을 사용한 풀이
function solution(id_list, report, k) {
  let answer = [];

  // 신고자들의 중복을 방지하기 위해 Set을 사용한다.
  // '사용자 신고자'로 되어 있는 string을 분리하여 [사용자, 신고자]로 만들어준다.
  let reports = [...new Set(report)].map((el) => el.split(" "));

  // 신고 당한 사용자 id의 Map
  let reportId = new Map();

  // 신고 횟수 카운트
  for ([, report] of reports) {
    //이미 map에 있으면 1을 더해주고 없으면 1
    reportId.set(report, reportId.get(report) + 1 || 1);
  }

  // 메일 발송 id Map
  let mailId = new Map();

  // 메일 발송 개수 카운트
  for ([user, report] of reports) {
    //신고 받은 횟수가 k보다 크거나 같을 경우 메일을 보낸다.
    if (reportId.get(report) >= k) {
      mailId.set(user, mailId.get(user) + 1 || 1);
    }
  }

  // 메일을 받지 않는 경우 0으로 해준다.
  answer = id_list.map((id) => mailId.get(id) || 0);

  return answer;
}

// 17분
function solution(id_list, report, k) {
    const cake = {};
    const people = {};
    id_list.forEach((v) => {
        cake[v] = { count: 0, people: [] };
        people[v] = 0;
    });
    report.forEach((rpt) => {
        const [reporter, reported] = rpt.split(" ");
        if (cake[reported].people.indexOf(reporter) === -1) {
            cake[reported].count += 1;
            cake[reported].people.push(reporter);
        }
    });
    Object.values(cake).forEach((v) => {
        if (v.count >= k) v.people.forEach((u) => (people[u] += 1));
    });
    var answer = Object.values(people);
    return answer;
}

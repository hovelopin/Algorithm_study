# 16 분
def solution(id_list, report, k):
    cake = {}
    people = {}
    for i in id_list:
        cake[i] = {"count": 0, "reporter": []}
        people[i] = 0
        
    for i in report:
        reporter, reported = i.split(" ")
        if reporter not in cake[reported]['reporter']:
            cake[reported]['count'] += 1
            cake[reported]['reporter'].append(reporter)
        
    for i in cake:
        if cake.get(i)['count'] >= k:
            reporters = cake.get(i)['reporter']
            for j in reporters:
                people[j] += 1

    answer = [people[i] for i in people]
    return answer
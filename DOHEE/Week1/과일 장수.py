# 14분
def solution(k, m, score):
    score.sort(reverse=True)
    answer = 0
    for i in range(int(len(score) / m)):
        idx = (i + 1) * m - 1
        answer += score[idx] * m
    return answer
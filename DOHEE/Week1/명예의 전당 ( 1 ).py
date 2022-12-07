# 10분
def solution(k, score):
    sortedScore = []
    answer = []
    for i in range(len(score)):
        sortedScore.append(score[i])
        sortedScore.sort(reverse = True)
        if i < k - 1:
            answer.append(sortedScore[i])
        else:
            answer.append(sortedScore[k - 1])
    return answer
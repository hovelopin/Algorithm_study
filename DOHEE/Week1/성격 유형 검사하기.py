# 20분
def solution(survey, choices):
    answer = ''
    cake = {}
    type = ["R", "T", "C", "F", "J", "M", "A", "N"]

    for i in type:
        cake[i] = cake.get(i, 0)

    for i in range(len(survey)):
        if choices[i] > 4:
            cake[survey[i][1]] += choices[i] - 4
        elif choices[i] < 4:
            cake[survey[i][0]] += 4 - choices[i]

    answer += "T" if cake['R'] < cake['T'] else "R"
    answer += "F" if cake["C"] < cake["F"] else "C"
    answer += "M" if cake["J"] < cake["M"] else "J"
    answer += "N" if cake["A"] < cake["N"] else "A"
        
    return answer
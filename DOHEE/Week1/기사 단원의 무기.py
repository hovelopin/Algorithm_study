# 30분
import math

def solution(number, limit, power):
    answer = 0
    for i in range(1, number + 1):
        origin_power = []
        for j in range(1, int(i ** 0.5) + 1):
            if i % j == 0:
                origin_power.append(j)
                if math.sqrt(i) != j:
                       origin_power.append(i / j)
        if len(origin_power) > limit:
            answer += power
        else:
            answer += len(origin_power)
    return answer
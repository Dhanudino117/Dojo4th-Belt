n = int(input())
arr = list(map(int, input().split()))

prefix = []
count = 0
for i in arr:
    count = count +i
    prefix.append(count)

print(*prefix)
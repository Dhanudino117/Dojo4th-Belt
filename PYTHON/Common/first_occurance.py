
S = input()
W = input()

first_index = -1

for i in range(len(S) - len(W) + 1):
    if S[i:i + len(W)] == W:
        first_index = i
        break 
if first_index != -1:
    result = S[:first_index] + S[first_index + len(W):]
else:
    result = S  
print(result.strip())

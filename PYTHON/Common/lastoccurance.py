S = input()  # Read the full string
W = input()  # Read the word to be removed

for i in range(len(S) - len(W) + 1):
    if S[i:i + len(W)] == W:
        last_index = i
        
if last_index != -1:
    result = S[:last_index] + S[last_index + len(W):]
else:
    result = S  
print(result)  

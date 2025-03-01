n = int(input())
arr = list(map(int, input().split()))
x = int(input())

# Reverse manually
for i in range(n // 2):
    arr[i], arr[n - i - 1] = arr[n - i - 1], arr[i]

# Separate elements based on x
greater, lesser = "", ""
for num in arr:
    if num > x:
        greater += str(num) + " "
    else:
        lesser += str(num) + " "

print("".join(greater))
print("".join(lesser))

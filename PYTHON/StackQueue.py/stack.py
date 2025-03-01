N, S = map(int, input().split())  # N: Number of operations, S: Max size of stack
stack = []

for _ in range(N):
    operation = input().split()
    if operation[0] == "push":
        x = int(operation[1])
        if len(stack) < S:
            stack.append(x)
        else:
            print("stack overflow")
    elif operation[0] == "pop":
        if stack:
            print(stack.pop())
        else:
            print("stack underflow")
    elif operation[0] == "top":
        if stack:
            print(stack[-1])
        else:
            print("stack underflow")


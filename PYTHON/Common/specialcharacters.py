def is_valid(s):
    stack = []
    brackets = {')': '(', '}': '{', ']': '['}

    for char in s:
        if char in brackets:
            if not stack:  # If stack is empty and closing bracket appears
                return False
            top = stack.pop()  # Remove last element (stack top)
            if brackets[char] != top:  # Check if it matches
                return False
        else:
            stack.append(char)  # Push open brackets to stack

    return len(stack) == 0  # Stack should be empty if valid

# Take input
s = input().strip()

# Check validity
if is_valid(s):
    print("true")
else:
    print("false")

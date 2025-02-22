def power(x, n):
    if n == 0:
        return 1
    elif n < 0:
        return 1 / power(x, -n)
    elif n % 2 == 0:
        half = power(x, n // 2)
        return half * half
    else:
        return x * power(x, n - 1)

# Read input
x = float(input())
n = int(input())

# Compute power and print result rounded to two decimal places
result = power(x, n)
print(f"{result:.2f}")


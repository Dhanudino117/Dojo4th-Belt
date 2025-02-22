# Input handling
n = int(input())  # Read size of the array
arr = input().split()  # Read space-separated elements as a list of strings
x = int(input())  # Read threshold value

# Convert elements to integers manually
for i in range(n):
    arr[i] = int(arr[i])

# Reverse the array manually (without using reverse())
for i in range(n // 2):
    arr[i], arr[n - i - 1] = arr[n - i - 1], arr[i]

# Print elements greater than x
first_output = ""
for i in range(n):
    if arr[i] > x:
        first_output += str(arr[i]) + " "

print(first_output.strip())  # Strip extra space at the end

# Print elements less than or equal to x
second_output = ""
for i in range(n):
    if arr[i] <= x:
        second_output += str(arr[i]) + " "

print(second_output.strip())  # Strip extra space at the end

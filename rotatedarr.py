# Right rotated ==> 
def right_rotated(arr,d):
    d = d% len(arr)
    return arr[-d:]+arr[:-d]
n,d = map(int, input().split())
arr = list(map(int, input().split()))
print(*right_rotated(arr,d))

# Left Rotated s==> 
def left_rotated(arr, d):
    d = d % len(arr)  
    return arr[d:] + arr[:d]

n, d = map(int, input().split()) 
arr = list(map(int, input().split()))  
print(*left_rotated(arr, d))
